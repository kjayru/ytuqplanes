using EntidadesData;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Security.Cryptography;
using System.Web;
using System.Web.Mvc;
using ytuqueplanes.Models;

namespace ytuqueplanes.Controllers
{
    public class RutasController : Controller
    {
        ytuqueplanesDBEntities db = new ytuqueplanesDBEntities();
        // GET: Rutas
        public ActionResult Index()
        {
            dynamic RutasModel = new ExpandoObject();
            var provincias = db.provincias.Select(p => new {p.id, p.nombre, p.slug, p.thumb }).ToList();
            

            List<RutaProvincia> rp = new List<RutaProvincia>();

            for (var i = 0; i < provincias.Count; i++) {
                var provid = provincias[i].id;
                var conteo = (from rt in db.rutas
                              join prov in db.provincias on rt.provincia_id equals prov.id
                              where rt.provincia_id == provid
                              select new { rt.id, prov.nombre, prov.slug, prov.thumb }).Count();

                if (conteo > 0)
                {
                    var rutas = (from rt in db.rutas
                                 join prov in db.provincias on rt.provincia_id equals prov.id
                                 join cat in db.categoria_ruta on rt.categoria_ruta_id equals cat.id
                                 where rt.provincia_id == provid
                                 select new { 
                                     id = rt.id, 
                                     provincia =prov.nombre,
                                     slug = prov.slug,
                                     thumb = prov.thumb,
                                     categoria = cat.nombre 
                                 }).ToList();

                    for (var j = 0;j< rutas.Count; j++)
                    {
                        rp.Add(
                            new RutaProvincia
                            {
                                conteo = conteo,
                                categoria = rutas[j].categoria,
                                provincia_nombre = rutas[j].provincia,
                                provincia_slug = rutas[j].slug,
                                provincia_thumb = rutas[j].thumb
                            });
                    }
                }
            }

            


            Slide slider = new Slide();

            var sliders = db.slider_item.Where(c => c.slider_id == 3).Select(p => new {
                p.imagen_lg,
                p.imagen_md,
                p.imagen_sm,
                p.imagen_xl,
                p.titulo,
                p.alt,
                p.descripcion
            }).ToList();


            ViewBag.imagen_lg = sliders[0].imagen_lg;
            ViewBag.imagen_md = sliders[0].imagen_md;
            ViewBag.imagen_sm = sliders[0].imagen_sm;
            ViewBag.imagen_xl = sliders[0].imagen_xl;
            ViewBag.titulo = sliders[0].titulo;
            ViewBag.descripcion = sliders[0].descripcion;


            RutasModel.provincias = rp;
            //return Json(GetSliders(), JsonRequestBehavior.AllowGet);
            return View(RutasModel);
        }

        public ActionResult DetalleRuta(String id)
        {
           
            var pslug = id;
            var pv = db.provincias.Where(c => c.slug == pslug).Select(p => new { p.id, p.nombre, p.slug, p.imagen }).FirstOrDefault();

            
            ViewData["nombreProvincia"] = pv.nombre;
            ViewData["imagenProvincia"] = pv.imagen;


            // var ruta = db.rutas.Where(c => c.provincia_id == prov.id).Select(p => new { p.id, p.titulo }).First();

            //select categoria_ruta_id from rutas join provincias on rutas.provincia_id = provincias.id where provincias.id=1 group by categoria_ruta_id
            dynamic RutasModel = new ExpandoObject();

            List<RutaProvincia> rp = new List<RutaProvincia>();


            var rutas = (from rt in db.rutas
                         join prv in db.provincias on rt.provincia_id equals pv.id
                         where rt.provincia_id == prv.id
                         group rt by rt.categoria_ruta_id into g
                         select new
                         {
                              catId = g.Key
                             
                         }).ToList();

            

            for (var j = 0; j < rutas.Count; j++)
            {
                var rCatId = rutas[j].catId;
                var conteo = (from rt in db.rutas
                              where rt.categoria_ruta_id == rCatId
                              where rt.provincia_id == pv.id
                              select new { rt.id }).Count();

                var categoria = db.categorias.Where(c => c.id == rCatId).Select(p => new { p.nombre }).First();

                rp.Add(
                    new RutaProvincia
                    {
                        conteo = conteo,
                        categoria = categoria.nombre,
                        
                    });
            }

            //return Json(rp, JsonRequestBehavior.AllowGet);
           
            RutasModel.rutas = rp;
            return View(RutasModel);
        }

        public ActionResult Mapa(String id) {

            return View();
        }



        private List<Slide> GetSliders()
        {

            Slide slider = new Slide();

            var sliders = db.slider_item.Where(c => c.slider_id == 3).Select(p => new {
                p.imagen_lg,
                p.imagen_md,
                p.imagen_sm,
                p.imagen_xl,
                p.titulo,
                p.alt,
                p.descripcion
            }).ToList();

            List<Slide> datos = new List<Slide>();

            datos.Add(
               new Slide
               {
                   imagen_lg = sliders[0].imagen_lg,
                   imagen_md = sliders[0].imagen_md,
                   imagen_sm = sliders[0].imagen_sm,
                   imagen_xl = sliders[0].imagen_xl,
                   titulo = sliders[0].titulo,
                   descripcion = sliders[0].descripcion
               });


            return datos;
        }


    }
}