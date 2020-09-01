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
        public RutasController()
        {

            var prov = db.provincias.Where(c => c.estado == 1).Select(p => new { p.id, p.nombre, p.slug, p.region_id }).ToList();

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

            var seo = db.seos.Where(c => c.id == 5).Select(p => new { p.og_title, p.og_description, p.og_image, p.keywords }).FirstOrDefault();
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
            RutasModel.destacados = getDestacados();
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



            var rutas = db.rutas.Where(d => d.provincia_id == pv.id).Select( p => new {  p.titulo ,p.slug, p.id,p.categoria_ruta_id, p.image}).ToList();

           //eturn Json(rutas, JsonRequestBehavior.AllowGet);

            for (var j = 0; j < rutas.Count; j++)
            {
                var rCatId = rutas[j].categoria_ruta_id;
                var rutaId = rutas[j].id;
                 var conteo = (from rt in db.places
                       
                               where rt.ruta_id == rutaId
                               select new { rt.id }).Count();

                
                var cat = db.categoria_ruta.Where(c => c.id == rCatId).Select(p => new { p.nombre }).First();
                
                
                rp.Add(
                    new RutaProvincia
                    {
                        conteo = conteo,
                        categoria = cat.nombre,
                        provincia_thumb = pv.imagen,
                        provincia_slug = pv.slug,
                        nombre = rutas[j].titulo,
                        slug = rutas[j].slug,
                        imagen = rutas[j].image

                    });
            }



           

            //return Json(rp, JsonRequestBehavior.AllowGet);

            RutasModel.rutas = rp;
            RutasModel.destacados = getDestacados();
           
            return View(RutasModel);
        }

        public ActionResult Mapa(string provincia, string id) {

          

            var prov = db.provincias.Where(c => c.slug == provincia).Select(p => new { p.id, p.nombre, p.slug, p.imagen }).FirstOrDefault();

            ViewBag.nombreProvincia = prov.nombre;
            ViewBag.slugProvincia = prov.slug;
            ViewBag.nombreRuta = id;

            var rutas = db.rutas.Where(c => c.provincia_id == prov.id).Select(p =>
            new
            {
                id = p.id,
                titulo =  p.titulo,
                documento = p.documento,
                destacar = p.destacar,
                categoria_id = p.categoria_ruta_id,
                google = p.google,
                maxtemp = p.maxtemp,
                mintemp = p.mintemp,
                slug = p.slug,
                image = p.image,
                car = p.transportes.Where(a => a.tipotransporte_id == 1).Select(e => new { description = e.descripcion }), 
                bus = p.transportes.Where(a => a.tipotransporte_id == 2).Select(e => new { description = e.descripcion }),
                airplane = p.transportes.Where(a => a.tipotransporte_id == 3).Select(e => new { description = e.descripcion }),
                train = p.transportes.Where(a => a.tipotransporte_id == 4).Select(e => new { description = e.descripcion }),
                ship = p.transportes.Where(a => a.tipotransporte_id == 5).Select(e => new { description = e.descripcion }),
                places = p.places.Select( d => new {
                   description =  d.descripcion,
                   order = d.id,
                   height =  d.height,
                   image =  d.image,
                   apt = d.place_apt.Select( f => new { description = f.descripcion }),
                   activity = d.place_activity.Select(g => new { name = g.nombre, icon = g.icono}),
                   cordinate = d.place_coordinate.Select(h => new { latitude = h.latitude, longitude = h.longitude })
                }),
                
            }).ToList();

           
            return View();
        }


        public ActionResult ApiMapa( string id)
        {



            var prov = db.provincias.Where(c => c.slug == id).Select(p => new { p.id, p.nombre, p.slug, p.imagen }).FirstOrDefault();

            var rutas = db.rutas.Where(c => c.provincia_id == prov.id).Select(p =>
            new
            {
               
                name = p.titulo,
                url = p.slug,
                image = p.image,
                region = prov.nombre,
                urlRegion = prov.slug,
                destacar = p.destacar,
                category = p.categoria_ruta_id,
                featured = p.destacar,
                pdf = p.documento,
                google = p.google,
      
                car = p.transportes.Where(a => a.tipotransporte_id == 1).Select(e => new { description = e.descripcion }),
                bus = p.transportes.Where(a => a.tipotransporte_id == 2).Select(e => new { description = e.descripcion }),
                airplane = p.transportes.Where(a => a.tipotransporte_id == 3).Select(e => new { description = e.descripcion }),
                train = p.transportes.Where(a => a.tipotransporte_id == 4).Select(e => new { description = e.descripcion }),
                ship = p.transportes.Where(a => a.tipotransporte_id == 5).Select(e => new { description = e.descripcion }),

                maximumWeather = p.maxtemp,
                minimumWeather = p.mintemp,

                places = p.places.Select(d => new {
                    name = d.nombre,
                    order = d.id,
                    description = d.descripcion,
                   
                    height = d.height,
                    image = d.image,
                    apt = d.place_apt.Select(f => new { description = f.descripcion }),
                    activity = d.place_activity.Select(g => new { name = g.nombre, icon = g.icono }),
                    cordinate = d.place_coordinate.Select(h => new { latitude = h.latitude, longitude = h.longitude })
                }),

            }).ToList();

            


            return Json(rutas, JsonRequestBehavior.AllowGet);
           
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

        private List<RutaProvincia> getDestacados() {

           
            List<RutaProvincia> rp = new List<RutaProvincia>();


            var rutas = db.rutas.Where(c => c.destacar == true).Select(p => new {
                p.titulo,
                p.slug,
                p.id,
                p.categoria_ruta_id,
                p.image,
                p.provincia_id
            }).ToList();

          
            for (var j = 0; j < rutas.Count; j++)
            {
                var rCatId = rutas[j].categoria_ruta_id;
                var rutaId = rutas[j].id;
                var provId = rutas[j].provincia_id;

                var conteo = (from rt in db.places

                              where rt.ruta_id == rutaId
                              select new { rt.id }).Count();


                var cat = db.categoria_ruta.Where(c => c.id == rCatId).Select(p => new { p.nombre }).First();
                var prov = db.provincias.Where(c => c.id == provId).Select(p => new { p.nombre, p.slug, p.thumb }).FirstOrDefault();

                rp.Add(
                    new RutaProvincia
                    {
                        conteo = conteo,
                        categoria = cat.nombre,
                        provincia_thumb = prov.thumb,
                        provincia_slug = prov.slug,
                        nombre = rutas[j].titulo,
                        slug = rutas[j].slug,
                        imagen = rutas[j].image

                    });
            }

            return rp;
        }
    }
}