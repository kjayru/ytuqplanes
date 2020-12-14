// @prepros-prepend plugins.js
// @prepros-prepend svg.js
'use strict';
const site = (function(){

	const dom = {
	    // set your own vals
	    active : '-activo-',
	    rotadores : document.querySelectorAll('.fnSliderFree'),
	    swiperrotadores: new Array(),
	    calendarioFiltro : '',
	    calendarioFecha : {
			mes : new Date().getMonth(),
			anio : new Date().getFullYear()
	    }
	};

	const siteFunctions = function(){
		events.printers();
		events.swipers();
		events.clicks();
		events.setRotadores();
		events.forms();
		$('#calendario').length && events.calendario();
	};

	const events = {

		calendario : function(){
			Array.from(document.querySelectorAll('.fnCambiarMes')).forEach( function(element, index) {
				element.addEventListener('click', function(){
					setCalendario(this.getAttribute('data-direccion'));
				});
			});
			setCalendario();
		},

		printers : function(){
			$('.header__mapa').html(headerMapa);
			$('.header__mapa__fuente').html(mapaSVG);
			if( $('.header__nav__destinos__enlace.-activo-').length )
			{
				const dep = $('.header__nav__destinos__enlace.-activo-').data('mapa');
				$('.header__mapa__'+dep).addClass('-default-');
			}
			window.fbAsyncInit = function() {
			    FB.init({
					appId            : '2613846985498810',
					autoLogAppEvents : true,
					xfbml            : true,
					version          : 'v8.0'
				});
			};
		},

		setRotadores: function () {
            dom.rotadores.length &&
                dom.rotadores.forEach(function (el, index) {
                    dom.swiperrotadores.push({ clase: el, swiper: null });
                });
            dom.swiperrotadores.length &&
                dom.swiperrotadores.forEach(function (el, index) {
                    var ar = "";
                    let api = el.clase.getAttribute('data-api-tipo');

                    if( api ) {
      //               	$.ajax({
						// 	url: 'https://devapi.joinnus.com/v2/search',
						// 	headers: { 'brand': 'ytqp', 'Content-Type': 'application/json' },
						// 	type: 'GET',
						// 	dataType: 'json',
						// 	data: JSON.parse(el.clase.getAttribute('data-api-data').replace(/['"]+/g, '"'))
						// })
						// .done(function(response) {
							var slides = '';
							switch (api) {
								// response.data
	                    		case 'card-poster-tipo-1':
										$.each(jsonOfertas, function(index, val) {
											slides += cardPosterTipo1(val);
										});
	                    			break;
	                    		case 'card-poster-tipo-2':
										$.each(jsonOfertas, function(index, val) {
											slides += cardPosterTipo2(val);
										});
	                    			break;
	                    	}
							el.clase.querySelector('.swiper-wrapper').innerHTML = slides;
						// });
                    }
                    switch (el.clase.classList[2]) {
                        default:
	                            ar = {
										slidesPerView: 'auto',
										freeMode: true,
			     						navigation: {
								     		nextEl: el.clase.parentElement.querySelector('.fnSliderDestinosDetalle__right'),
						        			prevEl: el.clase.parentElement.querySelector('.fnSliderDestinosDetalle__left')
								     	}
								    };
                            break;
                    }
                    el.swiper = new Swiper(el.clase, ar);
                });
        },

		swipers : function(){

			let swiperHome = new Swiper('.fnSliderHome', {
				effect: 'fade', speed: 1500, autoplay: true,
				pagination: {
					el: '.sliders__nav__items',
					clickable: true,
					renderBullet: function(index, className) {
						return '<div class="'+className+' sliders__nav__item">'+(index+1)+'</div>';
					}
				}
			});

			$('.fnSliderPlayPause')
				.on('click', function(){
					$(this).toggleClass('-active-');
					$(this).hasClass('-active-') ? swiperHome.autoplay.stop() : swiperHome.autoplay.start() ;
				});

			$('.fnFiltroSliderFree')
				.on('change click', function(e){
					e.preventDefault();
					const tipo = $(this).data('tipo')!=undefined ? $(this).data('tipo') : $(this).find('option:selected').data('tipo') ;
					let slider = $('.fnSliderFree');
					$('.fnFiltroSliderFree').removeClass(dom.active);
					$(this).addClass(dom.active);
					$.each(slider, function() {
						if( $(this).find('.swiper-slide[data-tipo='+tipo+']').length==0 )
						{
							$(this).addClass('-sin-resultados-');
						} else {
							$(this)
								.removeClass('-sin-resultados-')
								.find('.swiper-slide')
									.removeClass('-inactivo-')
								.end()
								.find('.swiper-slide[data-tipo!='+tipo+']')
									.addClass('-inactivo-');
						}
					});
					$.each(dom.swiperrotadores, function(index, val) {
						val.swiper.update();
					});
				});

			let swiperGrilla = new Swiper('.fnSliderGrilla', {
				spaceBetween: 0,
				freeMode: true,
				slidesPerView: 'auto'
				// slidesPerColumn: 2,
				// breakpoints : {
				// 	680 : {
				// 		spaceBetween: 0,
				// 		freeMode: true,
				// 		slidesPerView: 'auto',
				// 		slidesPerColumn: 2
				// 	},
				// 	0 : {
				// 		spaceBetween: 0,
				// 		freeMode: true,
				// 		slidesPerView: 'auto',
				// 		slidesPerColumn: 1
				// 	}
				// }
		    });

		    let swiperDestinoDetalle = new Swiper('.fnSliderDestinosDetalle', {
		    	speed: 1500, autoplay: true, loop: true,
		    	pagination: {
		        	el: '.destinos__detalle__slider__pagination',
		        	clickable: true
		     	},
		     	navigation: {
		     		nextEl: '.fnSliderDestinosDetalle__left',
        			prevEl: '.fnSliderDestinosDetalle__right'
		     	}
		    });

		    let swiperBloqueTCD = new Swiper('.fnSliderBloqueTCD', {
				speed: 1500, autoplay: true, loop: true, spaceBetween: 18,
		    	pagination: {
		        	el: '.SliderBloqueTCD__pagination',
		        	clickable: true
		     	},
		     	navigation: {
		     		nextEl: '.SliderBloqueTCD__left',
        			prevEl: '.SliderBloqueTCD__right'
		     	}
			});

			let swiperSlideBg = new Swiper('.fnSliderBg', {
				effect: 'fade',
				autoplay: { delay: 5000 },
				speed: 1200
			});

			let swiperMorado = new Swiper('.fnSliderMorado', {
				effect: 'fade',
				autoplay: { delay: 3500 },
				speed: 750,
				navigation: {
					nextEl: '.seccion__slider-morado__nav__adelante',
					prevEl: '.seccion__slider-morado__nav__atras'
				},
				loop: true
			});
			swiperMorado.on('slideChange', function () {
				$('.fnNumSlider').html( swiperMorado.realIndex+1 );
			});

			let swiperVolverReactivacion = new Swiper('.fnSliderVolverReactivacion', {
		    	speed: 750, autoplay: true, loop: true,
		     	navigation: {
		     		nextEl: '.fnSliderVolverReactivacionToRight',
        			prevEl: '.fnSliderVolverReactivacionToleft'
		     	},
		     	breakpoints : {
		     		800 : {
		     			slidesPerView: 3,
		     			spaceBetween: 15
		     		},
					520 : {
						slidesPerView: 2,
						spaceBetween: 10
					},
					0 : {
						slidesPerView: 1,
						spaceBetween: 10
					}
				}
		    });


		   	let swiperVolverAViajarAyudar = new Swiper('.fnSliderVolverAViajarAyudar', {
				speed: 750, autoplay: true, loop: true,
				pagination: { el: '.volveraviajar__ayudar__slider__pagination' },
				breakpoints : {
					900 : {
						slidesPerView: 2,
						spaceBetween: 50
					},
					700 : {
						slidesPerView: 2,
						spaceBetween: 20
					},
					0 : {
						slidesPerView: 1,
						spaceBetween: 0
					}
				}
		    });


		    let swiperVolverAViajarInstagrameable = new Swiper('.fnSliderVolverAViajarInstagrameable', {
				speed: 750, autoplay: true, loop: true,
				// pagination: { el: '.volveraviajar__ayudar__slider__pagination' },
				breakpoints : {
					1000 : {
						slidesPerView: 4,
						spaceBetween: 10
					},
					700 : {
						slidesPerView: 3,
						spaceBetween: 10
					},
					500 : {
						slidesPerView: 2,
						spaceBetween: 10
					},
					0 : {
						slidesPerView: 1,
						spaceBetween: 0
					}
				}
		    });

		    let swiperVolverAViajarVoces = new Swiper('.fnSliderVolverAViajarVoces', {
				pagination: { el: '.volveraviajar__voces__slider__pagination' },
				breakpoints : {
					1000 : {
						slidesPerView: 3, slidesPerColumn: 2, spaceBetween: 30
					},
					680 : {
						slidesPerView: 2, slidesPerColumn: 2, spaceBetween: 30
					},
					0 : {
						slidesPerView: 1, slidesPerColumn: 2, spaceBetween: 30
					}
				}
		    });

		    $('.fnChangeVoces a')
				.on('click', function (e) {
					e.preventDefault();
					const target = $( $(this).attr('href') );
					const prev = $('.volveraviajar__voces__slider, .volveraviajar__voces__nav a');
					prev.removeClass('-active-');
					$(this).addClass('-active-');
					target.addClass('-active-');
				});

		},

		clicks : function(){

			const _bloques = $('#popup-comollegar .popup-comollegar__bloque');
			let terrestre = [];
			let aereo = [];
			let lacustre = [];
			_bloques.each(function(index, val) {
				$(this).data('tipo')=='Terrestre' && terrestre.push( $(this).find('ul').html() );
				$(this).data('tipo')=='Aero' && aereo.push( $(this).find('ul').html() );
				$(this).data('tipo')=='Lacustre' && lacustre.push( $(this).find('ul').html() );
			});
			$('#popup-comollegar').html('');
			if(terrestre.length>0){
				terrestre = terrestre.join("");
				$('#popup-comollegar').append('<div class="popup__contenido-parrafo__bloque"><p>Terrestre:</p><ul class="popup-comollegar__ul">'+terrestre+'</ul></div>');
			}
			if(aereo.length>0){
				aereo = aereo.join("");
				$('#popup-comollegar').append('<div class="popup__contenido-parrafo__bloque"><p>Aereo:</p><ul class="popup-comollegar__ul">'+aereo+'</ul></div>');
			}
			if(lacustre.length>0){
				lacustre = lacustre.join("");
				$('#popup-comollegar').append('<div class="popup__contenido-parrafo__bloque"><p>Lacustre:</p><ul class="popup-comollegar__ul">'+lacustre+'</ul></div>');
			}


			$('.fnToggleClass')
				.on('click', function(e){
					e.preventDefault();
					const t = $(this);
					const targets = t.data('targets');
					const removes = t.data('removes');
					targets && active(targets);
					removes && $(removes).removeClass(dom.active);
					if ( t.hasClass('videoClose') ) {
						$('#box-video').find('iframe').attr('src', '');
					}
				});
			$('.fnVerDepartamentosPorZona')
				.on('click', function(){
					removeAndAct('.fnVerDepartamentosPorZona', $(this));
					$('.header__nav__destinos')
						.removeClass('-norte- -centro- -sur-')
						.addClass($(this).data('filtro'));
				});
			$('.buscador-principal')
				.on('mouseleave', function(){
					$('.buscador-principal, .header__nav__enlace__bg').removeClass(dom.active)
				});
			$('.fnMostrarBuscadorPrincipal')
				.on('click', function(){
					$('.buscador-principal__input').focus();
				});
			$('.buscador-principal__input')
				.on('focus', function() {
					$('.buscador-principal').removeClass('-no-focus-');
					if( $(this).val()=='' ) {
						$('.buscador-principal__input').val('');
						$('.buscador-principal__input').focus();
					}
				});
			$('.header__nav__destinos__enlace')
				.on('mouseenter mouseleave', function() {
					const mapa = $(this).data('mapa');
					active('.header__mapa__'+mapa);
				});
			$('.fnSelect')
				.on('change', function(e){
					$(this).parent().find('.fnTargetSelect').text($(this).find('option:selected').text());
				});
			$('.fnBoxVideo')
				.on('click', function(e) {
					e.preventDefault();
					let url = 'https://www.youtube.com/embed/' + $(this).data('video') ;
					$('#box-video').addClass(dom.active).find('iframe').attr('src', url);
				});

			// Grilla
			$('.fnFiltrarGrilla')
				.on('click change', function(e){
					const target = $( $(this).closest('.filtro-selector').data('target') );
					const filtro = $(this).data('filtro')!==undefined ? $(this).data('filtro') : $(this).val() ;
					const filtroClass = $('.card-poster').length ? '.card-poster[data-filtro*="'+filtro+'"]' : '.card-info[data-filtro*="'+filtro+'"]';
					$(this).parent('.filtro-selector').find('.filtro-selector__boton').removeClass(dom.active);
					$(this).addClass(dom.active);
					if(filtro!==undefined && filtro!=='') {
						target
							.removeClass('-mostrar-todos- -mostrar-ocultos- -ocultar-boton- -mas-8- -mas-6- -mas-4- -mas-3-')
							.addClass(dom.active)
							.find('.card-poster, .card-info')
								.removeClass('-activo- -si-3- -si-4- -si-6- -si-8-')
							.end()
							.find(filtroClass)
								.addClass(dom.active)
								.eq(2).addClass('-si-3-')
								.eq(3).addClass('-si-4-')
								.end()
								.eq(5).addClass('-si-6-')
								.end()
								.eq(7).addClass('-si-8-');

						const activos = target.find(filtroClass).length;
						activos>8 && target.addClass('-mas-8-');
						activos>6 && target.addClass('-mas-6-');
						activos>4 && target.addClass('-mas-4-');
						activos>3 && target.addClass('-mas-3-');
					} else {
						target
							.removeClass('-activo- -mostrar-ocultos- -ocultar-boton-')
							.addClass('-mostrar-todos-')
							.find('.card-poster, .card-info')
								.removeClass(dom.active);
						const activos = target.find('.card-poster, .card-info').length;
						activos>8 && target.addClass('-mas-8-');
						activos>6 && target.addClass('-mas-6-');
						activos>4 && target.addClass('-mas-4-');
						activos>3 && target.addClass('-mas-3-');
					}
				});
			$('.fnFiltrarGrillaTodo')
				.on('click', function(){
					$( $(this).data('target') )
						.addClass('-mostrar-ocultos-');
				});
			$.each(
				$('.fnFiltroSelectorValidar .filtro-selector__boton, .fnFiltroSelectorValidar .filtro-selector__select-ui__select option'),
				function(index, val) {
					const t = $(this);
					const filtro = t.data('filtro')!==undefined ? t.data('filtro') : t.val() ;
					if(filtro!='' && $('#fnTargetFiltroGrilla .card-poster[data-filtro*="'+filtro+'"]').length==0){
						t.attr('hidden', 'hidden');
					}
				}
			);

			// cambia el estado del filtro ciduda en el blog
			$('.fnSelectCityBlog')
				.on('change', function(e){
					const val = $(this).val();
					const url = $.trim(val)!='' ? '/'+$(this).val() : '' ;
					window.location.href = '/blog-viajero'+url;
				});

			// compartir en facebook
			$('.fnShareFacebook')
				.on('click', function(e){
					e.preventDefault();
					FB.ui({
					  method: 'share',
					  href: window.location.href
					}, function(response){});
				});

			// Compartir en Twitter
			$('.fnShareTwitter').attr('href','https://twitter.com/intent/tweet?text=Ytuqueplanes&url='+window.location.href);

			$('.fnShareWsp').attr('href','https://api.whatsapp.com/send?text='+window.location.href);

			$('.fnShare')
				.on('click', function(e){
					e.preventDefault();
					$(this).parent().toggleClass(dom.active);
				});

			// Buscador de departamentos de rutas
			$('#inputSearchRutasCortas')
				.on('keyup', function(e){
					if( $.trim($(this).val()).length>0 ) {
						let valor = $(this).val().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
						let cards = $('#fnTargetFiltroGrilla .card-poster');
						$('#fnTargetFiltroGrilla').removeClass('-sin-resultados-').addClass('-mostrar-resultados-');
						$('.card-poster').removeClass('-activo-');
						// $('.card-poster[data-filtro*="'+$(this).val().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")+'"]').addClass('-activo-');
						$.each(cards, function(index, val) {
							let t = $(this);
							let filtro = t.data('filtro').toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
							filtro.search(valor)!=-1 && t.addClass('-activo-');
						});
						$('.card-poster.-activo-').length==0 && $('#fnTargetFiltroGrilla').removeClass('-mostrar-resultados-').addClass('-sin-resultados-');
					} else {
						$('#fnTargetFiltroGrilla').removeClass('-mostrar-resultados- -sin-resultados-');
						$('.card-poster').removeClass('-activo-');
					}
				});

			// Filtro de calendario
			$('.fnFiltroCalendario')
				.on('click change', function(){
					dom.calendarioFiltro = $(this).data('filtro') || $(this).val();
					$('.calendario__festividad, .filtro-selector__boton').removeClass(dom.active)
					if(dom.calendarioFiltro!='') {
						$('#calendario').addClass('-filtrar-');
						$('.calendario__festividad[data-filtro*="'+dom.calendarioFiltro+'"]').addClass(dom.active);
					} else {
						$('#calendario').removeClass('-filtrar-');
					}
					$(this).addClass(dom.active);
				});

			$('.fnSelectUrlReload')
				.on('change', function() {
					window.location = $(this).val();
				});
			document.addEventListener("keydown", function (event) {
				if (event.keyCode === 27) {
					$('.box').removeClass(dom.active);
				}
			});
		},

		forms : function(){

			let formBlock = true;
			$('form').on('submit', function(e){

				let f = $(this);
				let fields = f.find('input, textarea, select');
				let tipoForm = f.data('tipo');
				let method = f.attr('method').toLowerCase();
				let lightbox = f.data('gracias');
				let error = 0;
				let btn = f.find('button');
				let dataForm = '';
				let validCorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				let num = /[^0-9]/g;

				$.each(fields, function(index, val) {
					let t = $(this);
					if(t.attr('no')===undefined) {
						let value = t.val();
						let targetError = t.parent();
						$.trim(value)==='' && targetError.addClass('-error-') && error++;
						switch (t.attr('valid')) {
							case 'numero': num.test(value) && targetError.addClass('-error-') && error++; break;
							case 'email': !validCorreo.test(value) && targetError.addClass('-error-') && error++; break;
							case 'subscription': !validCorreo.test(value) && t.addClass('-error-') && error++; break;
							case 'select': $.trim(value)==='' && targetError.parent().addClass('-error-') && error++; break;
							case 'file': $.trim(value)==='' && targetError.addClass('-error-') && error++; break;
							case 'terminos': !t.is(':checked') && targetError.addClass('-error-') && error++; break;
						}
					}
				});

				if(error===0&&formBlock) {
					if(method=='get' || tipoForm=='postpermit'){
						return true;
					} else {
						e.preventDefault();
						grecaptcha.ready(function(){
							if( grecaptcha.getResponse() ) {
								btn.attr('disabled','disabled');
								formBlock=false;
								// $.ajax({url: f.attr('action'), type: 'POST', dataType: 'json', data: f.serializeArray()})
								// 	.done(function(response) {
								// 	});
								$(lightbox).addClass(dom.active);
								$.each(fields, function(index, val) {
									$(this).val('').prop( "checked", false );
								});
								formBlock=true;
								btn.removeAttr('disabled');
							} else {

							}
						});
					}
				} else {
					return false;
				}
			});

			$('input, select, textarea')
				.on('focus', function(){
					$(this).parent().addClass('-focus-').removeClass('-error-');
				})
				.on('blur change', function(){
					$(this).parent().removeClass('-focus-');
				});
		}

	};

	function setCalendario(direccion){
		const urlApi = calendario_provincia ? '/api/festividades/'+calendario_provincia : '/api/festividades';
		$.getJSON(urlApi, function(data, textStatus) {
			const json = data;
			const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
			const dia = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sáb'];
			let fecha;
			switch (direccion) {
				case 'mas':
						if(dom.calendarioFecha.mes==11) { dom.calendarioFecha.anio = dom.calendarioFecha.anio+1; dom.calendarioFecha.mes = 0; }
							else { dom.calendarioFecha.mes++; }
					break;
				case 'menos':
						if(dom.calendarioFecha.mes==0) { dom.calendarioFecha.anio = dom.calendarioFecha.anio-1; dom.calendarioFecha.mes = 11; }
							else { dom.calendarioFecha.mes--; }
					break;
			}
			fecha = new Date(dom.calendarioFecha.anio, dom.calendarioFecha.mes, 1)
			const MesAnioTitulo = meses[fecha.getMonth()]+' '+fecha.getFullYear();
			const mesIdJson = fecha.getMonth()+1;
			const diasTotal = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate();
			let diasHtml = '';
			for(let i=1; i<=diasTotal; i++) {
				inMobile = data.find( (uni) => uni.inicio === i && uni.mes_id===mesIdJson ) ? 'm--mobile':'' ;
				diasHtml += `<li class="calendario__item ${inMobile}">
			                    <div class="calendario__article">
			                        <time class="calendario__fecha">
			                            <span>${dia[new Date(fecha.getFullYear(), fecha.getMonth(), i).getDay()]}</span>
			                            <span>${i}</span>
			                        </time>
			                        ${printDia(json, i, mesIdJson)}
			                    </div>
			                </li>`;
			}
			document.getElementById('calendario').innerHTML = diasHtml;
			document.getElementById('calendario_mes_titulo').innerHTML = MesAnioTitulo;

			$.each($('.fnSliderCalendarioFestividad'), function(index, val) {
				let t = $(this);
				let slideFestividad = new Swiper(t, {
					speed: 750, loop: true, autoHeight: true,
					navigation: {
			     		nextEl: t.find('.__right'),
	        			prevEl: t.find('.__left')
			     	}
				});
				slideFestividad.on( 'slideChange', function () {
					t.find('.__index').html( slideFestividad.realIndex+1 );
				});
			});
			// let festSlider = new Swiper('.fnSliderCalendarioFestividad', {
			// 	speed: 1500, autoplay: true, loop: true
			// });
		});
	}

	function printDia(json, diaId, mesIdJson) {
		let festividades = '';
		let festividadesLength = 0;
		let slideStart = '';
		let slideEnd = '';
		json.forEach( function(dia, index) {
			dia.inicio == diaId && dia.mes_id == mesIdJson && dia.anio == dom.calendarioFecha.anio && festividadesLength++;
		});
		if( festividadesLength > 1 ) {
			slideStart = '<div class="swiper-slide">';
			slideEnd = '</div>';
			festividadesLength = 1;
		}
		json.forEach(function(dia, index){
			if( dia.inicio == diaId &&
				dia.mes_id == mesIdJson &&
				dia.anio == dom.calendarioFecha.anio
				) {
				// let filtro = dia.tipo_de_festividad=='fin' || dia.tipo_de_festividad=='feriado' ? dia.tipo_de_festividad : ['feriado', 'fin'][Math.floor(Math.random() * 2)];
				let filtro = dia.tipo_de_festividad;
				let activo = dom.calendarioFiltro==filtro?'-activo-':'';
				festividades += slideStart + `<article class="calendario__festividad full ${activo}" data-filtro="${filtro}">
									<img src="${dia.imagen}" class="calendario__imagen" />
			                        <strong class="calendario__resumen">${dia.nombre}</strong>
			                        <address class="calendario__lugar"><i class="fa fa-map-marker" aria-hidden="true"></i> ${dia.provincia}</address>
			                        <a href="/festividades/${dia.provincia_slug}/${dia.slug}" class="calendario__enlace">Más información</a>
			                    </article>` + slideEnd;
			    festividadesLength++;
			}
		});

		return festividades == '' ? '<div class="calendario__festividad"></div>' : ( festividadesLength > 2 ? '<div class="swiper-container calendario__festividad__slider fnSliderCalendarioFestividad"><div class="swiper-wrapper">' + festividades + '</div><div class="__nav"><div class="__flecha __left"></div><div class="__posicion"><span class="__index">1</span>/'+(festividadesLength-1)+'</div><div class="__flecha __right"></div></div></div>' : festividades );
	}

	function cardPosterTipo1(val) {
		return `<div class="swiper-slide">
                    <article class="card-poster m--tipo1 m--pronto">
                        <img src="${val.images.activityImage.full.url}" alt="" class="card-poster__imagen">
                        <strong class="card-poster__precio">
                            S/ ${val.pricing.amountSale}
                            <span class="card-poster__precio-anterior">Antes S/ ${val.pricing.amount}</span>
                        </strong>
                        <aside class="corazon m--blanco card-poster__corazon"><i class="fa fa-heart" aria-hidden="true"></i>10</aside>
                        <header class="card-poster__header">
                            <span class="card-poster__compra">Compra online</span>
                            <strong class="card-poster__subtitulo">${val.activityType}</strong>
                            <h1 class="card-poster__titulo">${val.title}</h1>
                        </header>
                        <a href="${val.url}" target="_blank" class="card-poster__mas-informacion">Más información</a>
                        <div class="card-poster__pronto"><p><span>MUY PRONTO</span><br>estarán activas<br>las ofertas</p></div>
                    </article>
                </div>`;
	}

	function cardPosterTipo2(val) {
		return `<div class="swiper-slide">
                    <article class="card-poster m--tipo2 m--pronto">
                        <img src="${val.images.activityImage.full.url}" alt="" class="card-poster__imagen">
                        <strong class="card-poster__precio">
                            S/ ${val.pricing.amountSale}
                            <span class="card-poster__precio-anterior">Antes S/ ${val.pricing.amount}</span>
                        </strong>
                        <aside class="corazon m--blanco card-poster__corazon"><i class="fa fa-heart" aria-hidden="true"></i>10</aside>
                        <header class="card-poster__header">
                            <span class="card-poster__compra">Compra online</span>
                            <strong class="card-poster__subtitulo">${val.activityType}</strong>
                            <h1 class="card-poster__titulo">${val.title}</h1>
                        </header>
                        <a href="${val.url}" target="_blank" class="card-poster__mas-informacion">Más información</a>
                        <div class="card-poster__pronto"><p><span>MUY PRONTO</span><br>estarán activas<br>las ofertas</p></div>
                    </article>
                </div>`;
	}

	// Switch active class to target
	function active(key){ $($.trim(key)).toggleClass(dom.active); }

	//
	function removeAndAct(classes, key){
		$(classes).removeClass(dom.active);
		key.addClass(dom.active);
	}

	let initialize = siteFunctions;

	return { init: initialize }

})();

site.init();