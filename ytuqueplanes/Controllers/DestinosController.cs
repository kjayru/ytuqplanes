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

            return View();
        }

        /**detalle de destinos de cada  provincia*/

        public ActionResult DestinoProvincia(string id) {

            return View();
        }

        /*Detalle destino **/
        public ActionResult DetalleDestino(string id) {
            return View();
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