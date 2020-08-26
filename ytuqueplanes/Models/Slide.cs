using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ytuqueplanes.Models
{
    public class Slide
    {
       
        public string imagen_lg { get; set; }
        public string imagen_md { get; set; }

        public string imagen_sm { get; set; }
        public string imagen_xl { get; set; }
        public string titulo { get; set; }
        public string alt { get; set; } 
        public string descripcion { get; set; }
        public int? estado { get; set; }
        public string url { get; set; }
    }
}