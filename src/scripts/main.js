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

    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 500,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    // fix for CMS
    $('header .searchbutton').html("<i class='fa fa-search'></i>");

    $('body.homepage ol.breadcrumb').html(
        '<li><a href="#!">Trang chủ</a></li><li><a href="#!">Quan hệ nhà đầu tư</a></li>'
    );
    $('body.homepage .page-name').text('Quan hệ nhà đầu tư');
});

var responsive = function () {
    if ($(window).outerWidth() < 1200) {
        if ($('.Module-172').length > 0) {
            $('.search').insertAfter('.Module-172');
            $('.Module-174').insertAfter('.header-main');
        } else {
            $('.search').insertAfter('.logo-wrap');
        }
        $('.top-menu ul').insertAfter('.menu-link');
    } else {
        if ($('.Module-172').length > 0) {
            $('.Module-174').insertAfter('.Module-172');
        } else {
        }
        $('.search').appendTo('.header-top .col-right');
        $('.menu .menu-link').next('ul').appendTo('.top-menu');
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
