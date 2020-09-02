using EntidadesData;
using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Web;
using System.Web.Mvc;
using ytuqueplanes.Models;

namespace ytuqueplanes.Controllers
{
    public class DestinosController : Controller
    {
        // GET: Destinos

        ytuqueplanesDBEntities1 db = new ytuqueplanesDBEntities1();

        public DestinosController()
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

            var seo = db.seos.Where(c => c.id == 2).Select(p => new { p.og_title, p.og_description, p.og_image, p.keywords }).FirstOrDefault();
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

            dynamic datosDestinoModel = new ExpandoObject();

            datosDestinoModel.sliders = GetSliders();
            datosDestinoModel.provincias = getProvincia();

            datosDestinoModel.destacados = getDestacados();

            return View(datosDestinoModel);
        }



        /**detalle de provincia**/
        public ActionResult Detalle(string id) {

            dynamic datosDestinoModel = new ExpandoObject();
            
            var prov = db.provincias.Where(c => c.slug == id).Select(p => new { p.id, p.nombre, p.slug, p.imagen, p.tenencuenta }).First();

            ViewBag.slugProvincia = prov.slug;
            ViewBag.nombreProvincia = prov.nombre;
            ViewBag.imagenProvincia = prov.imagen;
            ViewBag.tenencuenta = prov.tenencuenta;

            var dt = from t1 in db.destinos
                     join t2 in db.experiencias
                     on t1.id equals t2.destino_id into DestinoFil
                     where t1.provincia_Id == prov.id
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

            //festividades


            var fs = db.festividades.Where(d => d.provincia_id == prov.id).Select(p => new
            {
                p.id,
                p.nombre,
                p.inicio,
                p.final,
                p.slug,
                p.mes_id,
                p.imagen

            }).ToList();

            var fscount = db.festividades.Where(d => d.provincia_id == prov.id).Select(p => new
            {
                p.id,
                p.nombre,
                p.inicio,
                p.final,
                p.slug,
                p.mes_id,
                p.imagen

            }).Count();
            var mesid = 1;

            if (fscount > 0)
            {
                 mesid = 8;
            }
            else {
                mesid = 8;
            }
           // return Json(mesid, JsonRequestBehavior.AllowGet);

            var m = db.meses.Where(d => d.id == mesid).Select(p => new { p.nombre }).First();

            List<Festividad> fests = new List<Festividad>();

            for (var i = 0; i < fs.Count(); i++) {

                fests.Add(
                    new Festividad
                    {
                        id = fs[i].id,
                        nombre = fs[i].nombre,
                        inicio = fs[i].inicio,
                        final = fs[i].final,
                        provincia = prov.nombre,
                        imagen = fs[i].imagen,
                        mes = m.nombre,
                        mes_id = fs[i].mes_id,
                        slug = fs[i].slug
                    }

                );
            }

            datosDestinoModel.festividades = fests;

           // datosDestinoModel.destacados = getDestacados();



            var comollegar = db.provincia_comollegar.Where(c => c.provincia_id == prov.id).Select(p => new
            {
                distancia = p.distancia,
                duracion = p.duracion,
                empresa = p.empresa,
                waze = p.waze,
                comollegarID = p.como_llegar_id,
                comollegarIcon = p.como_llegar.imagen,
                comollegarNombre = p.como_llegar.nombre,
                comollegarAlt = p.como_llegar.alt,
                recomendar = p.recomendar
            });

            var listado = comollegar.ToList();
            var contador = comollegar.Count();

            ViewBag.countComollegar = contador;

            List<Comollegar> comolls = new List<Comollegar>();

            for (var k = 0; k < listado.Count(); k++)
            {
                comolls.Add(
                    new Comollegar
                    {

                        distancia = listado[k].distancia,
                        duracion = listado[k].duracion,
                        empresa = listado[k].empresa,
                        waze = listado[k].waze,
                        comollegarID = listado[k].comollegarID,
                        comollegarIcon = listado[k].comollegarIcon,
                        comollegarNombre = listado[k].comollegarNombre,
                        comollegarAlt = listado[k].comollegarAlt,
                        recomendar = listado[k].recomendar
                    });

            }

            datosDestinoModel.comollegar = comolls;

            //relacionados


            var rel = from t1 in db.atractivos
                     join t2 in db.destinos

                     on t1.destino_id equals t2.id

                     where t2.provincia_Id == prov.id

                     select new
                     {
                         id = t1.id,
                         titulo = t1.titulo,
                         contenido = t1.contenido,
                         destino_id = t2.id,
                         slug = t1.slug,
                         imagen = t1.banner,
                         destino_slug = t2.slug

                     };

            var destacados = rel.ToList();

            List<Destacado> dtdo = new List<Destacado>();

            for (var i = 0; i < destacados.Count; i++)
            {
                var destinoId = destacados[i].destino_id;
                var pvId = db.destinos.Where(d => d.id == destinoId).Select(p => new { p.provincia_Id }).First();
                var prv = db.provincias.Where(d => d.id == pvId.provincia_Id).Select(p => new { p.slug, p.nombre }).First();

                dtdo.Add(
                    new Destacado
                    {
                        titulo = destacados[i].titulo,
                        provincia = prv.nombre,
                        slug = destacados[i].slug,
                        imagen = destacados[i].imagen,
                        provincia_slug = prv.slug,
                        destino_slug = destacados[i].destino_slug
                    }
                );


            }


            datosDestinoModel.destacados = dtdo;

            return View(datosDestinoModel);
        }

