$(document).ready(function() {
    // 轮播图
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            bulletElement : 'li',
            clickable :true,
        },
        autoplay: {
            disableOnInteraction: false,
        },        
        speed: 2000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })

    // 给主导航栏nav绑定隐藏盒子操作
    $(".header-nav li").hover(function() {
        console.log($(this).siblings("div"));
        $(this).children("div").stop(true).slideToggle(500);
    })
    
    // 隐藏盒子tab栏操作
    $(".tab_list ul li").click(function() {
        $(this).addClass("current").siblings().removeClass("current");
        var index = $(this).index();
        $(".tab_content .item").eq(index).show().siblings().hide();

    })
    
})