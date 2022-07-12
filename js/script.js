$(document).ready(function () {
    MZDPage.init();
});

const MZDPage = {
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
    scrollToTop: function () {
        $('#footer .page-on-top').click(function () {
            $('html,body').animate({ scrollTop: 0 }, 'slow');
        })
    },
    init: function () {
        this.mainSlider();
        this.subSlider();
        this.scrollToTop();
    }
}