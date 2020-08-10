using EntidadesData;
using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ytuqueplanes.Models;

namespace ytuqueplanes.Controllers
{
    public class DestinosController : Controller
    {
        // GET: Destinos

        ytuqueplanesDBEntities db = new ytuqueplanesDBEntities();
        public ActionResult Index()
        {

            dynamic datosDestinoModel = new ExpandoObject();

            datosDestinoModel.sliders = GetSliders();
            datosDestinoModel.provincias = getProvincia();


            return View(datosDestinoModel);
        }



        /**detalle de provincia**/
        public ActionResult Detalle(string id) {

            dynamic datosDestinoModel = new ExpandoObject();



            ViewBag.nombreProvincia = id;

            var prov = db.provincias.Where(c => c.nombre == id).Select(d => d.id).FirstOrDefault();


            /* var destinos = db.destinos.Where(c => c.provincia_Id == prov).Select(d => new {
                 d.id,
                 d.titulo,
                 d.contenido,
                 d.imagen,
                 d.slug
             }).ToList();*/

            var dt = from t1 in db.destinos
                     join t2 in db.experiencias
                     on t1.id equals t2.destino_id into DestinoFil
                     from t3 in DestinoFil.DefaultIfEmpty()
                     select new
                     {
                         id = t1.id,
                         titulo = t1.titulo,
                         contenido = t1.contenido,
                         imagen = t1.imagen,
                         slug = t1.slug,
                         filtro = t3.nombre


                     };

            var destinos = dt.ToList();

            //return Json(destinos, JsonRequestBehavior.AllowGet);

            List<DestinosProvincia> ddatos = new List<DestinosProvincia>();
            for (var k = 0; k < destinos.Count(); k++)
            {
                ddatos.Add(
                    new DestinosProvincia
                    {
                        id = destinos[k].id,
                        titulo = destinos[k].titulo,
                        contenido = destinos[k].contenido,
                        imagen = destinos[k].imagen,
                        slug = destinos[k].slug,
                        filtro = destinos[k].filtro
                    });

            }

            datosDestinoModel.destinos = ddatos;

            return View(datosDestinoModel);
        }

        /**detalle de destinos de cada  provincia*/

        public ActionResult DestinoProvincia(string id) {

            dynamic datosAtractivosModel = new ExpandoObject();


            var dest = db.destinos.Where(c => c.slug == id).Select(d => d.id).FirstOrDefault();


            var at = db.atractivos.Where(c => c.destino_id == dest).Select(p => new
            {
                p.titulo,
                p.slug,
                p.resumen,
                p.banner

            }).ToList();

            List<Atractivo> atractivos = new List<Atractivo>();

            for (var i = 0; i < at.Count(); i++) {
                atractivos.Add(new Atractivo
                {

                    titulo = at[i].titulo,
                    resumen = at[i].resumen,
                    slug = at[i].slug,
                    banner = at[i].banner
                });
            }

            datosAtractivosModel.atractivos = atractivos;

            return View(datosAtractivosModel);
        }

        /*Detalle destino **/
        public ActionResult DetalleDestino(string id) {

            var detalle = db.atractivos.Where(c => c.slug == id).Select(p => new {
                p.id,
                p.titulo,
                p.slug,
                p.contenido,
                p.descripcion,
                p.resumen,
                p.banner,
                p.banner_m,
                p.banner_t
            }).FirstOrDefault();

            Atractivo atractivo = new Atractivo {
                id = detalle.id,
                titulo = detalle.titulo,
                slug = detalle.slug,
                contenido = detalle.contenido,
                descripcion = detalle.descripcion,
                resumen = detalle.resumen,
                banner = detalle.banner,
                banner_m = detalle.banner_m,
                banner_t = detalle.banner_t

            };

           
            return View(atractivo);
        }


        private List<Slide> GetSliders()
        {

            Slide slider = new Slide();

            var sliders = db.slider_item.Where(c => c.slider_id == 2).Select(p => new {
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


        private List<Provincias> getProvincia()
        {
            Provincias provincias = new Provincias();



            var prov = from t1 in db.provincias
                       join t2 in db.regions
                       on t1.region_id equals t2.id

                       select new
                       {
                           id = t1.id,
                           nombre = t1.nombre,
                           region = t2.nombre,
                           imagen = t1.imagen,

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
                        imagen = provs[k].imagen

                    });

            }

            return providatos;
        }

       
    }
}