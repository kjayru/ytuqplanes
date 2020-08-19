using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Web;

namespace ytuqueplanes.Models
{
	public class Mapa
	{


		public string name { get; set; }
		public string url { get; set; }
		public string image { get; set; }
		public string region { get; set; }
		public string urlRegion { get; set; }
		public string category { get; set; }
		public int? featured { get; set; }
		public string google { get; set; }
		public string pdf { get; set; }
		public string maximumWeather { get; set; }
		public string minimumWeather { get; set; }

		public  MapaPlace MapaPlace { get; set; }
		
		
	}

}