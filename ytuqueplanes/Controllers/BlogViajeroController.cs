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

        public ActionResult Provincia(string id) {

            dynamic datosNotasModel = new ExpandoObject();

           

            

            var prov_id = db.provincias.Where(c => c.slug == id).Select(p => p.id).First();

            var notas = db.posts.Where(c => c.provincia_id == prov_id).Select(p => new
            {
                p.id,
                p.titulo,
                p.slug,
                p.contenido,
                p.resumen,
                p.imagen,
                p.categoria_blog_id,
                p.tipo_id,
                p.provincia_id
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
                        resumen = notas[j].resumen,
                        slug = notas[j].slug,
                        categoria_id = notas[j].categoria_blog_id,
                        provincia_id = notas[j].provincia_id,
                        tipo = notas[j].tipo_id,
                        provincia = id
                    }
                    );
            }

            datosNotasModel.notas = datonotas;

            return View(datosNotasModel);

        }
        public ActionResult Detalle(string provincia, string id) {



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


            var dt = (from pd in db.posts
                     join od in db.provincias on pd.provincia_id equals od.id
                     join ct in db.categorias on pd.categoria_blog_id equals ct.id
                     orderby pd.id descending
                     select new
                     {
                        id = pd.id,
                        titulo = pd.titulo,
                        slug =  pd.slug,
                        contenido =  pd.contenido,
                        resumen = pd.resumen,
                         imagen = pd.imagen,
                         categoria_id = pd.categoria_blog_id,
                         categoria = ct.nombre,
                        tipo =  pd.tipo_id,
                        provincia_id =  pd.provincia_id,
                        provincia = od.nombre
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
                        resumen = notas[j].resumen,
                        slug = notas[j].slug,
                        categoria_id = notas[j].categoria_id,
                        categoria = notas[j].categoria,

                        provincia_id = notas[j].provincia_id,
                        provincia = notas[j].provincia,
                        tipo = notas[j].tipo
                        
                    }
                    );
            }

            return datonotas;
        }
    }
}