$(".header__tutorials-btn").click(() => {
    $(".header__tutorials").hide()
})
let navbarList = $(".header__navbar-menu-list")
navbarList.on("mouseover", (e) => {
    console.log(e.target)
    $(e.target).children("ul").show()
})
navbarList.on("mouseleave", (e) => {
    console.log(e.target)
    $(".header__navbar-menu-subList").hide()
})

navbarList.on("click", (e) => {
    $(".header__navbar-menu-subList").removeClass("block")

    $(e.target).children("ul").addClass("block")
})


$('.header__slider').slick({

    infinite: true,
    speed: 500,
    fade: true,
    arrows: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
});

// slick
$(".slick-arrow").hide()
$(".header__slider").on("mouseover", () => {
    $(".slick-arrow").show(100)
})
$(".header__slider").on("mouseleave", () => {
    $(".slick-arrow").hide(100)
})

// POPULAR CATEGORIES SECT SLIDER
$('.popularCategories__tabs').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
});


$('.tabs-item-slide').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false
    
});
$('.studentSay__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:false
    
});