'use strict';

$(document).ready(function () {
    $('.page-name').text($('.breadcrumb').children('li:nth-child(2)').text());

    // update mobile script
    $('.btn-showmenu').html('<span></span>');

    $('.btn-showmenu').on('click', function () {
        $('.btn-showmenu').toggleClass('active');
        $('.menu').slideToggle(300);
        $('.search-toggle').removeClass('active');
        $('.searchbox').slideUp(300);
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

    $('.news-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true
    });

    $('.vnl-slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false
    });

    $('.other-slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false
    });

    if ($('.career-page').length > 0) {
        $('.job-item .viewdetail').click(function () {
            $('.job-item').removeClass('active');
            $('.job-item .content').removeClass('active');
            $('.job-item .viewdetail').removeClass('active').text('Xem chi tiết');

            $(this).toggleClass('active');
            $(this).parents('.job-item').toggleClass('active');
            $(this).parents('.job-item').find('.content').toggleClass('active');
            if ($(this).hasClass('active')) {
                $(this).text('Thu gọn');
            } else {
                $(this).text('Xem chi tiết');
            }
        });
    }

    if ($('.contact-page').length > 0) {
        $('.location').click(function () {
            if (!$(this).hasClass('active')) {
                $('.location').removeClass('active');
                var logTarget = $(this).attr('data-target');
                $('.log-map').removeClass('active');
                // setTimeout(() => {
                $(this).addClass('active');
                document.getElementById(logTarget).classList.add('active');
                // });
            }
        });
    }
});

var responsive = function responsive() {
    if ($(window).outerWidth() < 1200) {
        $('header .language').insertAfter('.menu-link');
        $('header .search-toggle').html("<span class='lnr lnr-magnifier'></span>");
    } else {
        $('header .language').insertBefore('header .search');
        $('header .search-toggle').html("<i class='fa fa-search'></i>");
    }
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