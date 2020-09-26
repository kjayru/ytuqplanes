using EntidadesData;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Dynamic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ytuqueplanes.Models;

namespace ytuqueplanes.Controllers
{
    public class BuscadorController : Controller
    {
        ytuqueplanesDBEntities1 db = new ytuqueplanesDBEntities1();
        public BuscadorController()
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
        }

        // GET: Buscador
        public ActionResult Index(string id)
        {
            dynamic BuscarAtractivosModel = new ExpandoObject();
            if (Request.Params["s"] != null)
            {
                string word = Request.Params["s"].ToLower();

           
                //busqueda destinos

                var rd = db.atractivos.Where(c => c.titulo.ToLower().Contains(word)).ToList();

                ViewBag.totalDestino = rd.Count();
                List<Atractivo> atractivos = new List<Atractivo>();

                for (var i = 0; i < rd.Count(); i++)
                {
                    var destinoID = rd[i].destino_id;
                    var dt = db.destinos.Where(c => c.id == destinoID).Select(p => new { p.slug, p.provincia_Id }).FirstOrDefault();
                    var pv = db.provincias.Where(c => c.id == dt.provincia_Id).Select(q => new { q.nombre, q.slug }).FirstOrDefault();

                    atractivos.Add(new Atractivo
                    {

                        titulo = rd[i].titulo,
                        resumen = rd[i].resumen,
                        slug = rd[i].slug,
                        banner = rd[i].banner,
                        provincia = pv.nombre,
                        provincia_slug = pv.slug,
                        destino_slug = dt.slug,
                        thumb = rd[i].thumb

                    });
                }



                //busqueda rutas

                List<RutaProvincia> rp = new List<RutaProvincia>();



                var rutas = db.rutas.Where(c => c.titulo.ToLower().Contains(word)).ToList();

                ViewBag.totalRutas = rutas.Count();
                //eturn Json(rutas, JsonRequestBehavior.AllowGet);

                for (var j = 0; j < rutas.Count; j++)
                {
                    var rCatId = rutas[j].categoria_ruta_id;
                    var rutaId = rutas[j].id;
                    var provID = rutas[j].provincia_id;

                    var conteo = (from rt in db.places

                                  where rt.ruta_id == rutaId
                                  select new { rt.id }).Count();


                    var cat = db.categoria_ruta.Where(c => c.id == rCatId).Select(p => new { p.nombre }).FirstOrDefault();
                    var pv = db.provincias.Where(c => c.id == provID).Select(q => new { q.slug, q.imagen }).FirstOrDefault();


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





                //busqueda notas

                var rl = db.posts.Where(c => c.titulo.ToLower().Contains(word));

                var rltotal = rl.Count();
                var relacionados = rl.ToList();

                ViewBag.notasTotal = rltotal;

                List<Relacionados> rels = new List<Relacionados>();

                for (var j = 0; j < rltotal; j++)
                {
                    var provID = relacionados[j].provincia_id;
                    var pv = db.provincias.Where(c => c.id == provID).Select(p => new { p.nombre, p.slug }).FirstOrDefault();
                    rels.Add(new Relacionados
                    {

                        titulo = relacionados[j].titulo,
                        resumen = relacionados[j].resumen,
                        imagen = relacionados[j].imagen,
                        thumb = relacionados[j].thumb,
                        slug = relacionados[j].slug,
                        provincia = pv.nombre,
                        provincia_slug = pv.slug
                    });
                }

                BuscarAtractivosModel.notas = rels;
                BuscarAtractivosModel.atractivos = atractivos;
                BuscarAtractivosModel.rutas = rp;
                //return Json(rd, JsonRequestBehavior.AllowGet);

                return View(BuscarAtractivosModel);
            }
            else {
                return View();
            }
        }
    }
}