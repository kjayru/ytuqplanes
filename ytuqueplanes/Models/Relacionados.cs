using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Web;

namespace ytuqueplanes.Models
{
    public class Relacionados
    {
        public string titulo { get; set; }
        public string resumen { get; set; }
        public string imagen { get; set; }
        public string thumb { get; set; }
        public string created_at { get; set; }

        public string slug { get; set; }

        public string categoria { get; set; }

        public int? likes { get; set; }
        public string provincia { get; set; }
        public string provincia_slug { get; set; }

    }
}