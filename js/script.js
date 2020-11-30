$(function () {

//Menu open and close
$('.nav-toggle, .nav-close').click(function (e) {
    e.preventDefault();
    $('.nav').toggleClass('active');
  });

//Header fixer 
$(window).scroll(function() {
  if ($(this).scrollTop() > 100){
    $('.header').addClass('fixed');
  }else {
    $('.header').removeClass('fixed');
  }
});
});