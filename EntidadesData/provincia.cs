//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace EntidadesData
{
    using System;
    using System.Collections.Generic;
    
    public partial class provincia
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public provincia()
        {
            this.provincia_comollegar = new HashSet<provincia_comollegar>();
            this.comunitarios = new HashSet<comunitario>();
        }
    
        public int id { get; set; }
        public string nombre { get; set; }
        public Nullable<int> region_id { get; set; }
        public string imagen { get; set; }
        public string thumb { get; set; }
        public Nullable<double> latitud { get; set; }
        public Nullable<double> longitud { get; set; }
        public Nullable<int> estado { get; set; }
        public string descripcion { get; set; }
        public string slug { get; set; }
        public string festivida_pdf { get; set; }
        public string tenencuenta { get; set; }
        public Nullable<int> seo_id { get; set; }
        public string imagen_t { get; set; }
        public string imagen_m { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<provincia_comollegar> provincia_comollegar { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<comunitario> comunitarios { get; set; }
    }
}
