$(document).ready(function(){


    // Bootstrap tooltip & popover
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    // Jquery nicescroll

    $("#about,#portfolio , #resume").niceScroll();

    // About Me Section
    $('.aboutIcon').click(function(){
      $('#about').fadeIn(100);
    });
    $('#colseAbout').click(function(){
      $('#about').fadeOut(100);
    });

    // Resume Section
    $('.resumeIcon').click(function(){
      $('#resume').fadeIn(100);
    });
    $('#closeResume').click(function(){
      $('#resume').fadeOut(100);
    });

    // Portfolio
    $('.portfolioIcon').click(function(){
      $('#portfolio').fadeIn(100);
    });
    $('#closePortofolio').click(function(){
      $('#portfolio').fadeOut(100);
    });

});
