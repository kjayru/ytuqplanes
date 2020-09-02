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
        ytuqueplanesDBEntities1 db = new ytuqueplanesDBEntities1();
        public ExperienciasController()
        {

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

            var seo = db.seos.Where(c => c.id == 3).Select(p => new { p.og_title, p.og_description, p.og_image, p.keywords }).FirstOrDefault();
            //seo
            ViewBag.seotitle = seo.og_title;
            ViewBag.seotype = seo.og_description;
            ViewBag.seourl = System.Web.HttpContext.Current.Request.Url.AbsoluteUri;
            ViewBag.seoimagen = seo.og_image;
            ViewBag.seodescripcion = seo.og_description;
            ViewBag.keywords = seo.keywords;
        }

        // GET: Experiencias
        public ActionResult Index()
        {
            var fest = db.provincias.Where(c => c.id == 26).Select(p => new { p.festivida_pdf }).FirstOrDefault();

            ViewBag.festividadesPdf = fest.festivida_pdf;

            return View();
        }

        public ActionResult Provincia(string id) {

            var festPdf = db.provincias.Where(c => c.slug == id).Select(p => new { p.festivida_pdf, p.slug,p.id }).FirstOrDefault();
            var festividadPdf = "";
            if (festPdf !=null)
            {
               
                 festividadPdf = festPdf.festivida_pdf;
            }
            else
            {
                var nac = db.provincias.Where(c => c.id == 26).Select(p => new { p.festivida_pdf }).FirstOrDefault();
                 festividadPdf = nac.festivida_pdf;
            }

            ViewBag.festividadesPdf = festividadPdf;
            ViewBag.provinciaSlug = id;



         

            return View();
        }

        public ActionResult Detalle(string provincia, string id) {

            var festividad = db.festividades.Where(c => c.slug == id).Select(
               p => new {
                   p.id,
                   p.nombre,
                   p.inicio,
                   p.final,
                   p.provincia_id,
                   p.imagen,
                   p.contenido,
                   p.mes_id,
                   p.documento,
                   p.slug,
                   p.tipo_festividad
                   
                    }).FirstOrDefault();

            var prov = db.provincias.Where(c => c.id == festividad.provincia_id).Select(p => new { p.slug, p.nombre }).FirstOrDefault();
            var month = db.meses.Where(c => c.id == festividad.mes_id).Select(p => new { p.nombre }).FirstOrDefault();

            ViewBag.id = festividad.id;
            ViewBag.nombre = festividad.nombre;
            ViewBag.inicio = festividad.inicio;
            ViewBag.final = festividad.final;
            ViewBag.provincia_id = festividad.provincia_id;
            ViewBag.imagen = festividad.imagen;
            ViewBag.contenido = festividad.contenido;
            ViewBag.mes = month.nombre;
            ViewBag.mes_id = festividad.mes_id;
            ViewBag.documento = festividad.documento;
            ViewBag.slug = festividad.slug;
            ViewBag.tipo_festividad = festividad.tipo_festividad;
            ViewBag.provincia_slug = id;
            ViewBag.provincia = prov.nombre;
            


            return View();
        }

        public ActionResult AllResult() {

            DateTime localDate = DateTime.Now;
            var year = localDate.Year;
                

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
                slug = t1.slug,
                tipo_de_festividad = t1.tipo_festividad
               

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
                        provincia_slug = fest[i].provincia_slug,
                        tipo_de_festividad = fest[i].tipo_de_festividad,
                        anio = year.ToString()
                    });
            }

            return Json(festividades, JsonRequestBehavior.AllowGet);


        }


        public ActionResult EPProvincia(string id)
        {
            DateTime localDate = DateTime.Now;
            var year = localDate.Year;


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
                         slug = t1.slug,
                         tipo_de_festividad = t1.tipo_festividad

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
                        provincia_slug = fest[i].provincia_slug,
                        tipo_de_festividad = fest[i].tipo_de_festividad,
                        anio = year.ToString()
                    });
            }

            return Json(festividades, JsonRequestBehavior.AllowGet);


        }
    }
}