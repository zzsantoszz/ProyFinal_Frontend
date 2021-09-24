$('#displayNone').click(function (e) {
  // Resetear, por si acaso has estado jugando con la otra propiedad
  $('#hide-me').css('visibility', 'visible');

  if ($('#hide-me').is(":visible")) {
    $('#hide-me').css('display', 'none');
  } else {
    $('#hide-me').css('display', 'block');
  }
});


$(document).ready(function () {
  $('#button-ayuda').on('click', function () {
    $('#content-ayuda').toggleClass('active')
  })
})