using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ytuqueplanes.Models
{
    public class Festividad
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public int? inicio { get; set; }
        public int? final { get; set; }
        public string provincia { get; set; }
        public string imagen { get; set; }
        public string thumb { get; set; }
        public string contenido { get; set; }
        public string mes { get; set; }
        public int? likes { get; set; }
        public int? mes_id { get; set; }
        public string documento { get; set; }
        public string slug { get; set; } 
        public string provincia_slug { get; set; }

    }
}