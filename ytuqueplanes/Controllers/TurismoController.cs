using EntidadesData;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Dynamic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ytuqueplanes.Models;

namespace ytuqueplanes.Controllers
{
    public class TurismoController : Controller
    {
        ytuqueplanesDBEntities1 db = new ytuqueplanesDBEntities1();
        public TurismoController()
        {
            ViewBag.hostStaticUrl = ConfigurationManager.AppSettings["staticURL"];
            var prov = db.provincias.Where(c => c.estado == 1 && c.id != 26).Select(p => new { p.id, p.nombre, p.slug, p.region_id }).ToList();

            List<Provincias> pr = new List<Provincias>();
            for (var i = 0; i < prov.Count(); i++)
            {
                var regID = prov[i].region_id;
                string regname = "";
                var reg = db.regions.Where(c => c.id == regID).Select(q => new { q.nombre }).FirstOrDefault();

                if (reg != null)
                {
                    regname = reg.nombre;
                }
                pr.Add(new Provincias
                {
                    id = prov[i].id,
                    slug = prov[i].slug,
                    nombre = prov[i].nombre,
                    region = regname
                });
            }

            ViewBag.gprovincias = pr;

            var seo = db.seos.Where(c => c.id == 4).Select(p => new { p.og_title, p.og_description, p.og_image, p.keywords }).FirstOrDefault();
            //seo
            ViewBag.seotitle = seo.og_title;
            ViewBag.seotype = seo.og_description;
            ViewBag.seourl = System.Web.HttpContext.Current.Request.Url.AbsoluteUri;
            ViewBag.seoimagen = seo.og_image;
            ViewBag.seodescripcion = seo.og_description;
            ViewBag.keywords = seo.keywords;
        }

        // GET: Turismo
        public ActionResult Index()
        {
            dynamic ModelComunitario = new ExpandoObject();
            var categorias = db.categoria_comunitario.OrderByDescending(c => c.nombre).ToList();
            //var cmms = db.comunitarios.OrderByDescending(c => c.id).ToList();

            var cmms = db.categoria_comunitario.SelectMany(g => g.comunitarios).ToList();

           

            List<CategoriaComunitario> cats = new List<CategoriaComunitario>();
            List<Comunitarios> comuns = new List<Comunitarios>();

            foreach (var item in categorias) {
                cats.Add(new CategoriaComunitario { 
                    id = item.id,
                    nombre = item.nombre
                });
            }

            for (var i=0; i< cmms.Count(); i++) {

                bool duplicate = false;
                for (int z = 0; z < i; z++)
                {

                    if (cmms[z].id == cmms[i].id)
                    {
                        
                        duplicate = true;
                        break;
                    }

                }
                if (!duplicate)
                {
                    comuns.Add(new Comunitarios
                    {
                        id = cmms[i].id,
                        titulo = cmms[i].titulo,
                        slug = cmms[i].slug,
                        imagen = cmms[i].imagen,
                        provincia_id = cmms[i].provincia_id,
                        provincia = cmms[i].provincia.nombre,
                        alt = cmms[i].alt,
                        resumen = cmms[i].resumen,
                        descripcion = cmms[i].descripcion,
                        thumb = cmms[i].thumb,
                        categorias = JsonConvert.SerializeObject(cmms[i].categoria_comunitario.Select(p => p.nombre).ToList())

                    });
                }
            }

           
            ModelComunitario.categories = cats;
            ModelComunitario.comunitarios = comuns;
            return View(ModelComunitario);
        }

