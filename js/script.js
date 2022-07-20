$(document).ready(function () {
    MZDPage.init();
});

const MZDPage = {

    //Main Page Slider
    mainSlider: function () {
        $('#slider .slider-content').slick({
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 4000,
            prevArrow: '<button class="slide-arrow prev-arrow"></button>',
            nextArrow: '<button class="slide-arrow next-arrow"></button>',
            dots: true
        });
    },

    //Main Page Brand Slider
    brandSlider: function () {
        $('#brand .slider-brand').slick({
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 4,
            arrows: false,
            variableWidth: true,
        })
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

    //Show Header Fixed on Scroll
    scrollEffect: function () {
        $(document).scroll(function () {
            if ($(window).scrollTop() > 200) {
                $('#header').addClass('fixed');
                $('#slider').addClass('fixed');
                $('#insight-header').addClass('fixed');
            } else {
                $('#header').removeClass('fixed');
                $('#slider').removeClass('fixed');
                $('#insight-header').removeClass('fixed');
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
        this.toogleFooterPageList();
        // this.scrollEffect();
    }
}