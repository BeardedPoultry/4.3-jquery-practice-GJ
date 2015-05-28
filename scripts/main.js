(function(){
  'use strict';

//  examples of variables
//  var a;
//  var apple;

  var $thing = 'thing';
  function app(beers) {
    logBeers(beers);
  }

  $(document).ready(function(){
    $('body').prepend(JST['application']());
  });

  $.getJSON('http://localhost:9000/beers.json').then(function(data){

    function logBeers(beers) {
      console.log();
    }

    function renderContainer(){
      var $body = $('body');
      console.log();
  //  $('body').prepend(JST.application);
    }
  });

})();
