using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ytuqueplanes.Models
{
    public class Comunitarios
    {
       
        public int id { get; set; }
        public string titulo { get; set; }
        public string imagen { get; set; }
        public Nullable<int> provincia_id { get; set; }
        public string slug { get; set; }
        public string alt { get; set; }
        public string resumen { get; set; }
        public string descripcion { get; set; }

    }
}