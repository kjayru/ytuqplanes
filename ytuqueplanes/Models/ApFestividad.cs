using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ytuqueplanes.Models
{
    public class ApFestividad
    {

        public int id { get; set; }
        public string nombre { get; set; }
        public int? inicio { get; set; }
        public int? final { get; set; }
        public string provincia { get; set; }
        public string imagen { get; set; }

        public int? mes_id { get; set; }

        public string slug { get; set; }
        public string provincia_slug { get; set; }
        public string tipo_de_festividad { get; set; }
        public string anio  { get; set; }
    }
}