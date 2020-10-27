using EntidadesData;
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
    public class NoticiasController : Controller
    {
        // GET: Destinos

        ytuqueplanesDBEntities1 db = new ytuqueplanesDBEntities1();

        public NoticiasController()
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

            var seo = db.seos.Where(c => c.id == 2).Select(p => new { p.og_title, p.og_description, p.og_image, p.keywords }).FirstOrDefault();
            //seo
            ViewBag.seotitle = seo.og_title;
            ViewBag.seotype = seo.og_description;
            ViewBag.seourl = System.Web.HttpContext.Current.Request.Url.AbsoluteUri;
            ViewBag.seoimagen = seo.og_image;
            ViewBag.seodescripcion = seo.og_description;
            ViewBag.keywords = seo.keywords;
        }

        // GET: Noticias
        public ActionResult Index()
        {
            dynamic NoticiasModel = new ExpandoObject();
            //ultimas 3 noticias

            var destacados = db.noticias.OrderByDescending(d => d.id).Select(p =>
           new {
               id = p.id,
               titulo = p.titulo,
               contenido = p.contenido,
               imagen = p.imagen,
               categoria = p.categoria_noticia.nombre
           }).Take(3);

            List<Noticia> dt = new List<Noticia>();

            foreach (var i in destacados)
            {
                dt.Add(

                    new Noticia
                    {
                        id = i.id,
                        titulo = i.titulo,
                        contenido = i.contenido,
                        imagen = i.imagen,
                        categoria = i.categoria
                    });
            }


            //todos
            var noticias = db.noticias.OrderByDescending(d => d.id).Select(p =>
            new {
                id = p.id,
                titulo = p.titulo,
                contenido = p.contenido,
                imagen = p.imagen,
                categoria = p.categoria_noticia.nombre
            }).ToList();

            List<Noticia> news = new List<Noticia>();

            foreach (var item in noticias) {
                news.Add(
                    
                    new Noticia { 
                        id = item.id,
                        titulo= item.titulo,
                        contenido=item.contenido,
                        imagen = item.imagen,
                        categoria=item.categoria
                    });
            }

            NoticiasModel.listado = news;
            NoticiasModel.slides = dt;

            return View(NoticiasModel);
        }

        public ActionResult Detalle(string id) {
            return View();
        }
    }
}