        /**detalle de destinos de cada  provincia*/

        public ActionResult DestinoProvincia(string id) {

            dynamic datosAtractivosModel = new ExpandoObject();


            var dest = db.destinos.Where(c => c.slug == id).Select(d => d.id).FirstOrDefault();

            var datos = db.destinos.Where(c => c.slug == id).Select( p => new {
                 p.titulo,
                 p.slug,
                 p.contenido,
                 p.imagen,
                 p.provincia_Id
                }).First();

            var prov = db.provincias.Where(c => c.id == datos.provincia_Id).Select(p => new { p.nombre,p.slug }).First();

            ViewBag.titulo = datos.titulo;
            ViewBag.slug = datos.slug;
            ViewBag.contenido = datos.contenido;
            ViewBag.imagen = datos.imagen;

            ViewBag.provincia = prov.nombre;
            ViewBag.provinciaSlug = prov.slug;

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
            datosAtractivosModel.destacados = getDestacados();

            return View(datosAtractivosModel);
        }

        /*Detalle destino **/
        public ActionResult DetalleDestino(string id) {

            dynamic datosAtractivosModel = new ExpandoObject();

            var detalle = db.atractivos.Where(c => c.slug == id).Select(p => new {
                p.id,
                p.titulo,
                p.slug,
                p.contenido,
                p.descripcion,
                p.resumen,
                p.banner,
                p.banner_m,
                p.banner_t,
                p.destino_id
            }).FirstOrDefault();

            var destino = db.destinos.Where(c => c.id == detalle.destino_id).Select(p => new { p.id, p.slug, p.titulo, p.provincia_Id }).First();

            var pv = db.provincias.Where(c => c.id == destino.provincia_Id).Select(p => new { p.id, p.nombre, p.slug }).First();

            ViewBag.provincia_slug = pv.slug;

            ViewBag.destinoUrl = destino.slug;
            ViewBag.destino = destino.titulo;


            ViewBag.id = detalle.id;
                ViewBag.titulo = detalle.titulo;
                ViewBag.slug = detalle.slug;
                ViewBag.contenido = detalle.contenido;
                ViewBag.descripcion = detalle.descripcion;
                ViewBag.resumen = detalle.resumen;
                ViewBag.banner = detalle.banner;
                ViewBag.banner_m = detalle.banner_m;
            ViewBag.banner_t = detalle.banner_t;

            

            


            ///relacionados provincia
            ///


            var dt = from t1 in db.atractivos
                     join t2 in db.destinos

                     on t1.destino_id equals t2.id

                     where t2.provincia_Id == pv.id

                     select new
                     {
                         id = t1.id,
                         titulo = t1.titulo,
                         contenido = t1.contenido,
                         destino_id = t2.id,
                         slug = t1.slug,
                         imagen = t1.banner,
                         destino_slug = t2.slug

                     };

            var destacados = dt.ToList();

            List<Destacado> dtdo = new List<Destacado>();

            for (var i = 0; i < destacados.Count; i++)
            {
                var destinoId = destacados[i].destino_id;
                var pvId = db.destinos.Where(d => d.id == destinoId).Select(p => new { p.provincia_Id }).First();
                var prov = db.provincias.Where(d => d.id == pvId.provincia_Id).Select(p => new { p.slug, p.nombre }).First();

                dtdo.Add(
                    new Destacado
                    {
                        titulo = destacados[i].titulo,
                        provincia = prov.nombre,
                        slug = destacados[i].slug,
                        imagen = destacados[i].imagen,
                        provincia_slug = prov.slug,
                        destino_slug = destacados[i].destino_slug
                    }
                );


            }


            datosAtractivosModel.destacados = dtdo;


            return View(datosAtractivosModel);
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
                       where t1.estado == 1
                       select new
                       {
                           id = t1.id,
                           nombre = t1.nombre,
                           region = t2.nombre,
                           imagen = t1.imagen,
                           slug = t1.slug,
                           thumb = t1.thumb

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
                        slug = provs[k].slug,
                        thumb = provs[k].thumb

                    });

            }

            return providatos;
        }


         private List<Destacado> getDestacados()
          {




              var dt = from t1 in db.atractivos
                       join t2 in db.destinos
                      
                       on t1.destino_id equals t2.id 

                       where t1.destacado == 1 
                     
                       select new
                       {
                           id = t1.id,
                           titulo = t1.titulo,
                           contenido = t1.contenido,
                           destino_id =  t2.id,
                           slug = t1.slug,
                           imagen = t1.banner,
                           destino_slug = t2.slug
                           
                       };

              var destacados = dt.ToList();

            List<Destacado> dtdo = new List<Destacado>();

            for (var i = 0; i < destacados.Count; i++) {
                var destinoId = destacados[i].destino_id;
                var pvId = db.destinos.Where(d => d.id == destinoId).Select(p => new { p.provincia_Id }).First();
                var prov = db.provincias.Where(d => d.id == pvId.provincia_Id).Select(p => new { p.slug, p.nombre }).First();

                dtdo.Add(
                    new Destacado
                    {
                        titulo = destacados[i].titulo,
                        provincia = prov.nombre,
                        slug = destacados[i].slug,
                        imagen = destacados[i].imagen,
                        provincia_slug = prov.slug,
                        destino_slug = destacados[i].destino_slug
                    }
                );

               
            }

            return dtdo;

        }


    }
}