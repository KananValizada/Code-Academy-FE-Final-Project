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
    arrows: false

});
$('.studentSay__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false

});

//counters

let counter1 = new CountUp("about-count1", 0, 260, 0, 5, {  
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
});
let counter2 = new CountUp("about-count2", 0, 152, 0, 5, {  
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
});


let waypoint1 = new Waypoint({
    element: document.getElementById('about-count1'),
    handler: function(direction) {

        if (direction == "up") {
            counter1.reset();
        } else {
            counter1.start();
        }

    },
    offset: '100%'
});
let waypoint2 = new Waypoint({
    element: document.getElementById('about-count2'),
    handler: function(direction) {

        if (direction == "up") {
            counter2.reset();
        } else {
            counter2.start();
        }

    },
    offset: '100%'
});