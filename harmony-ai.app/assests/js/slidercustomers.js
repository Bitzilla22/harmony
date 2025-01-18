document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        effect: 'fade',
        allowTouchMove: false,
        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                const bullet = document.querySelector(`.custom-pagination-bullet[data-index="${index}"]`);
                return `<div class="${className} custom-pagination-bullet" data-index="${index}">${bullet ? bullet.innerHTML : ''}</div>`;
            },
        },
        on: {
            init: function () {
                this.slides.forEach((slide, index) => {
                    slide.style.opacity = index === this.realIndex ? '1' : '0';
                });
            },
            slideChange: function () {
                this.slides.forEach((slide, index) => {
                    slide.style.opacity = index === this.realIndex ? '1' : '0';
                });
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
