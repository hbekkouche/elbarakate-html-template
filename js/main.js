/*
 * Title:   The Birck Architechture & Construction HTML Template
 * Author:  QTC Media
 */

/* --------------------------------------------------------
 [Table of contents]

 1. mobileMenu
 2. childMobileMenu
 3. backToTop
 4. revolutionSlider
 5. slickSlider
 6. countToNumber
 7. setWidthBorder
 8. animatedSkills
 9. imagesLightBox
 10. initMap
 11. setHeightGroup
 12. priceFilter
 13. raTing
 14. qtyProduct
 15. showContentFaq
 16. countDown

 [End table of contents]
 ----------------------------------------------------------------------- */

"use strict"; // Start of use strict

function mobileMenu() {
    if ($('.toggle-icon a').length) {
        $('.toggle-icon a').on('click', function () {
            $('.mobile-menu').toggle(0, 'linear');
            $('.toggle-icon a span').toggleClass('fa-bars fa-times');
            return false;
        });
    }
}

function childMobileMenu() {
    if ($('.nav-holder').length) {
        $('.nav-holder li.has-submenu').children('a').append(function () {
            return '<button class="dropdown-expander"><span class="fa fa-chevron-down"></span></button>';
        });

        $('.nav-holder .dropdown-expander').on('click', function () {
            if($(this).parent().parent().hasClass('active')) {
                $(this).parent().parent().children('.submenu').slideToggle();
                $(this).find('span').toggleClass('fa-chevron-down fa-chevron-up');
                $(this).parent('a').parent('li').toggleClass('active');
            }
            else {
                $('.nav-holder li.has-submenu .submenu').slideUp();
                $('.nav-holder li.has-submenu').removeClass('active');
                $('.nav-holder li.has-submenu .dropdown-expander').find('span').removeClass('fa-chevron-up');
                $('.nav-holder li.has-submenu .dropdown-expander').find('span').addClass('fa-chevron-down');
                $(this).parent().parent().addClass('active');
                $(this).find('span').removeClass('fa-chevron-down');
                $(this).find('span').addClass('fa-chevron-up');
                $(this).parent().parent().children('.submenu').slideDown();
            }
            return false;
        });
    }
}

function backToTop() {
    if ($('.brick-backtotop').length) {
        var scrollTrigger = 700,
            backTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.brick-backtotop').addClass('show-backtotop');
                } else {
                    $('.brick-backtotop').removeClass('show-backtotop');
                }
            };
        $(window).on('scroll', function () {
            backTop();
        });
    }
}

function revolutionSlider() {
    if($('.rev_slider_wrapper #slider_home_one').length) {
        jQuery("#slider_home_one").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on"
            },
            responsiveLevels: [1920, 1203, 975, 463],
            gridwidth: [1200, 980],
            gridheight: [741, 641, 541, 441]
        });
    }

    if($('.rev_slider_wrapper #slider_home_two').length) {
        jQuery("#slider_home_two").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on"
            },
            responsiveLevels: [1920, 1203, 975, 463],
            gridwidth: [1200, 980],
            gridheight: [633, 533, 433, 433]
        });
    }

    if($('.rev_slider_wrapper #slider_home_three').length) {
        jQuery("#slider_home_three").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on"
            },
            responsiveLevels: [1920, 1203, 975, 751, 463],
            gridwidth: [1200, 980],
            gridheight: [741, 641, 641, 541, 541],
            minHeight: 300
        });
    }

    if($('.rev_slider_wrapper #slider_home_four').length) {
        jQuery("#slider_home_four").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on"
            },
            responsiveLevels: [1920, 1203, 975, 463],
            gridwidth: [1200, 980],
            gridheight: [800, 700, 600, 500]
        });
    }

    if($('.rev_slider_wrapper #slider_home_five').length) {
        jQuery("#slider_home_five").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on"
            },
            responsiveLevels: [1920, 1203, 975, 751, 463],
            gridwidth: [1200, 980],
            gridheight: [842, 742, 642, 542, 442]
        });
    }

    if($('.rev_slider_wrapper #slider_home_six').length) {
        jQuery("#slider_home_six").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on"
            },
            responsiveLevels: [1920, 1203, 975, 463],
            gridwidth: [1200, 980],
            gridheight: [741, 641, 541, 441]
        });
    }
}

