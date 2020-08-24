using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ytuqueplanes.Models
{
    public class Comollegar
    {
        public string distancia { get; set; }
        public string duracion { get; set; }
        public string empresa { get; set; }
        public string waze { get; set; }
        public int? comollegarID { get; set; }
        public string comollegarIcon { get; set; }
        public string comollegarNombre { get; set; }
        public string comollegarAlt { get; set; }
        public int? recomendar { get; set; }
    }
}