$(document).ready(function () {
    MZDPage.init();
});

const MZDPage = {

    //Main Page Slider
    mainSlider: function () {
        var sliderSettings = {
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            variableWidth: true,
            nextArrow: '<button class="slide-arrow next-arrow"></button>',
            dots: true,
            centerMode: false,
        };

        $('.mzd-container #slider .slider-content').slick(sliderSettings);

        $('#slider .slider-content .slide-arrow.next-arrow').click(function () {
            $('#main .content-right .mzd-container #slider').closest('.mzd-container').addClass('full');
            sliderSettings.centerMode = true;
            sliderSettings.prevArrow = '<button class="slide-arrow prev-arrow"></button>';
            $('.mzd-container #slider .slider-content').slick('unslick');;
            $('.mzd-container.full #slider .slider-content').slick(sliderSettings);
            $('.mzd-container.full #slider .slider-content').slick("slickNext");
        });
    },

    //Welcome Slider
    mainWelcomeSlider: function () {
        $('#welcome .content-fill').slick({
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
            vertical: true,
            cssEase: 'linear',
            verticalReverse: true,
            accessibility: false,
            pauseOnFocus: false,
            pauseOnHover: false
        });
    },

    //Change Type of Item in Insight Main Page
    changeInsightList: function () {
        $('#insight-list .types .type').click(function () {

            const type = $(this).text();
            $('#insight-list .types .type').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            MZDPage.resetInsightType();

            $('#insight-list .lists .single-item').each(function () {
                if (type === '전체') {
                    $(this).addClass('appear');
                } else {
                    if ($(this).find('.item-type').text() === type) {
                        $(this).addClass('appear');
                    } else $(this).addClass('disappear');
                }
            })
        })
    },

    //Reset Insight Type
    resetInsightType: function () {
        $('#insight-list .lists .single-item').each(function () {
            $(this).removeClass('appear');
            $(this).removeClass('disappear');
        })
    },

    //Show Header Fixed on Scroll
    scrollEffect: function () {
        //Header Pin
        $(document).scroll(function () {
            if ($(window).scrollTop() > 200) {
                $('#header').addClass('fixed');
            } else {
                $('#header').removeClass('fixed');
            }
        });
        //Main brand slide
        if (document.querySelector('.slider-brand') !== null) {
            const branSlideAnimate = document.querySelector('.slider-brand').animate([
                { transform: 'translateX(-100%)' }
            ], {
                duration: 10000,
                iterations: Infinity
            });
            branSlideAnimate.pause();

            $(document).scroll(function () {
                const brandSlidePostition = $('.slider-brand').offset().top;
                const currentPosition = $(window).scrollTop();
                if (currentPosition > brandSlidePostition - 700 && currentPosition < brandSlidePostition + 300) {
                    branSlideAnimate.play();
                } else {
                    branSlideAnimate.pause();
                }
            });
        }
    },

    //Footer Page List Toggle
    toogleFooterPageList: function () {
        $('#footer .footer-bottom .page-theme .theme-list').click(function () {
            $(this).toggleClass('active');
        });
        jQuery(document).click(function(event) {
            if (!jQuery(event.target).is("#footer .page-theme .theme-list *")) {
                $('#footer .footer-bottom .page-theme .theme-list').removeClass('active');
            }
        });
    },

    //Tech Slider
    carouselTechService: function () {
        $('#techandsv_home .techandsv_container .related_slider').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
        });
    },

    init: function () {
        this.mainSlider();
        this.mainWelcomeSlider();
        this.changeInsightList();
        this.toogleFooterPageList();
        this.scrollEffect();
        this.carouselTechService();
    }
}