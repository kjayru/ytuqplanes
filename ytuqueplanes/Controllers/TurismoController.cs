using EntidadesData;
using System;
using System.Collections.Generic;
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

            var cmms = db.comunitarios.OrderByDescending(c => c.id).ToList();

            List<CategoriaComunitario> cats = new List<CategoriaComunitario>();

            List<Comunitarios> comuns = new List<Comunitarios>();

            foreach (var item in categorias) {
                cats.Add(new CategoriaComunitario { 
                    id = item.id,
                    nombre = item.nombre
                });
            }

            foreach (var its in cmms) {
                comuns.Add(new Comunitarios {
                    id = its.id,
                    titulo = its.titulo,
                    slug = its.slug,
                    imagen = its.imagen,
                    provincia_id = its.provincia_id,
                    provincia = its.provincia.nombre,
                    alt = its.alt,
                    resumen = its.resumen,
                    descripcion = its.descripcion,
                    thumb = its.thumb
                });
            }

            //return Json(comuns, JsonRequestBehavior.AllowGet);
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
                ViewBag.provincia_id = cmms.provincia_id;
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
            var precio = db.comunitario_precio.Where(c => c.comunitario_Id == comunitarioID).ToList();
            var servicio = db.comunitario_servicio.Where(c => c.comunitario_Id == comunitarioID).ToList();
            var tip = db.comunitario_tip.Where(c => c.comunitario_Id == comunitarioID).ToList();

            List<ComunitarioHacer> lch = new List<ComunitarioHacer>();
            List<ComunitarioLlegar> lcll = new List<ComunitarioLlegar>();

            List<ComunitarioClima> lclima = new List<ComunitarioClima>();
            List<ComunitarioContacto> lcontacto = new List<ComunitarioContacto>();
            List<ComunitarioPrecio> lprecio = new List<ComunitarioPrecio>();
            List<ComunitarioServicio> lservicio = new List<ComunitarioServicio>();
            List<ComunitarioTip> ltip = new List<ComunitarioTip>();

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
                lcontacto.Add(new ComunitarioContacto
                {
                    descripcion = item.descripcion,
                   // options = item.opciones
                });
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


            ModelComunitario.hacer = lch;
            ModelComunitario.llegar = lcll;
            ModelComunitario.clima = lclima;
            ModelComunitario.contacto = lcontacto;
            ModelComunitario.precio = lprecio;
            ModelComunitario.servicio = lservicio;
            ModelComunitario.tip = ltip;

            return View(ModelComunitario);
        }

    }
}