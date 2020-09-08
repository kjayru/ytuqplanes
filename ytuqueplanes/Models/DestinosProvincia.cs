using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ytuqueplanes.Models
{
    public class DestinosProvincia
    { 
        public int id { get; set; }
        public string titulo { get; set; }
        public string contenido { get; set; }
        public string provincia { get; set; }
        public string imagen { get; set; }
        public string slug { get; set; }
        public string filtro { get; set; }
        public string thumb { get; set; }
    }
}