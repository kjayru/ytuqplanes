using EntidadesData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ytuqueplanes.Models;

namespace ytuqueplanes.Controllers
{
    public class ExperienciasController : Controller
    {
        ytuqueplanesDBEntities db = new ytuqueplanesDBEntities();
        // GET: Experiencias
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Provincia(string id) {

            return View();
        }

        public ActionResult Detalle() {
            return View();
        }

        public ActionResult AllResult() {



            var ft = from t1 in db.festividades
            join t2 in db.provincias
            on t1.provincia_id equals t2.id
           
            select new
            {
                id = t1.id,
                nombre = t1.nombre,
                inicio = t1.inicio,
                final = t1.final,
                provincia_id = t1.provincia_id,
                provincia = t2.nombre,
                provincia_imagen = t2.thumb,
                provincia_slug = t2.slug,
                imagen  = t1.imagen,
                mes = t1.mes_id,
                slug = t1.slug

            };


            var fest = ft.ToList();

            List<ApFestividad> festividades = new List<ApFestividad>();

            for(var i=0; i<fest.Count; i++)
            {
                festividades.Add(
                    new ApFestividad { 
                        id = fest[i].id,
                        nombre = fest[i].nombre,
                        inicio = fest[i].inicio,
                        final = fest[i].final,
                        provincia = fest[i].provincia,
                        imagen = fest[i].imagen,
                        mes_id = fest[i].mes,
                        slug = fest[i].slug,
                        provincia_slug = fest[i].provincia_slug
                    });
            }

            return Json(festividades, JsonRequestBehavior.AllowGet);


        }


        public ActionResult EPProvincia(string id)
        {
            var prov = db.provincias.Where(d => d.slug == id).Select(p => new { p.id, p.nombre, p.slug }).First();


            var ft = from t1 in db.festividades
                     join t2 in db.provincias
                     on t1.provincia_id equals t2.id
                     where t1.provincia_id == prov.id
                     select new
                     {
                         id = t1.id,
                         nombre = t1.nombre,
                         inicio = t1.inicio,
                         final = t1.final,
                         provincia_id = t1.provincia_id,
                         provincia = t2.nombre,
                         provincia_imagen = t2.thumb,
                         provincia_slug = t2.slug,
                         imagen = t1.imagen,
                         mes = t1.mes_id,
                         slug = t1.slug

                     };


            var fest = ft.ToList();

            List<ApFestividad> festividades = new List<ApFestividad>();

            for (var i = 0; i < fest.Count; i++)
            {
                festividades.Add(
                    new ApFestividad
                    {
                        id = fest[i].id,
                        nombre = fest[i].nombre,
                        inicio = fest[i].inicio,
                        final = fest[i].final,
                        provincia = fest[i].provincia,
                        imagen = fest[i].imagen,
                        mes_id = fest[i].mes,
                        slug = fest[i].slug,
                        provincia_slug = fest[i].provincia_slug
                    });
            }

            return Json(festividades, JsonRequestBehavior.AllowGet);


        }
    }
}