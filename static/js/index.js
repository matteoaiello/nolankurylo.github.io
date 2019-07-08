
// Scrolling Effect
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    }

    else {
        $('nav').removeClass('black');
    }
})

$(".intro-start").click(function() {
  $("html, body").animate({ scrollTop: $("#card-1").offset().top - 100 }, 1000);
});

$(".intro-end").click(function() {
  $("html, body").animate({ scrollTop: $("#project-directory").offset().top - 80 }, 1000);
});

