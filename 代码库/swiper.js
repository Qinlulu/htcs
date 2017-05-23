<div class="swiper-container">
<div class="swiper-wrapper">
<div class="swiper-slide">
<img/>
</div>
</div>
</div>

var swiper = new Swiper('.banner', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay:2000
});
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2.5,
    paginationClickable: true,
    spaceBetween: 10,
    freeMode: true
});

new IScroll(".iscroll")


$(".list li").on("tap", function () {
    swiper.slideTo($(this).index());
})

overflow: hidden;
text-overflow: ellipsis;
white-space:nowrap;


display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;