function slickSlider() {
    if($('.slick-our-works').length) {
        $('.slick-our-works').slick({
            dots: false,
            infinite: false,
            variableWidth: false,
            arrows: false,
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 1220,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        var filtered = false;
        $('#our_works .button-filter').on('click', function(){
            var filtername = $(this).attr('id');
            if (filtered === false) {
                $('.slick-our-works').slick('slickUnfilter');
                $('.slick-our-works').slick('slickFilter','.filter-' + filtername);
                $('#our_works .button-filter').attr('class','button-filter brick-hover-child-background-yellow');
                $(this).attr('class','active button-filter brick-hover-child-background-yellow');
                return false;
            } else {
                $('.slick-our-works').slick('slickUnfilter');
                $('.slick-our-works').slick('slickFilter','.filter-' + filtername);
                $('.slick-our-works').slickGoTo(0);
                $('#our_works .button-filter').attr('class','button-filter brick-hover-child-background-yellow');
                $(this).attr('class','active button-filter brick-hover-child-background-yellow');
                filtered = false;
                return false;
            }
        });
    }

    if($('.slick-clients-say').length) {
        $('.slick-clients-say').slick({
            dots: false,
            infinite: true,
            variableWidth: false,
            arrows: false,
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    if($('.slick-clients-say-v2').length) {
        $('.slick-clients-say-v2').slick({
            dots: true,
            infinite: true,
            centerMode: true,
            variableWidth: false,
            arrows: false,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }

    if($('.slick-portfolio-v2').length) {
        $('.slick-portfolio-v2').slick({
            dots: false,
            infinite: false,
            variableWidth: false,
            arrows: false,
            autoplay: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5
                    }
                },
                {
                    breakpoint: 1220,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        var filtered = false;
        $('#portfolio_v2 .button-filter').on('click', function(){
            var filtername = $(this).attr('id');
            if (filtered === false) {
                $('.slick-portfolio-v2').slick('slickUnfilter');
                $('.slick-portfolio-v2').slick('slickFilter','.filter-' + filtername);
                $('#portfolio_v2 .button-filter').attr('class','button-filter brick-hover-child-background-yellow');
                $(this).attr('class','active button-filter brick-hover-child-background-yellow');
                return false;
            } else {
                $('.slick-portfolio-v2').slick('slickUnfilter');
                $('.slick-portfolio-v2').slick('slickFilter','.filter-' + filtername);
                $('.slick-portfolio-v2').slickGoTo(0);
                $('#portfolio_v2 .button-filter').attr('class','button-filter brick-hover-child-background-yellow');
                $(this).attr('class','active button-filter brick-hover-child-background-yellow');
                filtered = false;
                return false;
            }
        });
    }

    if($('.slick-big-images').length) {
        $('.slick-big-images').slick({
            dots: false,
            variableWidth: false,
            arrows: false,
            fade: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slick-thumbnail-images'
        });
    }

    if($('.slick-thumbnail-images').length) {
        $('.slick-thumbnail-images').slick({
            dots: false,
            variableWidth: false,
            arrows: false,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slick-big-images',
            focusOnSelect: true
        });
    }
}

function countToNumber() {
    if($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }
}

function setWidthBorder() {
    if($('.set-width-border').length) {
        var w = $('.set-width-border').innerWidth();
        $('.set-width-border .shap-border-top').css('border-left', w + 'px solid transparent');
        $('.set-width-border .shap-border-bottom').css('border-right', w + 'px solid transparent');
        $(window).resize(function() {
            var w = $('.set-width-border').innerWidth();
            $('.set-width-border .shap-border-top').css('border-left', w + 'px solid transparent');
            $('.set-width-border .shap-border-bottom').css('border-right', w + 'px solid transparent');
        });
    }
}

function animatedSkills() {
    if($('.our-skills').length) {
        $('.our-skills').waypoint(function() {
                $('.skill-bar').each(function() {
                    $(this).find('.count-bar').animate({
                        width:$(this).attr('data-percent')
                    },2000);

                    $(this).find('.count').animate({
                        left:$(this).attr('data-percent')
                    },2000);
                });
            },
            {
                offset: '35%'
            });
    }

    if($('.portfolio-detail').length) {
        $('.portfolio-detail').waypoint(function() {
                $('.building-house .count-bar').animate({
                    width:$('.building-house-bar').attr('data-percent')
                },3000);

                $('.building-house .count').animate({
                    left:$('.building-house-bar').attr('data-percent')
                },3000);
            },
            {
                offset: '35%'
            });
    }

    if($('.maintenance').length) {
        $('.maintenance').waypoint(function() {
                $('.maintenance-bar .count-bar').animate({
                    width:$('.maintenance-bar').attr('data-percent')
                },3000);
            },
            {
                offset: '35%'
            });
    }
}

function imagesLightBox() {
    if($('#project_images_lightbox').length) {
        $('#project_images_lightbox').lightGallery();
    }
}

function initMap() {
    if ($('.google-map').length) {
        var locations = [
            ['Haviva Holcomb, P.O. Box 642 3450 In <br> Isle of Palms New York 03828', 40.712784, -74.005941, 1]
        ];

        var map = new google.maps.Map(document.getElementById('gmap_contact'), {
            zoom: 16,
            center: new google.maps.LatLng(40.714700, -74.005901),
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations.length; i++) {
            var iconPath = new google.maps.MarkerImage('images/dot-map.png');
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                icon: iconPath
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    };
}

function setHeightGroup() {
    if($('.set-min-height-text').length) {
        $('.set-min-height-text').each(function() {
            if($(window).width() > 479) {
                var minHeight = $(this).find('.basic-height').first().innerHeight();
                $(this).find('.basic-height').each(function() {
                    if($(this).innerHeight() > minHeight) {
                        minHeight = $(this).innerHeight();
                    }
                });
                $(this).find('.set-height').css('min-height', minHeight);
            }
            else {
                $(this).find('.set-height').css('min-height', 'auto');
            }
        });

        $(window).resize(function() {
            setHeightGroup();
        });
    }
}

function priceFilter() {
    if ($('#price_filter').length) {
        $("#price_filter").slider({
            range: true,
            min: 150,
            max: 950,
            values: [0, 550],
            slide: function (event, ui) {
                $("#max").val("$" + ui.values[ 1 ]);
            }
        });
        $("#min").val("$" + $("#price_filter").slider("values", 0));
        $("#max").val("$" + $("#price_filter").slider("values", 1));
    }
}

function raTing() {
    if ($('#rateYo').length) {
        $("#rateYo").rateYo({
            rating: 3,
            halfStar: true
        });
    }
}

function qtyProduct() {
    if($('.box-qty').length) {
        $('.box-qty .qty-plus').on('click', function() {
            var $button = $(this);
            var intValue = $button.parent().find('.qty-number').val();
            $button.parent().find('.qty-number').val(parseInt(intValue, 10) + 1);
            return false;
        });

        $('.box-qty .qty-minus').on('click', function() {
            var $button = $(this);
            var intValue = $button.parent().find('.qty-number').val();
            if (parseInt(intValue, 10) > 1) {
                $button.parent().find('.qty-number').val(parseInt(intValue, 10) - 1);
            }
            return false;
        });

        $('.qty-number').on('blur', function () {
            var $button = $(this);
            if ($button.parent().find('.qty-number').val() === "" || parseInt($button.parent().find('.qty-number').val(), 10) === 0) {
                $button.parent().find('.qty-number').val("1");
            }
        });
        $('.qty-number').on('keypress', function (evt) {
            var charCode = (evt.which) ? evt.which : event.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57))
                return false;
            return true;
        });
    }
}

function showContentFaq() {
    if ($('.holder-our-faq').length) {
        $('.holder-our-faq li.title').children('a').append(function () {
            return '<button class="dropdown-expander"><span class="fa fa-plus"></span></button>';
        });

        $('.holder-our-faq li.title').on('click', function () {
            if($(this).hasClass('active')) {
                $(this).children('.content').slideToggle();
                $(this).find('span').toggleClass('fa-plus fa-minus');
                $(this).toggleClass('active');
            }
            else {
                $('.holder-our-faq li.title .content').slideUp();
                $('.holder-our-faq li.title').removeClass('active');
                $('.holder-our-faq li.title .dropdown-expander').find('span').removeClass('fa-minus');
                $('.holder-our-faq li.title .dropdown-expander').find('span').addClass('fa-plus');
                $(this).addClass('active');
                $(this).find('span').removeClass('fa-plus');
                $(this).find('span').addClass('fa-minus');
                $(this).children('.content').slideDown();
            }
            return false;
        });
    }
}

function countDown() {
    if($('.count-down').length) {
        $('.count-down').countdown({
            date: '2018-04-24',
            offset: -8
        });
    }
}

// instance of fuction while Document ready event
jQuery(document).on('ready', function () {
    (function ($) {
        mobileMenu();
        childMobileMenu();
        revolutionSlider();
        slickSlider();
        countToNumber();
        animatedSkills();
        imagesLightBox();
        priceFilter();
        raTing();
        qtyProduct();
        showContentFaq();
        countDown();
    })(jQuery);
});
// instance of fuction while Window Scroll event
jQuery(window).on('scroll', function () {
    (function ($) {
        backToTop();
    })(jQuery);
});
// instance of fuction while Window Load event
jQuery(window).on('load', function () {
    (function ($) {
        setWidthBorder();
        setHeightGroup();
    })(jQuery);
});

