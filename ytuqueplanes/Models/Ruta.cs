using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ytuqueplanes.Models
{
    public class Ruta
    {
        public int id { get; set; }
        public string titulo { get; set; }
        public string slug { get; set; }
        public string conteo { get; set; }

        public string categoria { get; set; }
    }
}