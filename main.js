$(document).ready(function () {
    //opens nav bar menu
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');

    });
    //closes nav bar and goes to respective area of selection
    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    // scroll animation 
    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);     
    });

    $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);     
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    })

});