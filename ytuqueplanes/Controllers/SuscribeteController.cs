using EntidadesData;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ytuqueplanes.Models;

namespace ytuqueplanes.Controllers
{
    public class SuscribeteController : Controller
    {
        ytuqueplanesDBEntities1 db = new ytuqueplanesDBEntities1();

        public SuscribeteController()
        {
            ViewBag.hosturl = ConfigurationManager.AppSettings["staticURL"];
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

            var seo = db.seos.Where(c => c.id == 1).Select(p => new { p.og_title, p.og_description, p.og_image, p.keywords }).FirstOrDefault();
            //seo
            ViewBag.seotitle = seo.og_title;
            ViewBag.seotype = seo.og_description;
            ViewBag.seourl = "http://dev.mmsolutions.com.pe";
            ViewBag.seoimagen = seo.og_image;
            ViewBag.seodescripcion = seo.og_description;
            ViewBag.keywords = seo.keywords;
        }
        // GET: Suscribete
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Gracias(EntidadesData.suscripcion item) 
        {
            item.created_at = DateTime.Now;
            item.updated_at = DateTime.Now;

            item.nombre = Request.Form["name"];
            item.apellidos = Request.Form["lastname"];
            item.genero = Request.Form["sexo"];
            item.fechanac = Request.Form["dia"] + "/" + Request.Form["mes"] + "/" + Request.Form["anio"];
            item.email = Request.Form["email"];
            item.provincia = Request.Form["provincia"];
            item.actividades = Request.Form["act[]"];

            db.suscripcions.Add(item);
            db.SaveChanges();

            return View();
        }
    }
}