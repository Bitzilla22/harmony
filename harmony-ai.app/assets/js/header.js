$(window).on('scroll', function () {
    var scrollPosition = $(this).scrollTop();
    if (scrollPosition > 100) {
        $('.announcement-bg').slideUp(300);
    } else {
        $('.announcement-bg').slideDown(300);
    }
});