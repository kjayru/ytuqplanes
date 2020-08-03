// @prepros-prepend plugins.js
// @prepros-prepend svg.js
'use strict';
const site = (function(){

	const dom = {
	    // set your own vals
	    active : '-activo-'
	};

	const siteFunctions = function(){

		// events.name();
		events.printers();
		events.swipers();
		events.clicks();
	};

	const events = {

		printers : function(){
			$('.header__mapa').html(headerMapa);
			$('.header__mapa__fuente').html(mapaSVG);
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
			// document.querySelector('#fnSliderPlayPause')
			// 	.addEventListener('click', function() {
			// 		this.classList.toggle('-active-');
			// 		this.classList.contains('-active-') ? swiperHome.autoplay.stop() : swiperHome.autoplay.start() ;
			// 	});

			let swiperFreeMode = new Swiper('.fnSliderFree', {
				slidesPerView: 'auto', freeMode: true
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
					console.log('5a4d65as');
					$(this).parent().find('.fnTargetSelect').text($(this).find('option:selected').text());
				});
			$('.fnFiltrarGrilla')
				.on('click change', function(e){
					const target = $( $(this).closest('.filtro-selector').data('target') );
					const filtro = $(this).data('filtro')!==undefined ? $(this).data('filtro') : $(this).val() ;
					const filtroClass = '.card-poster[data-filtro="'+filtro+'"]';
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

	// set Google Recaptha
	function setNewRecaptcha(){
		grecaptcha.ready(function() {
			grecaptcha.execute('Define your own key code', {action: 'futurismogroup'}).then(function(token) {
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