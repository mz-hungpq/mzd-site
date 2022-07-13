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
            arrows: false,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 4000,
        });
    },

    //Main Page Technology Slider
    subSlider: function () {
        $('#content .content-list').slick({
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 2,
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

    init: function () {
        this.mainSlider();
        this.subSlider();
        this.scrollToTop();
        this.changeTypeNews();
        this.scrollEffect();
    }
}