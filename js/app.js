// --------------------------------------------------
// WOW
// --------------------------------------------------
new WOW().init()
// --------------------------------------------------
// FIXED NAVBAR
// --------------------------------------------------
const navbar = document.querySelector('.static-top');
const logo = document.querySelector('.logo');

function fixedNavbar() {
  if(window.scrollY >= 100) {
    navbar.classList.add('dark-navbar')
    // logo.classList.add('logo-small')
  } else {
    navbar.classList.remove('dark-navbar')
    // logo.classList.remove('logo-small')
  }
}

window.addEventListener('scroll', fixedNavbar);
// --------------------------------------------------
// PRE LOADER
// --------------------------------------------------
$(window).on('load',function(){
  $("#page-box").fadeOut(1000), 
  $("#page-loader").delay(1000).fadeOut("slow"), 
  $("body").delay(1000).css({
    overflow: "visible"
  })
});
// --------------------------------------------------
// BACK-TO-TOP
// --------------------------------------------------
$(document).ready(function() {
  $("#back-to-top").hide();
  $(function() {
    $(window).scroll(function() {
      if($(window).scrollTop() > 60) {
        $('#back-to-top').stop().fadeIn();
      } else {
        $('#back-to-top').stop().fadeOut();
      }
    });

    $('#back-to-top').click(function() {
      $('body,html').animate({scrollTop: 0}, 800);
      return false;
    });
  });
});