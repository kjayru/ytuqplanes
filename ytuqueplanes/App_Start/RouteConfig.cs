using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace ytuqueplanes
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

         routes.MapRoute(
             "Blog",
             "blog-viajero",
             new { controller = "BlogViajero", action = "Index" }
         );

            routes.MapRoute(
            "BlogDetalle",
            "blog-viajero/{id}",
            new { controller = "BlogViajero", action = "Detalle", id =  UrlParameter.Optional  }
        );

            routes.MapRoute(
              name: "Destinos",
              url: "Destinos",
              defaults: new { controller = "Destinos", action = "Index" }
          );

            routes.MapRoute(
              name: "DestinosDetalle",
              url: "Destinos/{id}",
              defaults: new { controller = "Destinos", action = "Detalle", id = UrlParameter.Optional }
          );

            routes.MapRoute(
             name: "DestinoProvinciaDetalle",
             url: "Destinos/lugares/{id}",
             defaults: new { controller = "Destinos", action = "DestinoProvincia", id = UrlParameter.Optional }
           );

            routes.MapRoute(
            name: "DestinoLugarDetalle",
            url: "Destinos/lugares/detalle/{id}",
            defaults: new { controller = "Destinos", action = "DetalleDestino", id = UrlParameter.Optional }
          );

            routes.MapRoute(
             "Rutas",
             "rutas-cortas",
             new { controller = "Rutas", action = "Index" }
         );

            routes.MapRoute(
             "RutasDetalle",
             "rutas-cortas/{id}",
             new { controller = "Rutas", action = "DetalleRuta", id = UrlParameter.Optional }
         );

            routes.MapRoute(
           "Experiencias",
           "experiencias",
           new { controller = "Experiencias", action = "Index" }
       );

            routes.MapRoute(
          "ExperienciaDetalle",
          "experiencias/{id}",
          new { controller = "Experiencias", action = "Detalle", id= UrlParameter.Optional }
      );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );

            


        }
        protected void Application_Start()
        {
            RegisterRoutes(RouteTable.Routes);
        }
    }
}
