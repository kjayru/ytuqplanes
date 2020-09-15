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
        public List<ContactoOptions> options {get; set;}
    }
}