using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ytuqueplanes.Models
{
    public class Place
    {
        public string name { get; set; }
        public int? order { get; set; }
        public string description { get; set; }
        public string height { get; set; }
        public string image { get; set; }
        public List<Apt> apt { get; set; }
        public List<Activity> activity { get; set; }
        public List<Cordinate> cordinate { get; set; }
    }
}