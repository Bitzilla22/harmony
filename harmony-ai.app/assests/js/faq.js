$('.faq-title ').click(function (event) {
    $(this).toggleClass('active').next().slideToggle(230);
    $( this ).find('.block-minus-plus').toggleClass('active');
});