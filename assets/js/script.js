$(window).load(function() {
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

    //ABOUT SECT counters

    let aboutCounter1 = new CountUp("about-count1", 0, 260, 0, 5, {  
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
    });
    let aboutCounter2 = new CountUp("about-count2", 0, 152, 0, 5, {  
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
    });
    let waypoint1 = new Waypoint({
        element: document.getElementById('about-count'),
        handler: function(direction) {
            aboutCounter1.start();
            aboutCounter2.start();
        },
        offset: '100%'
    });
    //START COUNTER SECT
    let Counter1 = new CountUp("counter1", 0, 1800, 0, 5, {  
        useEasing: true,
        useGrouping: true,
        separator: '',
        decimal: '.',
    });
    let Counter2 = new CountUp("counter2", 0, 70, 0, 5, {  
        useEasing: true,
        useGrouping: true,
        separator: '',
        decimal: '.',
    });
    let Counter3 = new CountUp("counter3", 0, 700, 0, 5, {  
        useEasing: true,
        useGrouping: true,
        separator: '',
        decimal: '.',
    });
    let Counter4 = new CountUp("counter4", 0, 1200, 0, 5, {  
        useEasing: true,
        useGrouping: true,
        separator: '',
        decimal: '.',
    });
    let waypoint2 = new Waypoint({
        element: document.getElementById('counter'),
        handler: function(direction) {
            Counter1.start();
            Counter2.start();
            Counter3.start();
            Counter4.start();
        },
        offset: '70%'
    });
    //END COUNTER SECT
    $('.ourClient__slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,

    });
    $(".slick-slide").css("outline", "none")
        // Fixed
    let waypoint3 = new Waypoint({
        element: document.getElementById('header__contact'),
        handler: function(direction) {
            console.log(direction)
            if (direction == "down") {
                $(".header__navbarWrapper").css({
                    "position": "fixed",
                    "z-index": "999",
                    "top": "0",
                    "width": "100%"
                })
            } else {
                $(".header__navbarWrapper").css({
                    "position": "static",
                })

            }
        },
        // offset: '-30%'
    });

    //OUR GALLERY 

    let ourGalleryItem = $(".ourGallery__tabs-item")
    let ourGalleryMenu = $(".ourGallery__menu li")
    ourGalleryMenu.on("click", (event) => {
        ourGalleryMenu.removeClass("active")
        $(event.target).addClass("active")
        let dataKey = $(event.target).attr("datakey")
        ourGalleryItem.fadeOut(300)
        if (dataKey) {
            $(`.${dataKey}`).fadeIn(500)
        } else {
            ourGalleryItem.fadeIn(500)
        }
    })

    // ANIMATIONS

    let whyChoose = new Waypoint({
        element: document.getElementById('whyChoose'),
        handler: function(direction) {
            $(".whyChoose__header").css({
                "animation-name": "fadeInUp",
                "animation-duration": "2s"
            })

        },
        offset: '100%'
    });
    let whyChooseTabs = new Waypoint({
        element: document.getElementById('whyChoose__tabs'),
        handler: function(direction) {
            $(".whyChoose__tabs").css({
                "animation-name": "fadeInUp",
                "animation-duration": "2s"
            })

        },
        offset: '110%'
    });
    let popGallery = new Waypoint({
        element: document.getElementById('popularCategories'),
        handler: function(direction) {
            $(".popularCategories__header").css({
                "animation-name": "fadeInUp",
                "animation-duration": "2s"
            })

        },
        offset: '100%'
    });
    let popGalleryTabs = new Waypoint({
        element: document.getElementById('popularCategories__tabs'),
        handler: function(direction) {
            $(".popularCategories__tabs").css({
                "animation-name": "fadeInUp",
                "animation-duration": "2s"
            })

        },
        offset: '110%'
    });
    let about = new Waypoint({
        element: document.getElementById('about'),
        handler: function(direction) {
            $(".about__text").css({
                "animation-name": "slideInLeft",
                "animation-duration": "2s"
            })
            $(".about__video").css({
                "animation-name": "slideInRight",
                "animation-duration": "1s"
            })

        },
        offset: '100%'
    });



})

$('.ourGallery__tabs-item-hover-icon').magnificPopup({
    type: 'image'

    // other options
});