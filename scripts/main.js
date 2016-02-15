require(['getData'], 
  function(getData, undefined){
    'use strict';
    var w = window, d = document;

    var interval = w.setInterval(function(){ // we don't need jQuery to wait for DOM
    if(d.getElementsByTagName('div').length > 0){
      w.clearInterval(interval);
      getData.fnc.test();
    }
    }, 33);

}); // End require([] ...




