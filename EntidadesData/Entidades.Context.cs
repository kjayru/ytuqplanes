﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class ytuqueplanesDBEntities1 : DbContext
    {
        public ytuqueplanesDBEntities1()
            : base("name=ytuqueplanesDBEntities1")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<actividade> actividades { get; set; }
        public virtual DbSet<agencia> agencias { get; set; }
        public virtual DbSet<alerta> alertas { get; set; }
        public virtual DbSet<atractivo> atractivos { get; set; }
        public virtual DbSet<atractivos_galeria> atractivos_galeria { get; set; }
        public virtual DbSet<categoria_noticia> categoria_noticia { get; set; }
        public virtual DbSet<categoria_ruta> categoria_ruta { get; set; }
        public virtual DbSet<categoria> categorias { get; set; }
        public virtual DbSet<categorias_blog> categorias_blog { get; set; }
        public virtual DbSet<como_llegar> como_llegar { get; set; }
        public virtual DbSet<destino> destinos { get; set; }
        public virtual DbSet<experiencia> experiencias { get; set; }
        public virtual DbSet<festividade> festividades { get; set; }
        public virtual DbSet<icono> iconos { get; set; }
        public virtual DbSet<mapa> mapas { get; set; }
        public virtual DbSet<marca> marcas { get; set; }
        public virtual DbSet<mes> meses { get; set; }
        public virtual DbSet<noticia> noticias { get; set; }
        public virtual DbSet<oferta> ofertas { get; set; }
        public virtual DbSet<opcione> opciones { get; set; }
        public virtual DbSet<page> pages { get; set; }
        public virtual DbSet<place_activity> place_activity { get; set; }
        public virtual DbSet<place_apt> place_apt { get; set; }
        public virtual DbSet<place_coordinate> place_coordinate { get; set; }
        public virtual DbSet<place> places { get; set; }
        public virtual DbSet<post> posts { get; set; }
        public virtual DbSet<preferencias_destino> preferencias_destino { get; set; }
        public virtual DbSet<provincia> provincias { get; set; }
        public virtual DbSet<rating> ratings { get; set; }
        public virtual DbSet<redes_soclaies> redes_soclaies { get; set; }
        public virtual DbSet<region> regions { get; set; }
        public virtual DbSet<role> roles { get; set; }
        public virtual DbSet<ruta> rutas { get; set; }
        public virtual DbSet<seo> seos { get; set; }
        public virtual DbSet<slider_item> slider_item { get; set; }
        public virtual DbSet<slider> sliders { get; set; }
        public virtual DbSet<suscripcion> suscripcions { get; set; }
        public virtual DbSet<tag> tags { get; set; }
        public virtual DbSet<tipo_oferta> tipo_oferta { get; set; }
        public virtual DbSet<tipo_suscripcion> tipo_suscripcion { get; set; }
        public virtual DbSet<tipotransporte> tipotransportes { get; set; }
        public virtual DbSet<transporte> transportes { get; set; }
        public virtual DbSet<user> users { get; set; }
        public virtual DbSet<destino_como_llegar> destino_como_llegar { get; set; }
        public virtual DbSet<destino_seo> destino_seo { get; set; }
        public virtual DbSet<festividad_tag> festividad_tag { get; set; }
        public virtual DbSet<noticia_tag> noticia_tag { get; set; }
        public virtual DbSet<page_como_llegar> page_como_llegar { get; set; }
        public virtual DbSet<page_marcas> page_marcas { get; set; }
        public virtual DbSet<page_red_sociales> page_red_sociales { get; set; }
        public virtual DbSet<page_seo> page_seo { get; set; }
        public virtual DbSet<page_sliders> page_sliders { get; set; }
        public virtual DbSet<post_seo> post_seo { get; set; }
        public virtual DbSet<post_tag> post_tag { get; set; }
        public virtual DbSet<rutas_seo> rutas_seo { get; set; }
        public virtual DbSet<provincia_comollegar> provincia_comollegar { get; set; }
    }
}
