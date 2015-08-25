var myCenter = new google.maps.LatLng(55.668100, 12.556196),
		map,
		markers = {},
		markersFiltered = {},
		previousMarkerFiltered = null,
		previousMarker = null;
	
	var styles1 = [ { featureType: "water", elementType: "geometry.fill", stylers: [ { color: "#373831" } ] },{ featureType: "road.highway", elementType: "geometry.fill", stylers: [ { color: "#484b42" } ] },{ featureType: "road.highway", elementType: "geometry.stroke", stylers: [ { color: "#797d6f" } ] },{ featureType: "landscape.man_made", elementType: "geometry.fill", stylers: [ { color: "#2b2c26" } ] },{ featureType: "road.local", elementType: "geometry.fill", stylers: [ { color: "#1f211c" } ] },{ featureType: "road.local", elementType: "geometry.stroke", stylers: [ { color: "#363730" } ] },{ featureType: "road.arterial", elementType: "geometry.fill", stylers: [ { color: "#1b1c19" } ] },{ featureType: "road.arterial", elementType: "geometry.stroke", stylers: [ { color: "#383933" } ] },{ featureType: "road.arterial", elementType: "labels.text.fill", stylers: [ { color: "#9a9e92" } ] },{ featureType: "road.arterial", elementType: "labels.text.stroke", stylers: [ { color: "#191a17" } ] },{ featureType: "water", elementType: "labels.text.fill", stylers: [ { color: "#838979" } ] },{ featureType: "water", elementType: "labels.text.stroke", stylers: [ { color: "#242621" } ] },{ featureType: "transit", elementType: "geometry.stroke", stylers: [ { color: "#3d4038" } ] },{ featureType: "transit", elementType: "geometry.fill", stylers: [ { color: "#3d4038" } ] },{ featureType: "poi", elementType: "geometry.fill", stylers: [ { color: "#31332c" } ] },{ featureType: "landscape.natural", elementType: "geometry.fill", stylers: [ { color: "#31332c" } ] },{ featureType: "road.local", elementType: "labels.text.fill", stylers: [ { color: "#808080" } ] },{ featureType: "road.local", elementType: "labels.text.stroke", stylers: [ { color: "#191a17" } ] },{ featureType: "road.highway", elementType: "labels.text.fill", stylers: [ { color: "#9da196" } ] },{ featureType: "road.highway", elementType: "labels.text.stroke", stylers: [ { color: "#2d2e29" } ] },{ featureType: "road.highway", elementType: "labels.icon", stylers: [ { "invert_lightness": true }, { lightness: -26 }, { saturation: -94 }, { gamma: 1.18 } ] },{ featureType: "transit.station", elementType: "labels.icon", stylers: [ { saturation: -95 }, { lightness: -27 }, { gamma: 0.89 } ] },{ featureType: "transit", elementType: "labels.text.fill", stylers: [ { color: "#acafa4" } ] },{ featureType: "transit", elementType: "labels.text.stroke", stylers: [ { color: "#22231f" } ] },{ featureType: "poi", elementType: "labels.text.fill", stylers: [ { color: "#8c9081" } ] },{ featureType: "poi", elementType: "labels.text.stroke", stylers: [ { color: "#282a24" } ] },{ featureType: "poi", elementType: "labels.icon", stylers: [ { gamma: 0.99 }, { saturation: -100 }, { lightness: -69 } ] },{ featureType: "administrative", elementType: "labels.text.fill", stylers: [ { color: "#686c5f" } ] },{ featureType: "administrative", elementType: "labels.text.stroke", stylers: [ { color: "#21221d" } ] } ];
	
	
 function initialize(mapId, mapStyle) {
	   
	var styledMap = new google.maps.StyledMapType(mapStyle, { name: "Styled Map" });    
	var mapProp = {
		center: myCenter,
		zoom: 15,
		minZoom: 7,
		draggable: false,
		panControl: true,
		streetViewControl: false,
		scrollwheel: false,
		mapTypeControl: false,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		}
	};
	
	map = new google.maps.Map(document.getElementById(mapId), mapProp);
	
	google.maps.event.addDomListener(window, 'resize', function() {
		map.setCenter(myCenter);
	});
	
	/*
	var marker = new google.maps.Marker({
		position: myCenter,
		icon: 'images/eb-marker.png'
		//icon: '/images/marker.png'
	});
	

	marker.setMap(map);
	
	var html = '<div class="infobox"><div class="infos">'
	html += '<div class="atitle"><strong>E-Bureauet ApS</strong></div>';
	html += '<div class="asubtitle">Nørregade 7B, 1 sal, 1165<br />København K. — Get direction</div>';
	html += '<div class="atext"><p>+45 29 90 44 33<br /><a href="mailto:kontakt@e-bureauet.dk">kontakt@e-bureauet.dk</a></p></div>';
	html += '</div></div>'; 
	*/
	
	/*
	var infobox = new InfoBox({
		content: html,
		disableAutoPan: false,
		maxWidth: 150,
		pixelOffset: new google.maps.Size(-75, -230),
		zIndex: null,
		boxStyle: {
			width: "340px"
		},
		closeBoxMargin: "0 0 0 0",
		//closeBoxURL: "/images/close-infobox.png",
		closeBoxURL: "images/close-infobox.jpg",
		infoBoxClearance: new google.maps.Size(1, 1)
	});
	*/
	
	/*
	var marker = new google.maps.Marker({
	 map: theMap,
	 draggable: true,
	 position: new google.maps.LatLng(49.47216, -123.76307),
	 visible: true
	});
	*/
		
	/*
	var myOptions = {
		content: html,
		disableAutoPan: false,
		maxWidth: 150,
		pixelOffset: new google.maps.Size(-125, -195),
		zIndex: null,
		boxStyle: {
			width: "250px"
		},
		closeBoxMargin: "0 0 0 0",
		//closeBoxURL: "/images/close-infobox.png",
		//closeBoxURL: "images/close-infobox.jpg",
		infoBoxClearance: new google.maps.Size(1, 1)
	};
	
	var ib = new InfoBox(myOptions);
	ib.open(map, marker);
	
   
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');
	*/
}


google.maps.event.addDomListener(window, 'load', function(){
	initialize("gmap", styles1);
});
	