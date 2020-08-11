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
    public class BlogViajeroController : Controller
    {
        // GET: BlogViajero
        ytuqueplanesDBEntities db = new ytuqueplanesDBEntities();
        public ActionResult Index()
        {
            dynamic datosNotasModel = new ExpandoObject();

            datosNotasModel.notas = getNotas();

            return View(datosNotasModel);
        }

        public ActionResult Detalle(string id) {



            var detalle = db.posts.Where(c => c.slug == id).Select(p => new {
                p.id,
                p.titulo,
                p.slug,
                p.contenido,
                p.resumen,
                p.imagen,
                p.categoria_blog_id
                
            }).FirstOrDefault();




            ViewBag.titulo = detalle.titulo;
                ViewBag.slug = detalle.slug;
                ViewBag.contenido = detalle.contenido;
                ViewBag.imagen = detalle.imagen;
                ViewBag.resumen = detalle.resumen;
                
            


            return View();
        }



        private List<Blog> getNotas()
        {


            Blog blog = new Blog();

            var notas = db.posts.OrderByDescending(c => c.id).Select(p => new {
                p.id,
                p.titulo,
                p.imagen,
                p.likes,
                p.resumen,
                p.slug
            }).ToList();

            List<Blog> datonotas = new List<Blog>();

            for (var j = 0; j < notas.Count(); j++)
            {
                datonotas.Add(
                    new Blog
                    {
                        id = notas[j].id,
                        titulo = notas[j].titulo,
                        imagen = notas[j].imagen,
                        likes = notas[j].likes,
                        resumen = notas[j].resumen,
                        slug = notas[j].slug
                    }
                    );
            }

            return datonotas;
        }
    }
}