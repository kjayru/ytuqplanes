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
    
    public partial class mapa
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public mapa()
        {
            this.iconos = new HashSet<icono>();
        }
    
        public int id { get; set; }
        public string latitud { get; set; }
        public string longitud { get; set; }
        public string titulo { get; set; }
        public string descripcion { get; set; }
        public int ruta_id { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<icono> iconos { get; set; }
        public virtual ruta ruta { get; set; }
    }
}
