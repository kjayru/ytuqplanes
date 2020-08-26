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
        ytuqueplanesDBEntities1 db = new ytuqueplanesDBEntities1();
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

            var sliders = db.slider_item.Where(c => c.slider_id == 1).Where(d => d.estado==1).Select(p => new {
                p.imagen_lg,
                p.imagen_md,
                p.imagen_sm,
                p.imagen_xl,
                p.titulo,
                p.alt,
                p.descripcion,
                p.estado,
                p.url
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
                       descripcion = sliders[i].descripcion,
                       estado = sliders[i].estado,
                       url = sliders[i].url
                   });
            }

            return datos;
        }


        private List<Blog> getNotas() {
            
        /*
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

            return datonotas;*/


            var dt = (from pd in db.posts
                      join od in db.provincias on pd.provincia_id equals od.id
                      join ct in db.categorias on pd.categoria_blog_id equals ct.id
                      where pd.destacado == 1
                      orderby pd.id descending
                      select new
                      {
                          id = pd.id,
                          titulo = pd.titulo,
                          slug = pd.slug,
                          contenido = pd.contenido,
                          resumen = pd.resumen,
                          imagen = pd.imagen,
                          categoria_id = pd.categoria_blog_id,
                          categoria = ct.nombre,
                          tipo = pd.tipo_id,
                          provincia_id = pd.provincia_id,
                          provincia = od.nombre,
                          provincia_slug = od.slug
                      }).ToList();


            var notas = dt.ToList();




            List<Blog> datonotas = new List<Blog>();

            for (var j = 0; j < notas.Count(); j++)
            {
                datonotas.Add(
                    new Blog
                    {
                        id = notas[j].id,
                        titulo = notas[j].titulo,
                        imagen = notas[j].imagen,
                        resumen = notas[j].resumen,
                        slug = notas[j].slug,
                        categoria_id = notas[j].categoria_id,
                        categoria = notas[j].categoria,

                        provincia_id = notas[j].provincia_id,
                        provincia = notas[j].provincia,
                        tipo = notas[j].tipo,
                        provincia_slug = notas[j].provincia_slug

                    });
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
               provincia = t3.nombre ,
               imagen = t1.imagen,
               contenido = t1.contenido,
               mes =  t2.nombre,
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