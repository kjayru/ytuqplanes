/* fecha 28/09/2020 */
$(document).ready(function() {

	var map, marker, popup, fontAwesomeIcon, bounds;

	/* Cada vez que cambie el ancho de la ventana del navegador,
	llama a la función "waypointItems", esto se hace para refrescar el scrolleo y que los marcadores te sigan */
	$(window).on("resize", function() {
		waypointItems();
	});

	/* Cada vez que se da un click sobre el nombre de algún atractivo;
	el marcador o punto geográfico muestra la ubicación en el mapa y
	despliega un popup con el nombre del atractivo */
	$(".wrapper-first-right-body").on("click", ".wflitem-title", function() {
		let lat_lng = [parseFloat($(this).parent().attr("data-lat")), parseFloat($(this).parent().attr("data-lng"))];
		popup.setLatLng(lat_lng).setContent($(this).parent().attr("data-name")).openOn(map);
		map.setView(lat_lng, 15);
	});

	/* Al clickear en el botón "Ver ofertas", te direccionará al enlace correspondiente */
	$(".wrapper-first-right-deals").on("click", ".wrapper-first-right-deals-link", function() {
		window.location.href = $(this).attr("data-href");
	});

	/* Este evento hace la funcionalidad de los botones del compartir (facebook, twitter, whatsapp) /
	botón "Datos útiles" / botón "Ubicar en Google Maps" / botón "Descargar Ruta en PDF";
	todos ubicados en la cabecera */
	$(".wrapper-first-right-header").on("click", ".wfrhbi-link", function() {
		var url, id;
		if($(this).hasClass("fb")) {
			url = "https://www.facebook.com/sharer/sharer.php?u=" + getEncodeUrlPage() + "&t=" + getEncodeTitlePage();
			window.open(url, "_blank");
		} else if($(this).hasClass("tw")) {
			url = "https://twitter.com/intent/tweet?text=" + getEncodeTitlePage() + "&url=" + getEncodeUrlPage();
			window.open(url, "_blank");
		} else if($(this).hasClass("wa")) {
			url = "https://api.whatsapp.com/send?text=" + getEncodeUrlPage();
			window.open(url, "_blank");
		} else if($(this).hasClass("popup")) {
			id = $(this).attr("data-id");
			$.magnificPopup.open({
				items: {
					src: id
				},
				type: "inline",
				fixedContentPos: true,
				callbacks: {
					beforeOpen: function() {
						this.st.mainClass = "mfp-zoom-in";
					}
				}
			});
		} else if($(this).hasClass("btn")) {
			url = $(this).attr("data-href");
			window.open(url, "_blank");
		} else if($(this).hasClass("download")) {
			url = $(this).attr("data-href");
			window.open(url, "_blank");
		}
	});

	/* En esta parte cargamos la data del archivo json, el cual contiene la info de las rutas y los atractivos */

	$.getJSON('/api/ApiMapa/'+slugRegion, function(json, textStatus) {
		var grep_route = $.grep(json, function(n, i) {
			/* Aquí solo traemos la data que nos sirve, en este caso filtro de acuerdo a la región y ruta */
			return n.url == slugRuta;
		});
		loadNavbar(grep_route);/* LLamo a la función que carga los datos del menú superior */
		loadHeader(grep_route);/* Llamo a la función que carga los datos de la cabecera */
		loadBody(grep_route);/* Llamo a la función que carga el cuerpo de los atractivos y mapa */
		loadUsefulData(grep_route); /* Llamo a la función que carga la info del popup de Datos útiles */
	});


	/* En esta parte cargamos la data del archivo json, el cual contiene solo la info de las regiones */
	loadDeals([nombreProvincia, urlOfertas]);

	/* Esta función arma la estructura del menú superior y la carga en el contenedor "wrapper-navbar" */
	function loadNavbar(data) {
		var contenido = "";
		contenido += "<div class='wrapper-navbar-container'>";
		contenido += "<div class='wrapper-navbar-left'>";
		contenido += '<a class="wrapper-navbar-link" href="/rutas-cortas/'+slugRegion+'">';
		contenido += "<i class='fa fa-long-arrow-left'></i>Rutas cortas desde " + data[0].region + "";
		contenido += '</a>';
		contenido += "</div>";
		contenido += "<div class='wrapper-navbar-right'>";
		contenido += '<a class="wrapper-navbar-link" href="/rutas-cortas/'+slugRegion+'">';
		contenido += "<i class='fa fa-times'></i>";
		contenido += "</div>";
		contenido += "</div>";
		contenido += "</div>";
		$(".wrapper-navbar").append(contenido);
	}

	/* Esta función arma la estructura de la cabecera y la carga en el contenedor "wrapper-first-right-header" */
	function loadHeader(data) {
		var contenido = "";
		contenido += "<h1>" + data[0].name + "</h1>";
		contenido += "<h2><i class='fa fa-map-marker'></i>" + data[0].region + "</h2>";
		contenido += "<div class='wrapper-first-right-header-buttons'>";
		contenido += "<div class='wrapper-first-right-header-buttons-left'>";
		contenido += "<div class='wrapper-first-right-header-buttons-item'>";
		contenido += "<label>Compartir:</label>";
		contenido += "<ul>";
		contenido += "<li class='wfrhbi-link fb'><i class='fa fa-facebook'></i></li>";
		contenido += "<li class='wfrhbi-link tw'><i class='fa fa-twitter'></i></li>";
		contenido += "<li class='wfrhbi-link wa'><i class='fa fa-whatsapp'></i></li>";
		contenido += "</ul>";
		contenido += "</div>";
		contenido += "<div class='wrapper-first-right-header-buttons-item'>";
		contenido += "<p class='wfrhbi-link popup' data-id='#datos-utiles'><i class='fa fa-info-circle'></i>Datos útiles</p>";
		contenido += "</div>";
		contenido += "</div>";
		if(data[0].google != null && data[0].google != "" || data[0].pdf != null && data[0].pdf != "") {
			contenido += "<div class='wrapper-first-right-header-buttons-right'>";
			if(data[0].google != null && data[0].google != "") {
				contenido += "<div class='wrapper-first-right-header-buttons-item'>";
				contenido += "<p class='wfrhbi-link btn' data-href='" + data[0].google + "'><i class='fa fa-map-marker'></i>Ubicar en Google Maps</p>";
				contenido += "</div>";
			}
			if(data[0].pdf != null && data[0].pdf != "") {
				contenido += "<div class='wrapper-first-right-header-buttons-item'>";
				contenido += "<p class='wfrhbi-link download' data-href='" + data[0].pdf + "'><i class='fa fa-download'></i>Descargar Ruta en PDF</p>";
				contenido += "</div>";
			}
			contenido += "</div>";
		}
		contenido += "</div>";
		$(".wrapper-first-right-header").append(contenido);
	}

	/* Esta función arma la estructura del listado de atractivos y el mapa,
	para luego cargarlo en el contenedor "wrapper-first-right-body" */
	function loadBody(data) {
		if(data[0].places.length > 0) {/* Verifico si hay atractivos */
			var data_places = _(data[0].places).orderBy(["order"], ["asc"]).value();/* Ordeno los atractivos de acuerdo al campo order de manera ascendente */
			$(".wrapper-first-right-body").append("<h2>¿Qué visitar?</h2>");
			var contenido = "";
			contenido += "<div class='wrapper-first-right-list'>";
			var j = 0;
			for(var i in data_places) {/* Empiezo a recorrer cada uno de los atractivos */
				j++;
				contenido += "<div class='wrapper-first-right-list-item' id='map-section-" + j + "' data-name='" + data_places[i].name + "' data-lat='" + data_places[i].cordinate[0].latitude + "' data-lng='" + data_places[i].cordinate[0].longitude + "'>";
				contenido += "<h3 class='wflitem-title'>";
				contenido += "<span>" + j + "</span><label>" + data_places[i].name + "</label>";
				contenido += "</h3>";
				if(data_places[i].height != "") {
					contenido += "<p class='wflitem-height'>" + data_places[i].height + "</p>";
				}
				if(data_places[i].activity.length > 0) {
					contenido += "<h4 class='wflitem-activity-title'>Actividades</h4>";
					contenido += "<ul class='wflitem-activity-list'>";
					for(var k in data_places[i].activity) {
						contenido += "<li>";
						contenido += "<img src='" + data_places[i].activity[k].icon + "' />";
						contenido += "<span>" + data_places[i].activity[k].name + "</span>";
						contenido += "</li>";
					}
					contenido += "</ul>";
				}
				if(data_places[i].apt.length > 0) {
					contenido += "<h4 class='wflitem-apt-title'>Recomendado</h4>";
					contenido += "<ul class='wflitem-apt-list'>";
					for(var l in data_places[i].apt) {
						contenido += "<li>" + data_places[i].apt[l].description + "</li>";
					}
					contenido += "</ul>";
				}
				if(data_places[i].description != "") {
					contenido += "<p class='wflitem-apt-description'>" + data_places[i].description + "</p>";
				}
				if(data_places[i].image != "" && data_places[i].image != null) {
					// cambio de imagen por rafctorizar
					contenido += "<div class='wflitem-image' style='background-image: url("+data_places[i].image+");'></div>";
					// contenido += "<div class='wflitem-image' style='background-image: url(/assets/images/rutas-cortas-1.jpg);'></div>";
				}
				contenido += "</div>";
			};
			contenido += "</div>";
			$(".wrapper-first-right-body").append(contenido);/* Una vez que la estructura con la data fue armada, lo añado al contenedor */
			waypointItems();/* Llamo a la función que me permitirá habilitar la funcionalidad de seguimiento de los marcadores en el mapa cada vez que scrolleo los atractivos */
			LoadMap(data_places); /* Llamo a la función que me permitirá cargar el mapa y los marcadores de atractivos de acuerdo a su ubicación */
		} else {
			$(".wrapper-first-right-body").hide();
		}
	}

	/* Esta función estructura y carga al contenedor la sección de ofertas */
	function loadDeals(data) {
		if(data) {
			var contenido = "";
			contenido += "<h2>¡Descubre " + data[0] + "!</h2>";
			contenido += "<div class='wrapper-first-right-deals-link' data-href='" + data[1] + "'>Ver ofertas</div>";
			$(".wrapper-first-right-deals").append(contenido);
		} else {
			$(".wrapper-first-right-deals").hide();
		}
	}

	/* Esta función estructura y carga al contenedor el popup de los datos útiles  */
	function loadUsefulData(data) {
		$("#datos-utiles").addClass("white-popup mfp-with-anim mfp-hide");
		var contenido = "";
		contenido += "<div class='wc-popup-content'>";
		contenido += "<div class='wc-popup-content-border'>";
		contenido += "<div class='wc-popup-item'>";
		contenido += "<h2><i class='fa fa-info-circle'></i>Datos útiles</h2>";
		contenido += "<button type='button' class='mfp-close'>×</button>";
		contenido += "</div>";
		if(data[0].car.length > 0 || data[0].bus.length > 0 || data[0].airplane.length > 0 || data[0].train.length > 0 || data[0].ship.length > 0) {
			contenido += "<div class='wc-popup-item'>";
			contenido += "<h3>¿Cómo ir?</h3>";
			contenido += "<div class='wc-popup-first'>";
			if(data[0].car.length > 0) {
				contenido += "<div class='wc-popup-first-item'>";
				contenido += "<div class='wc-popup-first-item-left'>";
				contenido += "<img src='/assets/images/mapa/etc/car.png' />";
				contenido += "</div>";
				contenido += "<div class='wc-popup-first-item-right'>";
				contenido += "<ul>";
				for(var i in data[0].car) {
					contenido += "<li>" + data[0].car[i].description + "</li>";
				}
				contenido += "</ul>";
				contenido += "</div>";
				contenido += "</div>";
			}
			if(data[0].bus.length > 0) {
				contenido += "<div class='wc-popup-first-item'>";
				contenido += "<div class='wc-popup-first-item-left'>";
				contenido += "<img src='/assets/images/mapa/etc/bus.png' />";
				contenido += "</div>";
				contenido += "<div class='wc-popup-first-item-right'>";
				contenido += "<ul>";
				for(var j in data[0].bus) {
					contenido += "<li>" + data[0].bus[j].description + "</li>";
				}
				contenido += "</ul>";
				contenido += "</div>";
				contenido += "</div>";
			}
			if(data[0].train.length > 0) {
				contenido += "<div class='wc-popup-first-item'>";
				contenido += "<div class='wc-popup-first-item-left'>";
				contenido += "<img src='/assets/images/mapa/etc/train.png' />";
				contenido += "</div>";
				contenido += "<div class='wc-popup-first-item-right'>";
				contenido += "<ul>";
				for(var k in data[0].train) {
					contenido += "<li>" + data[0].train[k].description + "</li>";
				}
				contenido += "</ul>";
				contenido += "</div>";
				contenido += "</div>";
			}
			if(data[0].ship.length > 0) {
				contenido += "<div class='wc-popup-first-item'>";
				contenido += "<div class='wc-popup-first-item-left'>";
				contenido += "<img src='/assets/images/mapa/etc/ship.png' />";
				contenido += "</div>";
				contenido += "<div class='wc-popup-first-item-right'>";
				contenido += "<ul>";
				for(var l in data[0].ship) {
					contenido += "<li>" + data[0].ship[l].description + "</li>";
				}
				contenido += "</ul>";
				contenido += "</div>";
				contenido += "</div>";
			}
			if(data[0].airplane.length > 0) {
				contenido += "<div class='wc-popup-first-item'>";
				contenido += "<div class='wc-popup-first-item-left'>";
				contenido += "<img src='/assets/images/mapa/etc/plane.png' />";
				contenido += "</div>";
				contenido += "<div class='wc-popup-first-item-right'>";
				contenido += "<ul>";
				for(var m in data[0].airplane) {
					contenido += "<li>" + data[0].airplane[m].description + "</li>";
				}
				contenido += "</ul>";
				contenido += "</div>";
				contenido += "</div>";
			}
			contenido += "</div>";
			contenido += "</div>";
		}
		if(data[0].maximumWeather != "" || data[0].minimumWeather != "") {
			contenido += "<div class='wc-popup-item'>";
			contenido += "<div class='wc-popup-second'>";
			contenido += "<div class='wc-popup-second-left'>";
			contenido += "<div class='wc-popup-second-left-left'>";
			contenido += "<h3>Clima</h3>";
			contenido += "</div>";
			contenido += "<div class='wc-popup-second-left-right'>";
			contenido += "<div class='wc-popup-second-left-right-icon'>";
			contenido += "<img src='/assets/images/mapa/etc/thermometer.png' />";
			contenido += "</div>";
			contenido += "<div class='wc-popup-second-left-right-text'>";
			if(data[0].maximumWeather != "") {
				contenido += "<p>" + data[0].maximumWeather + " máx.</p>";
			}
			if(data[0].minimumWeather != "") {
				contenido += "<p>" + data[0].minimumWeather + " mín.</p>";
			}
			contenido += "</div>";
			contenido += "</div>";
			contenido += "</div>";
			contenido += "</div>";
			contenido += "</div>";
		}
		contenido += "</div>";
		contenido += "</div>";
		$("#datos-utiles").html(contenido);
	}

	/* Esta es la función que nos ayudará a cargar el mapa, es por ello que recibe unicamente la data de los atractivos */
	function LoadMap(data) {
		map = L.map("wfl-map").setView([-9.875092, -74.462691], 6);/* Aquí ubicamos el contenedor y creamos el mapa, siempre es necesario indicar una coordenada al inicio, luego ya lo cambiaremos de acuerdo a los atractivos */
		L.tileLayer("https://tile.jawg.io/jawg-streets/{z}/{x}/{y}.png?access-token=V7U7oRrvposrjdIyg8bIlT3OPAr6LFrxniHQtdZ2P9RTuFKZf96V6h8ErKkia2JY", { }).addTo(map);/* Especificamos la plantilla visual a usar en el mapa */
		popup = L.popup({ offset: [0, -35] });/* Creamos la instancia del popup, el cual se muestra al dar un click en los marcadores */
		bounds = L.latLngBounds();/* Iniciamos la instancia que nos ayudara a centrar visualmente el mapa de acuerdo al total de marcadores */
		var count = 0;
      	for(var i in data) {/* Recorremos cada uno de los atractivos */
      		count++;
      		for(var j in data[i].cordinate) { /* entramos a las coordenadas de cada atractivo */
      			fontAwesomeIcon = L.ExtraMarkers.icon({/* inicializamos el marcador con su configuración personalizada */
		      		shape: "square",
		      		markerColor: "violet",
		      		prefix: "",
		      		icon: "fa-number",
		      		iconColor: "#fff",
		      		number: count.toString()
		      	});
		      	let lat_lng = [parseFloat(data[i].cordinate[j].latitude), parseFloat(data[i].cordinate[j].longitude)];/* agrupamos las coordenadas del atractivo */
		      	marker = new L.marker(lat_lng, {icon: fontAwesomeIcon}).addTo(map).on("click", onMarkerClick);/* creamos la instancia del marcador con las coordenadas, icono personalizado, agregamos al mapa y le habilitamos la funcionalidad onMarkerClick */
	      		marker.dataInfoID = "#map-section-" + count;/* añadimos atributos personalizados al marcador, el cual nos servirá para ubicar el atractivo cuando le demos un click al marcador */
	      		marker.dataInfoName = data[i].name;
	      		bounds.extend(lat_lng);/* Cada conjunto de coordenadas es agregada a esta instancia para luego centrar automaticamente todos los marcadores */
      		}
      	}
      	map.fitBounds(bounds); /* Aquí indicamos al mapa que centre la vista y el zoom teniendo en cuenta el conjunto de marcadores */
	}

	function onMarkerClick(e) {/* esta función habilitará el popup con los datos correspondientes (ubicación y nombre) */
		popup.setLatLng(e.latlng).setContent(this.dataInfoName).openOn(map);
		map.setView(e.latlng, 15);
		goToByScroll(this.dataInfoID);/* Llamamos a la función que activará el scroll top hacia el atractivo correspondiente */
	}

	function goToByScroll(id) { /* Esta función recibe el identificador del atractivo al cual scrolleará */
		var window_width = $(window).width();
		var hMenu = $(".wrapper-navbar").height();
		var hHeader = $(".wrapper-first-right-header").outerHeight();
		var hTotal = hMenu+hHeader-10;
		if(window_width<=480) {
			hTotal = hMenu+hHeader;
		}
		var position = $(id).position().top+hTotal;
		$(".wrapper-first-right").animate({ scrollTop: position }, 1000);
	}

	function waypointItems() { /* Esta función hace la transición de que el marcador te siga cada vez que scrolleas en los atractivos */
		$(".wrapper-first-right-list-item").waypoint(function(direction) {
			var v_name, v_lat, v_lng, v_lat_lng;
			if (direction === "down") {
				v_name = $(this).attr("data-name");
				v_lat = parseFloat($(this).attr("data-lat"));
				v_lng = parseFloat($(this).attr("data-lng"));
				v_lat_lng = [v_lat, v_lng];
			} else {
				var previous = $(this).prev();
				v_name = $(previous).attr("data-name");
				v_lat = parseFloat($(previous).attr("data-lat"));
				v_lng = parseFloat($(previous).attr("data-lng"));
				if(isNaN(v_lat)) {
					v_lat = parseFloat($(this).attr("data-lat"));
				}
				if(isNaN(v_lng)) {
					v_lng = parseFloat($(this).attr("data-lng"));
				}
				if (v_name === undefined || v_name === null) {
					v_name = $(this).attr("data-name");
				}
				v_lat_lng = [v_lat, v_lng];
			}
			popup.setLatLng(v_lat_lng).setContent(v_name).openOn(map);
			map.setView(v_lat_lng, 15);
		}, {
			offset: "40%",
			context: $(".wrapper-first-right")
		});
	}

	function getRegion() {
		// var pathname = window.location.pathname.split("/");
		// return pathname[pathname.length-3];
		return nombreProvincia;
	}

	function getRoute() {
		// var pathname = window.location.pathname.split("/");
		// return pathname[pathname.length-2];
		return 'camana';
	}

	function getEncodeUrlPage() {
		return encodeURIComponent(window.location.href);
	}

	function getEncodeTitlePage() {
		return encodeURIComponent(document.title);
	}

	function getUrlPage() {
		return window.location.href;
	}

	function getTitlePage() {
		return document.title;
	}

});