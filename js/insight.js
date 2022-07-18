$(document).ready(function () {
    MZDPage.init();
});

const MZDInsight = {

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

    

    init: function () {
        this.changeTypeNews();
    }
}