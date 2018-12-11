// Carousel
var carousels = bulmaCarousel.attach(); // carousels now contains an array of all Carousel instances

// Primary
$.simpleWeather({
    location: 98105,
    success: function(weather) {
       
      $('#primary .image img').attr( 'src', weather.image  );
      $('#primary .city').text(weather.city);
      $('#primary .temp').text(weather.temp);

    }, 
    error: function(error) {
      console.log('Go outside!');
    }
 });

//  Secondary
$.simpleWeather({
  location: 'Honolulu, Hi',
  success: function(weather) {
     
    $('#secondary .image img').attr( 'src', weather.image  );
    $('#secondary .city').text(weather.city);
    $('#secondary .temp').text(weather.temp);

  }, 
  error: function(error) {
    console.log('Go outside!');
  }
});

// Geolocation
// Geolocation Check
if ( 'geolocation' in navigator ) {
  
  $('#geolocation').show();
  
} else {
  
  $('#geolocation *').hide();
  $('#geolocation').html('<p>Not Available</p>');
 
}

// Get Weather

 
  navigator.geolocation.getCurrentPosition(function(position) {
   
   // Check lat/long coordinates
   var lat = position.coords.latitude;
   var long = position.coords.longitude;
   var location = lat + ',' + long;
    
    // Define Get Weather Function

  $.simpleWeather({

    location: location,
    unit: 'f',
    success: function(weather) {
      
      // Entire weather object
      // console.log(weather);
      
      // Display Data
      $('#geolocation .image img').attr( 'src', weather.image  );
      $('#geolocation .city').text(weather.city);
      $('#geolocation .temp').text(weather.temp);

    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look Outside.');
    }

  });

});


