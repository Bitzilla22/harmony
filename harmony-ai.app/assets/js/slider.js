document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        effect: 'fade',
        loop: true,
        speed: 100,
        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return `<div class="${className} custom-pagination-bullet" data-index="${index}"></div>`;
            },
        },
        on: {
            slideChange: function () {
                document.querySelectorAll('.custom-pagination-bullet').forEach((bullet, index) => {
                    bullet.classList.toggle('active', index === swiper.realIndex);
                });
            },
        },
    });
    document.querySelectorAll('.custom-pagination-bullet').forEach(bullet => {
        bullet.addEventListener('click', function () {
            swiper.slideTo(Number(this.getAttribute('data-index')));
        });
    });
});
