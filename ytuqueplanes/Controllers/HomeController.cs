using Antlr.Runtime.Misc;
using EntidadesData;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Dynamic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Web;
using System.Web.Mvc;
using ytuqueplanes.Models;

namespace ytuqueplanes.Controllers
{
  
    public class HomeController : Controller
    {
        ytuqueplanesDBEntities1 db = new ytuqueplanesDBEntities1();

        public HomeController()
        {
            ViewBag.hostStaticUrl = ConfigurationManager.AppSettings["staticURL"];
            var prov = db.provincias.Where(c => c.estado == 1 && c.id != 26).Select(p => new { p.id, p.nombre, p.slug,p.region_id }).ToList();

            List<Provincias> pr = new List<Provincias>();
            for (var i = 0; i < prov.Count(); i++) {

                var regID = prov[i].region_id;
                string regname="";
                var reg = db.regions.Where(c => c.id == regID).Select(q => new { q.nombre }).FirstOrDefault();

                if (reg != null) {
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

            var seo = db.seos.Where(c => c.id == 1).Select(p => new { p.og_title, p.og_description, p.og_image, p.keywords }).FirstOrDefault();
            //seo
            ViewBag.seotitle = seo.og_title;
            ViewBag.seotype = seo.og_description;
            ViewBag.seourl = System.Web.HttpContext.Current.Request.Url.AbsoluteUri;
            ViewBag.seoimagen = seo.og_image;
            ViewBag.seodescripcion = seo.og_description;
            ViewBag.keywords = seo.keywords;
        }

        public ActionResult Index()
        {


            dynamic datosHomeModel = new ExpandoObject();

            
            datosHomeModel.sliders = GetSliders();
            datosHomeModel.notas = getNotas();
            datosHomeModel.festividades = getFestividad();
           

            return View(datosHomeModel);
        }

       private List<Slide>  GetSliders() {

            Slide slider = new Slide();

            var sliders = db.slider_item.Where(c => c.slider_id == 1).Where(d => d.estado==1).Select(p => new {
                p.imagen_lg,
                p.imagen_md,
                p.imagen_sm,
                p.imagen_xl,
                p.titulo,
                p.alt,
                p.descripcion,
                p.estado,
                p.url
            }).ToList();

            List<Slide> datos = new List<Slide>();

            for (var i = 0; i < sliders.Count(); i++)
            {
                datos.Add(
                   new Slide
                   {
                       imagen_lg = sliders[i].imagen_lg,
                       imagen_md = sliders[i].imagen_md,
                       imagen_sm = sliders[i].imagen_sm,
                       imagen_xl = sliders[i].imagen_xl,
                       titulo = sliders[i].titulo,
                       descripcion = sliders[i].descripcion,
                       estado = sliders[i].estado,
                       url = sliders[i].url
                   });
            }

            return datos;
        }


        private List<Blog> getNotas() {
            
        


            var dt = (from pd in db.posts
                      join od in db.provincias on pd.provincia_id equals od.id
                      join ct in db.categorias on pd.categoria_blog_id equals ct.id
                      where pd.destacado == 1
                      orderby pd.id descending
                      select new
                      {
                          id = pd.id,
                          titulo = pd.titulo,
                          slug = pd.slug,
                          contenido = pd.contenido,
                          resumen = pd.resumen,
                          imagen = pd.imagen,
                          thumb = pd.thumb,
                          categoria_id = pd.categoria_blog_id,
                          categoria = ct.nombre,
                          tipo = pd.tipo_id,
                          provincia_id = pd.provincia_id,
                          provincia = od.nombre,
                          provincia_slug = od.slug
                      }).ToList();


            var notas = dt.ToList();




            List<Blog> datonotas = new List<Blog>();

            for (var j = 0; j < notas.Count(); j++)
            {
                datonotas.Add(
                    new Blog
                    {
                        id = notas[j].id,
                        titulo = notas[j].titulo,
                        imagen = notas[j].imagen,
                        thumb = notas[j].thumb,
                        resumen = notas[j].resumen,
                        slug = notas[j].slug,
                        categoria_id = notas[j].categoria_id,
                        categoria = notas[j].categoria,

                        provincia_id = notas[j].provincia_id,
                        provincia = notas[j].provincia,
                        tipo = notas[j].tipo,
                        provincia_slug = notas[j].provincia_slug

                    });
            }

            return datonotas;
        }

        private List<Festividad> getFestividad()
        {
            Festividad festividad = new Festividad();

            var mesActual = DateTime.Now.Month;
           
            
          var festi = db.festividades.Where(c => c.estado == 1).Where(d=> d.mes_id == mesActual).Take(8);

            List<Festividad> datos = new List<Festividad>();


            foreach (var item in festi) {
                var nid = item.provincia_id;
                var prov = db.provincias.Where(c => c.id == nid).FirstOrDefault();
                datos.Add(new Festividad {
                    id = item.id,
                    nombre = item.nombre,
                    inicio = item.inicio,
                    final = item.final,
                    provincia = prov.nombre,
                    imagen = item.imagen,
                    thumb = item.thumb,
                    contenido = item.contenido,
                    mes = item.mes.nombre,
                    likes = item.likes,
                    documento = item.documento,
                    slug = item.slug
                });
            }

          
           /* var fest = from t1 in db.festividades
            join t2 in db.meses
            on t1.mes_id equals t2.id
            join t3 in db.provincias
            on t1.provincia_id equals t3.id
            where t1.estado == 1
            select new
            {
               id =  t1.id,
               nombre = t1.nombre,
               inicio = t1.inicio,
               final = t1.final,
               provincia = t3.nombre,
               imagen = t1.imagen,
               thumb = t1.thumb,
               contenido = t1.contenido,
               mes =  t2.nombre,
               likes = t1.likes,
              documento =  t1.documento,
              slug = t1.slug
            };

          var festividades = fest.Take(8);


            List < Festividad > festidatos = new List<Festividad>();
            foreach (var item in festividades)
            {
                festidatos.Add(
                    new Festividad
                    {
                        id = item.id,
                        nombre = item.nombre,
                        inicio = item.inicio,
                        final = item.final,
                        provincia = item.provincia,
                        imagen = item.imagen,
                        thumb =item.thumb,
                        contenido = item.contenido,
                        mes = item.mes,
                        likes = item.likes,
                        documento = item.documento,
                        slug = item.slug
                    });

            }*/

            return datos;
        

        }


    }
}