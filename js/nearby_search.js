$(function(){
    var DEFAULT_ZOOM = 15;
    var GOOGLE_API_KEY = "AIzaSyDbnG_q3ehXQG8Dh5vFYBsLHUGNTZ5-4rk"; 

    function initMap() {
        var position = {
			lat: 37.7805135,
			lng: -122.4037991
			};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: DEFAULT_ZOOM,
          center: position,
	  position: position,
          map: map
        });

     //	$.ajax({
//		url: "/places-info",
//		data:{
//			"lat":position.lat,
//			"lng":position.lng,
//			"type":"restaurant",
//			"radius":500
//		},
//		success: function(data){
//		      debugger;
//		},
//		fail: function(err){
//		     debugger;
//		}
//		}) 


	 var params = {
              'location': new google.maps.LatLng(position.lat, position.lng),
              'radius': 500,
              'type': 'restaurant'
         };
         service = new google.maps.places.PlacesService(map);
         service.nearbySearch(params, function(results, status) {
             if (status === google.maps.places.PlacesServiceStatus.OK) {
                 var current_infowindow;
                 _.each(results, function(place) {
                     var marker = new google.maps.Marker({
                         position: {
                             'lat': place.geometry.location.lat(),
                             'lng': place.geometry.location.lng()
                         },
                         map: map,
                         title: place.name
                     });
                     var infowindow_content = '<div id="content">' +
                                             '<h1 id="firstHeading" class="firstHeading">' + place.name + '</h1>'+
                                              '</div>';
                     var infowindow = new google.maps.InfoWindow({
                         content: infowindow_content
                     });
  	marker.addListener('click',function(){
	   if (current_infowindow){
		current_infowindow.close();
		}
	   infowindow.open(map,marker);
	   current_infowindow=infowindow;
	
	   showDetailedInfo(place);
})
});
 
   }	
});
};
	function showDetailedInfo(place){
	$('#detailed-info-wrapper').show();
	};
	initMap()
 })
