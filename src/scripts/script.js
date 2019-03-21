// counter
var a = 0;
$(window).scroll(function () {
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                    },
                    complete: function () {
                        $this.text((this.countNum).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                    }

                });
        });
        a = 1;
    }
})
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
 //slider
    $('.p-page-slider').slick({ dots: true, arrows: false, infinite: true, autoplaySpeed: 1000 });

});


