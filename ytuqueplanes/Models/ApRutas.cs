using EntidadesData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ytuqueplanes.Models
{
    public class ApRutas
    {
      
        public string name { get; set; }
        public string url { get; set; }
        public string image { get; set; }
        public string region { get; set; }
        public string urlRegion { get; set; }
        public bool? destacar { get; set; }
        public int? category { get; set; }
        public bool? featured { get; set; }
        public string pdf { get; set; }
        public string google { get; set; }
        public string car { get; set; }
        public string bus { get; set; }
        public string airplane { get; set; }
        public string train { get; set; }
        public string ship { get; set; }
        public string maximumWeather { get; set; }
        public string minimumWeather { get; set; }
        
    }

}