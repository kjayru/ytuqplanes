using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Web;

namespace ytuqueplanes.Models
{
    public class Noticia
    {
        public int id { get; set; }
        public string titulo { get; set; }
        public string contenido { get; set; }
        public string imagen { get; set; }
        public string categoria { get; set; }
        public string created_at { get; set; }
    }
}