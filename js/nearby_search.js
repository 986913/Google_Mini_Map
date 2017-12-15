$(function(){
    var DEFAULT_ZOOM = 15;
    var GOOGLE_API_KEY = "AIzaSyDbnG_q3ehXQG8Dh5vFYBsLHUGNTZ5-4rk"; 

    function initMap() {
        var position = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: DEFAULT_ZOOM,
          center: position,
	  positionn: position,
          map: map
        });

   	$.ajax({
		url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
		data:{
			"location":position.lat + "," + position.lng,
			"type":"restaurant",
			"key":GOOGLE_API_KEY,
			"radius":500
		},
		success: function(){
		      debugger;
		},
		failure: function(){
		     debugger;
		}
		})    
   }
	initMap()
 })
