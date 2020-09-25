using EntidadesData;
using Microsoft.Ajax.Utilities;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
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


                var places = db.rutas.Where(c => c.provincia_id == provid).Select(p => new { p.titulo }).ToList();
                List<Lugares> mp = new List<Lugares>();


                List<string> lugares = new List<string>();

                foreach (var it in places)
                {
                    //mp.Add( new Lugares { nombre = item.nombre });
                    lugares.Add(it.titulo);
                };


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

                    foreach (var item in  rutas)
                    {
                        var pls = db.rutas.Where(c => c.provincia_id == item.id).AsEnumerable().Select(p => new { p.titulo }).ToList();

                        List<Lugares> lugar = new List<Lugares>();
                        foreach (var row in pls) {
                            lugar.Add( new Lugares { 
                                nombre = row.titulo,
                            });
                        }
                        lugar.Add(new Lugares {nombre = item.provincia });

                        rp.Add(
                            new RutaProvincia
                            {
                                conteo = conteo,
                                lugares = JsonConvert.SerializeObject(lugar.Select(p =>p.nombre)),
                                provincia_nombre = item.provincia,
                                provincia_slug = item.slug,
                                provincia_thumb = item.thumb
                            });
                    }
                }
            }

            


            Slide slider = new Slide();

            var sliders = db.slider_item.Where(c => c.slider_id == 3).ToList();

            

            List<Slide> sls = new List<Slide>();

            foreach (var item in sliders) {

                sls.Add(
                    new Slide
                    {
                        imagen_lg = item.imagen_lg,
                        imagen_md = item.imagen_md,
                        imagen_sm = item.imagen_sm,
                        imagen_xl = item.imagen_xl,
                        titulo = item.titulo,
                        alt = item.alt,
                        descripcion = item.descripcion,
                        url = item.url
                    });
            }

           


            RutasModel.provincias = rp;
            RutasModel.destacados = getDestacados();
            RutasModel.slides = sls;
           
            return View(RutasModel);
        }

        public ActionResult DetalleRuta(string id)
        {
           
            var pslug = id;
            var Coun = db.provincias.Where(c => c.slug == pslug).Select(p => p.id ).Count();
            
                var pv = db.provincias.Where(c => c.slug == pslug).FirstOrDefault();
            if (Coun > 0)
            {

                ViewData["nombreProvincia"] = pv.nombre;
                ViewData["imagenProvincia"] = pv.imagen;
            }
            else {
                ViewData["nombreProvincia"] = "";
                ViewData["imagenProvincia"] = "";
            }

            if (pv.seo_id > 0)
            {
                var seo = db.seos.Where(c => c.id == pv.seo_id).Select(p => new { p.og_title, p.og_description, p.og_image, p.keywords }).FirstOrDefault();
                //seo
                ViewBag.seotitle = seo.og_title;
                ViewBag.seotype = seo.og_description;
                ViewBag.seourl = System.Web.HttpContext.Current.Request.Url.AbsoluteUri;
                ViewBag.seoimagen = seo.og_image;
                ViewBag.seodescripcion = seo.og_description;
                ViewBag.keywords = seo.keywords;
            }



            dynamic RutasModel = new ExpandoObject();

            List<RutaProvincia> rp = new List<RutaProvincia>();



            var rutas = db.rutas.Where(d => d.provincia_id == pv.id).ToList();

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
                        imagen = rutas[j].image,
                        thumb = rutas[j].thumb

                    });
            }



           

            //return Json(rp, JsonRequestBehavior.AllowGet);

            RutasModel.rutas = rp;
            RutasModel.destacados = getDestacados();
           
            return View(RutasModel);
        }

        public ActionResult Mapa(string provincia, string id) {

          

            var prov = db.provincias.Where(c => c.slug == provincia).FirstOrDefault();

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
                seo_id = p.seo_id,
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

            if (prov.seo_id > 0)
            {
                var seo = db.seos.Where(c => c.id == prov.seo_id).Select(p => new { p.og_title, p.og_description, p.og_image, p.keywords }).FirstOrDefault();
                //seo
                ViewBag.seotitle = seo.og_title;
                ViewBag.seotype = seo.og_description;
                ViewBag.seourl = System.Web.HttpContext.Current.Request.Url.AbsoluteUri;
                ViewBag.seoimagen = seo.og_image;
                ViewBag.seodescripcion = seo.og_description;
                ViewBag.keywords = seo.keywords;
            }

            return View();
        }


        public ActionResult ApiMapa( string id)
        {


            List<ApRutas> arutas = new List<ApRutas>();

            var prov = db.provincias.Where(c => c.slug == id).FirstOrDefault();

            var rutas = db.rutas.Where(c => c.provincia_id == prov.id).AsEnumerable().Select(p =>
            new
            {
               
                name = p.titulo,
                url = p.slug,
                image = p.image!=null? ConfigurationManager.AppSettings["staticURL"]+p.image:"",
                region = prov.nombre,
                urlRegion = prov.slug,
                destacar = p.destacar,
                category = p.categoria_ruta_id,
                featured = p.destacar,
                pdf = p.documento!=null? ConfigurationManager.AppSettings["staticURL"] + p.documento : "",
                google = p.google,
      
                car = p.transportes.Where(a => a.tipotransporte_id == 1).Select( q => new { p.descripcion}),
                bus = p.transportes.Where(a => a.tipotransporte_id == 2).Select(q => new { p.descripcion }),
                airplane = p.transportes.Where(a => a.tipotransporte_id == 3).Select(q => new { p.descripcion }),
                train = p.transportes.Where(a => a.tipotransporte_id == 4).Select(q => new { p.descripcion }),
                ship = p.transportes.Where(a => a.tipotransporte_id == 5).Select(q => new { p.descripcion }),

                maximumWeather = p.maxtemp,
                minimumWeather = p.mintemp,

                places = p.places.AsEnumerable().Select(d => new {
                    name = d.nombre,
                    order = d.id,
                    description = d.descripcion,
                    height = d.height,
                    image = d.image !=null? ConfigurationManager.AppSettings["staticURL"]+d.image:"",
                    apt = d.place_apt.Select(f => new { description = f.descripcion }),
                    activity = d.place_activity.AsEnumerable().Select(g => new {
                        name = g.nombre,
                        icon =  g.icono != null? ConfigurationManager.AppSettings["staticURL"]+g.icono:"",
                    }),
                    cordinate = d.place_coordinate.Select(h => new {
                        latitude = h.latitude, 
                        longitude = h.longitude
                    })
                }),

            }).ToList();
            /*
            foreach (var item in rutas) {
                arutas.Add(
                    
                    new ApRutas { 
                        name = item.name,
                        url = item.url,
                        image = item.image,
                        region = item.region,
                        urlRegion = item.urlRegion,
                        destacar = item.destacar,
                        category = item.category,
                        featured = item.featured,
                        pdf = item.pdf,
                        google = item.google,
                        car = item.car.descripcion,
                        bus = item.bus.descripcion,
                        airplane = item.airplane.descripcion,
                        train = item.train.descripcion,
                        ship = item.ship.descripcion,
                        maximumWeather = item.maximumWeather,
                        minimumWeather = item.minimumWeather


                    });
            }*/
            


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
                p.thumb,
                p.provincia_id,
                
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
                        provincia_nombre = prov.nombre,
                        provincia_thumb = prov.thumb,
                        provincia_slug = prov.slug,
                        nombre = rutas[j].titulo,
                        slug = rutas[j].slug,
                        imagen = rutas[j].image,
                        thumb = rutas[j].thumb

                    });
            }

            return rp;
        }
    }
}