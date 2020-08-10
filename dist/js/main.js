'use strict';

$(document).ready(function () {
    $('.page-name').text($('.breadcrumb').children('li:nth-child(2)').text());

    // update mobile script
    $('.btn-showmenu').on('click', function () {
        $('.btn-showmenu').toggleClass('active');
        $('.menu').slideToggle(200);
        $('.search-toggle').removeClass('active');
        $('.searchbox').slideUp(200);
    });

    $('.menu .has-sub').append("<div class='btn-showsub'></div>");
    $('.sidebar .has-sub').append("<div class='btn-showsub'></div>");

    $('.btn-showsub').click(function () {
        $(this).toggleClass('active');
        $(this).prev().slideToggle(200);
    });

    $('.search-toggle').click(function () {
        $(this).toggleClass('active');
        $('.searchbox').slideToggle(200);
        $('.btn-showmenu').removeClass('active');
        $('.menu').slideUp(200);
    });

    responsive();

    // $('.banner').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     fade: true,
    //     speed: 500,
    //     arrows: true,
    //     dots: true,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    // });

    $('.cert-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        arrows: true,
        dots: false
    });
    $('.cert-slide-2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        arrows: true,
        dots: false
    });
    $('.cert-slide-3').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        arrows: true,
        dots: false
    });

    $('.history-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.history-nav',
        arrows: false,
        dots: false,
        infinite: false
    });
    $('.history-nav').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.history-content',
        focusOnSelect: true,
        arrows: true,
        dots: false,
        infinite: false
    });
});

var responsive = function responsive() {
    // if ($(window).outerWidth() < 1200) {
    //     if ($('.Module-172').length > 0) {
    //         $('.search').insertAfter('.Module-172');
    //         $('.Module-174').insertAfter('.header-main');
    //     } else {
    //         $('.search').insertAfter('.logo-wrap');
    //     }
    //     $('.top-menu ul').insertAfter('.menu-link');
    // } else {
    //     if ($('.Module-172').length > 0) {
    //         $('.Module-174').insertAfter('.Module-172');
    //     } else {
    //     }
    //     $('.search').appendTo('.header-top .col-right');
    //     $('.menu .menu-link').next('ul').appendTo('.top-menu');
    // }
};

$(window).resize(function () {
    responsive();
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        //clearHeader, not clearheader - caps H
        $('header').addClass('active');
    } else {
        $('header').removeClass('active');
    }
});