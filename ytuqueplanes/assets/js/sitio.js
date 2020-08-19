// @prepros-prepend plugins.js
// @prepros-prepend svg.js
'use strict';
const site = (function(){

	const dom = {
	    // set your own vals
	    active : '-activo-',
	    rotadores : document.querySelectorAll('.fnSliderFree'),
	    swiperrotadores: new Array()
	};

	const siteFunctions = function(){
		events.printers();
		events.swipers();
		events.clicks();
		events.setRotadores();
	};

	const events = {

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
                    	$.ajax({
							url: 'https://devapi.joinnus.com/v2/search',
							headers: { 'brand': 'ytqp', 'Content-Type': 'application/json' },
							type: 'GET',
							dataType: 'json',
							data: el.clase.getAttribute('data-api-data')
						})
						.done(function(response) {
							var slides = '';
							switch (api) {
	                    		case 'card-poster-tipo-1':
										$.each(response.data, function(index, val) {
											slides += cardPosterTipo1(val);
										});
	                    			break;
	                    		case 'card-poster-tipo-2':
										$.each(response.data, function(index, val) {
											slides += cardPosterTipo2(val);
										});
	                    			break;
	                    	}
							el.clase.querySelector('.swiper-wrapper').innerHTML = slides;
						});

                    }
                    switch (el.clase.classList[2]) {
                        default:
	                            ar = {
										slidesPerView: 'auto',
										freeMode: true,
			     						navigation: {
								     		nextEl: el.clase.parentElement.querySelector('.fnSliderDestinosDetalle__left'),
						        			prevEl: el.clase.parentElement.querySelector('.fnSliderDestinosDetalle__right')
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
				slidesPerView: 'auto',
				slidesPerColumn: 2,
				breakpoints : {
					680 : {
						spaceBetween: 0,
						freeMode: true,
						slidesPerView: 'auto',
						slidesPerColumn: 2
					},
					0 : {
						spaceBetween: 0,
						freeMode: true,
						slidesPerView: 'auto',
						slidesPerColumn: 1
					}
				}
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

		},

		clicks : function(){
			$('.fnToggleClass')
				.on('click', function(e){
					e.preventDefault();
					const t = $(this);
					const targets = t.data('targets');
					const removes = t.data('removes');
					targets && active(targets);
					removes && $(removes).removeClass(dom.active);
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
				.on('focus', function(){
					$('.buscador-principal').removeClass('-no-focus-');
				})
				.on('blur', function(){
					$('.buscador-principal').addClass('-no-focus-');
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
			$('.fnFiltrarGrilla')
				.on('click change', function(e){
					const target = $( $(this).closest('.filtro-selector').data('target') );
					const filtro = $(this).data('filtro')!==undefined ? $(this).data('filtro') : $(this).val() ;
					const filtroClass = '.card-poster[data-filtro*="'+filtro+'"]';
					$(this).parent('.filtro-selector').find('.filtro-selector__boton').removeClass(dom.active);
					$(this).addClass(dom.active);
					if(filtro!==undefined && filtro!=='') {
						target
							.removeClass('-mostrar-todos- -mostrar-ocultos- -ocultar-boton- -mas-8- -mas-6- -mas-4-')
							.addClass(dom.active)
							.find('.card-poster')
								.removeClass('-activo- -si-4- -si-6- -si-8-')
							.end()
							.find(filtroClass)
								.addClass(dom.active)
								.eq(3).addClass('-si-4-')
								.end()
								.eq(5).addClass('-si-6-')
								.end()
								.eq(7).addClass('-si-8-');

						const activos = target.find(filtroClass).length;
						activos>8 && target.addClass('-mas-8-');
						activos>6 && target.addClass('-mas-6-');
						activos>4 && target.addClass('-mas-4-');
					} else {
						target
							.removeClass('-activo- -mostrar-ocultos- -ocultar-boton-')
							.addClass('-mostrar-todos-')
							.find('.card-poster')
								.removeClass(dom.active);

						const activos = target.find('.card-poster').length;
						activos>8 && target.addClass('-mas-8-');
						activos>6 && target.addClass('-mas-6-');
						activos>4 && target.addClass('-mas-4-');
					}
				});
			$('.fnFiltrarGrillaTodo')
				.on('click', function(){
					$( $(this).data('target') )
						.addClass('-mostrar-ocultos-');
				});
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
					  href: 'https://ytuqueplanes.com'
					}, function(response){});
				});

			// Buscador de departamentos de rutas
			$('#inputSearchRutasCortas')
				.on('keyup', function(e){
					if( $.trim($(this).val()).length>0 ) {
						$('#fnTargetFiltroGrilla').addClass('-mostrar-resultados-')
						$('.card-poster').removeClass('-activo-');
						$('.card-poster[data-filtro*='+$(this).val().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")+']').addClass('-activo-');
						$('.card-poster.-activo-').length==0 && $('#fnTargetFiltroGrilla').removeClass('-mostrar-resultados-').addClass('-sin-resultados-');
					} else {
						$('#fnTargetFiltroGrilla').removeClass('-mostrar-resultados- -sin-resultados-');
						$('.card-poster').removeClass('-activo-');
					}
				});
		},

		forms : function(){
			// Set Recaptach
				// setNewRecaptcha();

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
						btn.attr('disabled','disabled');
						formBlock=false;
						$.ajax({url: f.attr('action'), type: 'POST', dataType: 'json', data: f.serializeArray()})
							.done(function(response) {
								if(response.rpta)
								{
									switch (tipoForm) {
										case 'inLightbox':
											break;
										default:
												// default action
											break;
									}
									// setNewRecaptcha();
									formBlock = true;
									btn.removeAttr('disabled');
								}
							});
					}
				} else {
					return false;
				}
			});

			$('input, select, textarea')
				.on('focus', function(){
					// Set you own function
				});
		}

	};

	function cardPosterTipo1(val) {
		return `<div class="swiper-slide">
                    <article class="card-poster m--tipo1">
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
                    </article>
                </div>`;
	}

	function cardPosterTipo2(val) {
		return `<div class="swiper-slide">
                    <article class="card-poster m--tipo2">
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
                    </article>
                </div>`;
	}

	// set Google Recaptha
	function setNewRecaptcha(){
		grecaptcha.ready(function() {
			grecaptcha.execute('Define your own key code', {action: 'nameofweb'}).then(function(token) {
				if(!$('input[name="tokengoogle"]').length) {
					$('form').append('<input type="hidden" name="tokengoogle" value="'+token+'" />');
				} else {
					$('form input[name="tokengoogle"]').val(token);
				}
			});
		});
	}

	// Switch active class to target
	function active(key){ $($.trim(key)).toggleClass(dom.active); }

	//
	function removeAndAct(classes, key){
		$(classes).removeClass(dom.active);
		key.addClass(dom.active);
	}

	// Set value on change event in selects
	function selectChange() {
		$('.fnSelect').on('change', function(){
			let value = $(this).find('option:selected').text();
			$(this).parent().find('strong').html(value);
		});
	}

	let initialize = siteFunctions;

	return { init: initialize }

})();

site.init();