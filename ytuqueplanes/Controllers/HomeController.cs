using Antlr.Runtime.Misc;
using EntidadesData;
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
  
    public class HomeController : Controller
    {
        ytuqueplanesDBEntities db = new ytuqueplanesDBEntities();
        public ActionResult Index()
        {


            dynamic datosHomeModel = new ExpandoObject();

            datosHomeModel.sliders = GetSliders();
            datosHomeModel.notas = getNotas();
            datosHomeModel.festividades = getFestividad();
           

            return View(datosHomeModel);
        }

       private List<Slide>  GetSliders() {

            Slide slider = new Slide();

            var sliders = db.slider_item.Where(c => c.slider_id == 1).Select(p => new {
                p.imagen_lg,
                p.imagen_md,
                p.imagen_sm,
                p.imagen_xl,
                p.titulo,
                p.alt,
                p.descripcion
            }).ToList();

            List<Slide> datos = new List<Slide>();

            for (var i = 0; i < sliders.Count(); i++)
            {
                datos.Add(
                   new Slide
                   {
                       imagen_lg = sliders[i].imagen_lg,
                       imagen_md = sliders[i].imagen_md,
                       imagen_sm = sliders[i].imagen_sm,
                       imagen_xl = sliders[i].imagen_xl,
                       titulo = sliders[i].titulo,
                       descripcion = sliders[i].descripcion
                   });
            }

            return datos;
        }


        private List<Blog> getNotas() {
            

            Blog blog = new Blog();

            var notas = db.posts.Where(c => c.destacado == 1).Select(p => new {
                p.id,
                p.titulo,
                p.imagen,
                p.likes,
                p.resumen,
                p.slug
            }).ToList();

            List<Blog> datonotas = new List<Blog>();

            for (var j = 0; j < notas.Count(); j++)
            {
                datonotas.Add(
                    new Blog
                    {
                        id = notas[j].id,
                        titulo = notas[j].titulo,
                        imagen = notas[j].imagen,
                        likes = notas[j].likes,
                        resumen = notas[j].resumen,
                        slug = notas[j].slug
                    }
                    );
            }

            return datonotas;
        }

        private List<Festividad> getFestividad()
        {
            Festividad festividad = new Festividad();


            var fest = from t1 in db.festividades
            join t2 in db.meses
            on t1.mes_id equals t2.id
            join t3 in db.provincias
            on t1.provincia_id equals t3.id
            select new
            {
               id =  t1.id,
               nombre = t1.nombre,
               inicio = t1.inicio,
               final = t1.final,
               provincia = t2.nombre ,
               imagen = t1.imagen,
               contenido = t1.contenido,
               mes =  t3.nombre,
               likes = t1.likes,
              documento =  t1.documento
            };

          var festividades = fest.ToList();


            List < Festividad > festidatos = new List<Festividad>();
            for (var k = 0; k < festividades.Count(); k++)
            {
                festidatos.Add(
                    new Festividad { 
                        id = festividades[k].id,
                        nombre = festividades[k].nombre,
                        inicio = festividades[k].inicio,
                        final = festividades[k].final,
                        provincia = festividades[k].provincia,
                        imagen = festividades[k].imagen,
                        contenido = festividades[k].contenido,
                        mes = festividades[k].mes,
                        likes = festividades[k].likes,
                        documento = festividades[k].documento
                    });

            }

            return festidatos;
        

        }
    }
}