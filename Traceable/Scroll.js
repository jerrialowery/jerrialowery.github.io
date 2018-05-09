$(document).ready(function(){

   var $sm = 480;
   var $md = 768;

   function resizeThis() {
      $imgH = $('.middle img').width();
      if ($(window).width() >= $sm) {
         $('.left,.right,.section').css('height', $imgH);
      } else {
         $('.left,.right,.section').css('height', 'auto');
      }
   }

   resizeThis();

   $(window).resize(function(){
      resizeThis();
   });

   $(window).scroll(function() {
      $('.section').each(function(){
         var $elementPos = $(this).offset().top;
         var $scrollPos = $(window).scrollTop();

         var $sectionH = $(this).height();
         var $h = $(window).height();
         var $sectionVert = (($h/2)-($sectionH/4));


         if (($elementPos - $sectionVert) <= $scrollPos && ($elementPos - $sectionVert) + $sectionH > $scrollPos) {
            $(this).addClass('animate');
         } else {
            $(this).removeClass('animate');
         }
      });
   });

   $('.btn-primary').click(function(){
      alert('I lied');
   });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

document.cookie = "name=Storing";
document.cookie = "name=Hello! Storing Cookies Now";

var cookieValue = "Hello"
function alertCookieValue() {
  alert("Hello! Thanks for clicking, and by the way your responses and personal data are being recorded right now.");

}

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}


function myFunction(imgs) {
// Get the expanded image
var expandImg = document.getElementById("expandedImg");
// Get the image text
var imgText = document.getElementById("imgtext");
// Use the same src in the expanded image as the image being clicked on from the grid
expandImg.src = imgs.src;
// Use the value of the alt attribute of the clickable image as text inside the expanded image
imgText.innerHTML = imgs.alt;
// Show the container element (hidden with CSS)
expandImg.parentElement.style.display = "block";
}
