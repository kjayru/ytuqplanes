using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Web;

namespace ytuqueplanes.Models
{
    public class Blog
    {
        public int id { get; set; }
        public string titulo { get; set; }
        public string resumen { get; set; }
        public string contenido { get; set; }
        public string imagen { get; set; }
        public String created_at { get; set; }
        public int? likes { get; set; }

        public string slug { get; set; }

        public string categoria { get; set; }
    }
}