'use strict';

$(document).ready(function () {
    $('.page-name').text($('.breadcrumb').children('li:nth-child(2)').text());

    // update mobile script
    $('.btn-showmenu').html('<span></span>');

    $('.btn-showmenu').on('click', function () {
        $('.btn-showmenu').toggleClass('active');
        $('.menu').slideToggle(300);
        // $('.search-toggle').removeClass('active');
        // $('.searchbox').slideUp(300);
    });

    $('.search-toggle').click(function () {
        $('.search-wrap').slideToggle(300);
    });

    $('.menu .sub').before("<div class='btn-showsub'></div>");
    $('.btn-showsub').on('click', function () {
        $(this).toggleClass('active');
        $(this).siblings('.sub').slideToggle(300);
    });

    responsive();

    $('.banner-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true,
        speed: 500,
        arrows: true,
        dots: true,
        autoplay: true
        // autoplaySpeed: 5000
    });

    $('.cert-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        arrows: true,
        dots: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }]
    });
    $('.cert-slide-2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        arrows: true,
        dots: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }]
    });
    $('.cert-slide-3').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        arrows: true,
        dots: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }]
    });
    $('.cert-slide-4').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        arrows: true,
        dots: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }]
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
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }]
    });

    $('.news-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                speed: 500,
                arrows: false
            }
        }]
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
            // $('.job-item').removeClass('active');
            // $('.job-item .content').removeClass('active');
            // $('.job-item .viewdetail').removeClass('active').text('Xem chi tiết');
            if (!$(this).hasClass('active')) {
                console.log('khong co');
                $(this).addClass('active');
                $(this).text('Thu gọn');
                $(this).parents('.job-item').addClass('active');
                $(this).parents('.job-item').find('.content').addClass('active');
            } else {
                console.log('co');
                $(this).removeClass('active');
                $(this).text('Xem chi tiết');
                $(this).parents('.job-item').removeClass('active');
                $(this).parents('.job-item').find('.content').removeClass('active');
            }
        });
    }

    // Career form
    $('.btn-apply').click(function () {
        $('.career-frame').slideToggle(300);
    });

    if ($('.btn-applyjob').length > 0) {
        $('.btn-applyjob').click(function () {
            var link = $(this).attr('rel');
            $('#popupjob iframe').attr('src', link);
            $('#popupjob').modal({ show: true });
            return false;
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

    // UPDATE SCRIPT
    $('.bt-read').attr('href', null);

    $('.bt-read').click(function () {
        $('.hidden-content').slideToggle(300);
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).text('THU GỌN');
        } else {
            $(this).text('ĐỌC CÂU CHUYỆN');
        }
    });
    // $('.bt-read').click(function() {
    //     $([document.documentElement]).animate(
    //         {
    //             scrollTop: $('.journey').offset().top - 100
    //         },
    //         500
    //     );
    // });

    $('.log-map').append('<span class="close"><span class="lnr lnr-cross"></span></span>');

    if ($('.location').length > 0 && $(window).outerWidth() < 768) {
        $('.location').removeClass('active');
        $('.log-map').removeClass('active');
    }

    $('.log-map .close').click(function () {
        $(this).parent().removeClass('active');
    });

    $('.showchat').click(function () {
        $(this).hide();
        $('.chatbox').toggle();
    });
    $('.minimize').click(function () {
        $('.chatbox').hide();
        $('.showchat').show();
    });
});

var responsive = function responsive() {
    if ($(window).outerWidth() < 1200) {
        $('header .language').insertAfter('.menu-link');
        $('header .search-toggle').html("<span class='lnr lnr-magnifier'></span>");
    } else {
        // $('header .language').insertBefore('header .search');
        // $('header .search-toggle').html("<i class='fa fa-search'></i>");
    }
};

$(window).resize(function () {
    // responsive();
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