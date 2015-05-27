(function(){
  'use strict';

  $(document).ready(function(){
    $('body').prepend(JST['application']());
  });

  $.getJSON('http://localhost:9000/beers.json').then(function(data){

    function logBeers(beers) {
      console.log();
    }

  });

})();
