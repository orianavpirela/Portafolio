//Símbolo de Carga
window.onload = function(){
	var contenedor = document.getElementById('contenedor_loader');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}

//Smooth Scroll
$(document).ready(function() {
  $("a").on('click', function(event) {

    if (this.hash !=="") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function() {

        window.location.hash = hash;
      });
    }
  });
});

//Slide Animation
$(document).ready(function() {
 $(window).scroll(function() {
  $(".slideanim").each(function() {
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
})

//Back to Top
$(function () {
  var offset = 300,
    duration = 500,
    top_section = $('.to-top'),
    toTopButton = $('a.back-to-top');
  
  $(window).scroll(function () {
    if( $(this).scrollTop() > offset ) {
      $(top_section).fadeIn(duration);
    } 
    else {
      $(top_section).fadeOut(duration);
    }});
  
  $(toTopButton).click(function(e) {
    e.preventDefault();
    $('html, body').animate( {
      scrollTop: 0 }, 700);
  });
});

//Navbar Change Color On Scrolling
$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 500) {
      $(".principal").css("background","#007bff");
    }
    else {
      $(".principal").css("background","transparent");   
    }
  })
})

//Tooltip
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

//Fecha Actual
var today = new Date();

var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();

if (day < 10) {
  day = '0' + day
}

if (month < 10) {
  month = '0' + month
}

var out = document.getElementById("output");

out.innerHTML = year;