using EntidadesData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ytuqueplanes.Models
{
    public class ComunitarioContacto
    {
        public string descripcion { get; set; }
        public List<string> options { get; set; }


        public ComunitarioContacto(string descripcion, List<string> options)
        {
            this.descripcion = descripcion;
            this.options = options;
        }
    }


}