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

    //Main Page Brand Slider
    brandSlider: function () {
        $('#brand .slider-brand').slick({
            infinite: true,
            speed: 2000,
            arrows: false,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
        });
    },

    //Scroll to Top
    scrollToTop: function () {
        $('#footer .page-on-top').click(function () {
            $('html,body').animate({ scrollTop: 0 }, 'slow');
        })
    },

    //Change Type of News in News Page
    changeTypeNews: function () {
        $('#category .type').click(function () {
            const type = $(this).text();
            $('#category .type').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            MZDPage.resetNewsType();

            $('#news-list .single-news').each(function () {
                if (type === '전체') {
                    $(this).addClass('appear');
                } else {
                    if ($(this).find('.news-type').text() === type) {
                        $(this).addClass('appear');
                    } else $(this).addClass('disappear');
                }
            })
        })
    },

    //Reset News Type
    resetNewsType: function () {
        $('#news-list .single-news').each(function () {
            $(this).removeClass('appear');
            $(this).removeClass('disappear');
        })
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
        $(document).scroll(function () {
            if ($(window).scrollTop() > 200) {
                $('#header').addClass('fixed');
            } else {
                $('#header').removeClass('fixed');
            }
        })
    },

    //Footer Page List Toggle
    toogleFooterPageList: function () {
        $('#footer .footer-bottom .page-theme .theme-list').click(function () {
            $(this).toggleClass('active');
        })
    },

    init: function () {
        this.mainSlider();
        this.brandSlider();
        this.scrollToTop();
        this.changeTypeNews();
        this.changeInsightList();
        this.toogleFooterPageList();
        this.scrollEffect();
    }
}