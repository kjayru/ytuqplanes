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
    
    public partial class destino
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public destino()
        {
            this.experiencias = new HashSet<experiencia>();
        }
    
        public int id { get; set; }
        public string titulo { get; set; }
        public string contenido { get; set; }
        public Nullable<int> provincia_Id { get; set; }
        public string imagen { get; set; }
        public string slug { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<experiencia> experiencias { get; set; }
    }
}
