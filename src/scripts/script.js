// header
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var opacity = 0;
        if (scroll < 100) {
            opacity = scroll / 100;
            $("#p-page-header").css('background-color', 'rgba(75, 193,210,' + opacity + ')');

        }
        else {
            opacity = 1;
            $("#p-page-header").css('background-color', 'rgba(75, 193,210,' + opacity + ')');
        }
    })
});

//  slider
$(document).ready(function () {
    $('.p-page-slider').slick({ dots: true, arrows: false, infinite: true, autoplaySpeed: 1000 });
});

