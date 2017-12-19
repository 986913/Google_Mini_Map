$(function(){
    var DEFAULT_ZOOM = 15;
    var GOOGLE_API_KEY = "AIzaSyDbnG_q3ehXQG8Dh5vFYBsLHUGNTZ5-4rk"; 

    function initMap() {
        var position = {
			lat: -25.363,
			lng: 131.044
			};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: DEFAULT_ZOOM,
          center: position,
	  position: position,
          map: map
        });
	 var marker = new google.maps.Marker({
          position: position,
          map: map
        });

     	$.ajax({
		url: "/places-info",
		data:{
			"lat":position.lat
			"lng": position.lng,
			"type":"restaurant",
			"radius":500
		},
		success: function(data){
		      debugger;
		},
		fail: function(err){
		     debugger;
		}
		})    
   }
	initMap()
 })
