using EntidadesData;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Dynamic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading;
using System.Web;
using System.Web.Mvc;
using ytuqueplanes.Models;

namespace ytuqueplanes.Controllers
{
    public class RutasController : Controller
    {
        ytuqueplanesDBEntities1 db = new ytuqueplanesDBEntities1();
        // GET: Rutas
        public ActionResult Index()
        {
            dynamic RutasModel = new ExpandoObject();
            var provincias = db.provincias.Where(c=> c.estado==1).Select(p => new {p.id, p.nombre, p.slug, p.thumb }).ToList();
            

            List<RutaProvincia> rp = new List<RutaProvincia>();

            for (var i = 0; i < provincias.Count; i++) {
                var provid = provincias[i].id;
                var conteo = db.rutas.Where(c => c.provincia_id == provid).Select(p => new { p.provincia_id }).Count();

                if (conteo > 0)
                {
                    var rutas = (from  rt in db.provincias where rt.id == provid
                                 
                                 where rt.id == provid
                                 select new { 
                                     id = rt.id, 
                                     provincia =rt.nombre,
                                     slug = rt.slug,
                                     thumb = rt.thumb
                                     
                                 }).ToList();

                    for (var j = 0;j< rutas.Count; j++)
                    {
                        rp.Add(
                            new RutaProvincia
                            {
                                conteo = conteo,
                               
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
           // return Json(rp, JsonRequestBehavior.AllowGet);
            return View(RutasModel);
        }

        public ActionResult DetalleRuta(string id)
        {
           
            var pslug = id;
            var Coun = db.provincias.Where(c => c.slug == pslug).Select(p => p.id ).Count();
            
                var pv = db.provincias.Where(c => c.slug == pslug).Select(p => new { p.id, p.nombre, p.slug, p.imagen }).FirstOrDefault();
            if (Coun > 0)
            {

                ViewData["nombreProvincia"] = pv.nombre;
                ViewData["imagenProvincia"] = pv.imagen;
            }
            else {
                ViewData["nombreProvincia"] = "";
                ViewData["imagenProvincia"] = "";
            }


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

           //eturn Json(rutas, JsonRequestBehavior.AllowGet);

            for (var j = 0; j < rutas.Count; j++)
            {
                var rCatId = rutas[j].catId;
                var conteo = (from rt in db.rutas
                              where rt.categoria_ruta_id == rCatId
                              where rt.provincia_id == pv.id
                              select new { rt.id }).Count();

                var categoria = db.categoria_ruta.Where(c => c.id == rCatId).Select(p => new { p.nombre }).First();
                

                rp.Add(
                    new RutaProvincia
                    {
                        conteo = conteo,
                        categoria = categoria.nombre,
                        provincia_thumb = pv.imagen,
                        provincia_slug = pv.slug
                    });
            }

            //return Json(rp, JsonRequestBehavior.AllowGet);
           
            RutasModel.rutas = rp;
            return View(RutasModel);
        }

        public ActionResult Mapa(string provincia, string id) {

            var objeto = ( nombreprov : provincia, categoria: id );


            var prov = db.provincias.Where(c => c.slug == provincia).Select(p => new { p.id, p.nombre, p.slug, p.imagen }).FirstOrDefault();

            var rutas = db.rutas.Where(c => c.provincia_id == prov.id).Select(p =>
            new
            {
                p.id,
                p.titulo,
                p.documento,
                p.destacar,
                p.categoria_ruta_id,
                p.google,
                p.maxtemp,
                p.mintemp,
                p.slug,
                p.image
            }).ToList();

            List<Mapa> mapa = new List<Mapa>();

            for (var i = 0; i < rutas.Count; i++) {

                var rutaId = rutas[i].id;
                var lugares = db.places.Where(c => c.ruta_id == rutaId).Select(p => new { p.nombre, p.id, p.height, p.descripcion, p.image }).ToList();

                   List<MapaPlace> lp = new List<MapaPlace>();
                    for (var j = 0; j < lugares.Count; j++) {
                        lp.Add(new MapaPlace { name = lugares[j].nombre, order = lugares[j].id, description = lugares[j].descripcion, height= lugares[j].height, image= lugares[j].image  });
                    }

                var arrayPlace = lp.ToArray();
                mapa.Add(
                    new Mapa {


                        name = rutas[i].titulo,
                        url = rutas[i].slug,
                        image = rutas[i].image,
                        region = prov.nombre,
                        urlRegion = prov.slug,
                        featured = 0,
                        google = rutas[i].google,
                        pdf = rutas[i].documento,
                        maximumWeather = rutas[i].maxtemp,
                        minimumWeather = rutas[i].mintemp
                       // MapaPlace = JsonConvert.SerializeObject(lp)
                        
                    }); ;
            }


           // return Json(mapa, JsonRequestBehavior.AllowGet);
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