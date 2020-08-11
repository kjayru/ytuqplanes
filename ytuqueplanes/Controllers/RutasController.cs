using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ytuqueplanes.Controllers
{
    public class RutasController : Controller
    {
        // GET: Rutas
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult DetalleRuta(String id)
        {
            return View();
        }

        public ActionResult Mapa(String id) {

            return View();
        }
    }
}