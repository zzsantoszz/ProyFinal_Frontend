/*$('#displayNone').click(function (e) {
  // Resetear, por si acaso has estado jugando con la otra propiedad
  $('#hide-me').css('visibility', 'visible');

  if ($('#hide-me').is(":visible")) {
    $('#hide-me').css('display', 'none');
  } else {
    $('#hide-me').css('display', 'block');
  }
});*/

$(document).ready(main);
var contador = 1;
function main(){
  $('#displayNone').click(function(){
      //$('nav').toogle();

    if(contador == 1){
      $('#hide-me').animate({
        left: '0'
      });
      contador = 0;
    }else{
      contador = 1;
      $('#hide-me').animate({
        left: '-100%'
      });
    }
  });
};


$(document).ready(function () {
  $('#button-ayuda').on('click', function () {
    $('#content-ayuda').toggleClass('active')
  })
});