        public ActionResult Detalle(string slug) 
        {
            dynamic ModelComunitario = new ExpandoObject();

            var cmms = db.comunitarios.Where(c => c.slug == slug).FirstOrDefault();

            
            var comunitarioID = cmms.id;

           
                ViewBag.titulo = cmms.titulo;
                ViewBag.slug = cmms.slug;
                ViewBag.imagen = cmms.imagen;
                ViewBag.provincia = cmms.provincia.nombre;
                ViewBag.alt = cmms.alt;
                ViewBag.resumen = cmms.resumen;
                ViewBag.descripcion = cmms.descripcion;

            var llega = db.comunitario_llegar.Where(c => c.comunitario_Id == comunitarioID).ToList();
            var hacer = db.comunitario_hacer.Where(c => c.comunitario_Id == comunitarioID).ToList();

            var clima = db.comunitario_clima.Where(c => c.comunitario_Id == comunitarioID).ToList();
            var contacto = db.comunitario_contacto.Where(c => c.comunitario_Id == comunitarioID).Select(p => new { 
               descripcion = p.descripcion,
               opciones = p.comunitario_contacto_option.Select(e => e.descripcion)
            }).ToList();


            //return Json(contacto, JsonRequestBehavior.AllowGet);

            var precio = db.comunitario_precio.Where(c => c.comunitario_Id == comunitarioID).ToList();
            var servicio = db.comunitario_servicio.Where(c => c.comunitario_Id == comunitarioID).ToList();
            var tip = db.comunitario_tip.Where(c => c.comunitario_Id == comunitarioID).ToList();

            var imagenes = db.comunitario_imagen.Where(c => c.comunitario_Id == comunitarioID).ToList();

            List<ComunitarioHacer> lch = new List<ComunitarioHacer>();
            List<ComunitarioLlegar> lcll = new List<ComunitarioLlegar>();
            List<ComunitarioClima> lclima = new List<ComunitarioClima>();
            List<ComunitarioContacto> lcontacto = new List<ComunitarioContacto>();
            List<ComunitarioPrecio> lprecio = new List<ComunitarioPrecio>();
            List<ComunitarioServicio> lservicio = new List<ComunitarioServicio>();
            List<ComunitarioTip> ltip = new List<ComunitarioTip>();
            List<ComunitarioImagen> limagens = new List<ComunitarioImagen>();

            foreach (var item in llega) {
                lcll.Add(new ComunitarioLlegar
                {
                    descripcion = item.descripcion,
                    transporte = item.tipotransporte.nombre
                }); 
            }

            foreach (var it in hacer) {
                lch.Add( new ComunitarioHacer { 
                    nombre = it.nombre
                });
            }

            foreach (var item in clima)
            {
                lclima.Add(new ComunitarioClima
                {
                    descripcion = item.descripcion
                });
            }

            foreach (var item in contacto)
            {
                lcontacto.Add(
                    new ComunitarioContacto(
                        item.descripcion.ToString(), item.opciones.ToList()
                      ));
            }

            foreach (var item in precio)
            {
                lprecio.Add(new ComunitarioPrecio
                {
                    precio = item.precio
                });
            }

            foreach (var item in servicio)
            {
                lservicio.Add(new ComunitarioServicio
                {
                    nombre = item.nombre
                });
            }

            foreach (var item in tip)
            {
                ltip.Add(new ComunitarioTip
                {
                    descripcion = item.descripcion
                });
            }


            foreach (var item in imagenes)
            {
                limagens.Add(new ComunitarioImagen
                {
                    imagen = item.imagen
                });
            }

            //relacionados

            var listado = db.comunitarios.Where(c => c.id != comunitarioID).ToList();
            List<Comunitarios> comuns = new List<Comunitarios>();

            foreach (var its in listado)
            {
                comuns.Add(new Comunitarios
                {                
                    titulo = its.titulo,
                    slug = its.slug,
                    provincia = its.provincia.nombre,
                    thumb = its.thumb                   
                });
            }



           
            ModelComunitario.hacer = lch;
            ModelComunitario.llegar = lcll;
            ModelComunitario.clima = lclima;
            ModelComunitario.contacto = lcontacto;
            ModelComunitario.precio = lprecio;
            ModelComunitario.servicio = lservicio;
            ModelComunitario.tip = ltip;
            ModelComunitario.relacionados = comuns;
            ModelComunitario.galeria = limagens;
            return View(ModelComunitario);
        }

    }
}