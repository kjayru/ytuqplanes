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
            datosNotasModel.provincias = getProvincias();
            return View(datosNotasModel);
        }

        public ActionResult Provincia(string id) {

            dynamic datosNotasModel = new ExpandoObject();

            var prov = db.provincias.Where(c => c.slug == id).Select(p => new { p.id , p.imagen, p.nombre }).First();

            ViewBag.provincia = prov.nombre;
            ViewBag.provincia_imagen = prov.imagen;

            var notas = db.posts.Where(c => c.provincia_id == prov.id).Select(p => new
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

            var cat1 = db.posts.Where(c => c.provincia_id == prov.id).Where(d => d.categoria_blog_id == 1).Select(p => p.id).Count();
            var cat2= db.posts.Where(c => c.provincia_id == prov.id).Where(d => d.categoria_blog_id == 2).Select(p => p.id).Count();
            var cat3 = db.posts.Where(c => c.provincia_id == prov.id).Where(d => d.categoria_blog_id == 3).Select(p => p.id).Count();


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
                        provincia = prov.nombre,
                        provincia_imagen = prov.imagen
                    }
                    );
            }

            datosNotasModel.notas = datonotas;

            ViewBag.NumVivencial = cat1;
            ViewBag.NumGastronomia = cat2;
            ViewBag.NumFestividades = cat3;

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
                        resumen = notas[j].resumen,
                        slug = notas[j].slug,
                        categoria_id = notas[j].categoria_id,
                        categoria = notas[j].categoria,

                        provincia_id = notas[j].provincia_id,
                        provincia = notas[j].provincia,
                        tipo = notas[j].tipo,
                        provincia_slug = notas[j].provincia_slug
                        
                    }
                    );
            }

            return datonotas;
        }




        private List<Provincias> getProvincias()
        {
            var prov = from t1 in db.provincias
                       join t2 in db.regions
                       
                       on t1.region_id equals t2.id
                       where t1.estado == 1
                       select new
                       {
                           id = t1.id,
                           nombre = t1.nombre,
                           region = t2.nombre,
                           imagen = t1.imagen,
                           slug = t1.slug

                       };

            var provs = prov.ToList();




            List<Provincias> providatos = new List<Provincias>();
            for (var k = 0; k < provs.Count(); k++)
            {
                providatos.Add(
                    new Provincias
                    {
                        id = provs[k].id,
                        nombre = provs[k].nombre,
                        region = provs[k].region,
                        imagen = provs[k].imagen,
                        slug = provs[k].slug

                    });

            }

            return providatos;

        }
    }
}