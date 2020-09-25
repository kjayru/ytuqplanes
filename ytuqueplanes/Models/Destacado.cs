using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ytuqueplanes.Models
{
    public class Destacado
    {

        public string titulo { get; set; }
        public string provincia { get; set; }
        public string imagen { get; set; }
        public string thumb { get; set; }
        public string slug { get; set; }
        public string destino_slug { get; set; }
        public string provincia_slug { get; set; }
        public int? destino_id { get; set; }
    }
}