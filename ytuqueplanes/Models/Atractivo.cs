using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ytuqueplanes.Models
{
    public class Atractivo
    {
        public int id { get; set; }
        public int destino_id { get; set; }
        public string titulo { get; set; }
        public string slug { get; set; }
        public string banner { get; set; }
        public string banner_m { get; set; }
        public string banner_t { get; set; }
        public string thumb { get; set; }
        public string descripcion { get; set; }
        public string resumen { get; set; }
        public string contenido { get; set; }
        public string estado { get; set; }
        public string provincia { get; set; }
        public string provincia_slug { get; set; }
        public string destino_slug { get; set; }
        public int? contador { get; set; }



    }
}