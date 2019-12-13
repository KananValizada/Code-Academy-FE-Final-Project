$(window).load(function() {

    ///////////LOADING ICON////////////////
    setTimeout(() => {
        $(".showbox").fadeOut(1000)
    }, 2500)
    $(".header__tutorials-btn").click(() => {
            $(".header__tutorials").hide()
        })
        ///////////LOADIN ICON//////////////

    /////////////////NAVBAR MENU////////////////////
    let navbarList = $(".header__navbar-menu-list")
    navbarList.on("mouseover", (e) => {
        $(e.target).children("ul").show()
    })
    navbarList.on("mouseleave", (e) => {
        console.log(e.target)
        $(".header__navbar-menu-subList").hide()
    })
    navbarList.on("click", (e) => {
            let i = 0
            if ($(e.target).children("ul").hasClass("block")) {
                i++
            }
            $(".header__navbar-menu-subList").removeClass("block")
            if (i == 0) {
                $(e.target).children("ul").removeClass("none")
                $(e.target).children("ul").addClass("block")

            } else {
                $(e.target).children("ul").removeClass("block")
                $(e.target).children("ul").addClass("none")
            }


        })
        //BurgerMenu Functionality
    let burgerMenu = $(".header__navbar-burger")
    burgerMenu.click(() => {
        $(".header__navbar-mainMenu").toggleClass("dropDownMenu")
        $(".header__navbar-menu-list").toggleClass("dropDownMenuList")
        $(".header__navbar-menu-subList").toggleClass("dropDownMenuSubList")
        if ($(".header__navbarWrapper").css("position") == "fixed") {
            if ($(".dropDownMenu").css("top") == "200px") {
                $(".dropDownMenu").css("transform", "translateY(-163px)")
            } else if ($(".dropDownMenu").css("top") == "170px") {
                $(".dropDownMenu").css("transform", "translateY(-150px)")
            } else {
                $(".dropDownMenu").css("transform", "translateY(-100px)")
            }

        } else {
            $(".dropDownMenu").css("transform", "translateY(0px)")

        }
    })


    ///////////// END NAVBAR MENU/////////////////////


    $('.header__slider').slick({

        infinite: true,
        speed: 500,
        fade: true,
        arrows: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
    });

    // slick SLIDER HEADER//////////////////////
    $(".slick-arrow").hide()
    $(".header__slider").on("mouseover", () => {
        $(".slick-arrow").show(100)
    })
    $(".header__slider").on("mouseleave", () => {
        $(".slick-arrow").hide(100)
    })

    $(".slick-slider").on("afterChange", (ev, slick, current, next) => {
            $(".slick-slider h1").removeClass("headerSliderTransform")
            $(".slick-current h1").addClass("headerSliderTransform")
            $(".slick-slider p, .slick-slider div").removeClass("headerSliderText")
            $(".slick-current p, .slick-current div").addClass("headerSliderText")
        })
        // END slick SLIDER HEADER//////////////////////



    // POPULAR CATEGORIES SECT SLIDER////////////////
    $('.popularCategories__tabs').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    arrows: false,
                }
            },

            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    //END POPULAR CATEGORIES SECT SLIDER////////////////


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
        arrows: false,
        responsive: [{
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
            }
        }]

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
    let Counter1 = new CountUp("counter1", 0, 1800, 0, 16, {  
        useEasing: true,
        useGrouping: true,
        separator: '',
        decimal: '.',
    });
    let Counter2 = new CountUp("counter2", 0, 70, 0, 16, {  
        useEasing: true,
        useGrouping: true,
        separator: '',
        decimal: '.',
    });
    let Counter3 = new CountUp("counter3", 0, 700, 0, 16, {  
        useEasing: true,
        useGrouping: true,
        separator: '',
        decimal: '.',
    });
    let Counter4 = new CountUp("counter4", 0, 1200, 0, 16, {  
        useEasing: true,
        useGrouping: true,
        separator: '',
        decimal: '.',
    });
    let waypoint2 = new Waypoint({
        element: document.getElementById('counter'),
        handler: function(direction) {
            $(".counter__wrapper-item").css({
                "animation-name": "fadeInUp",
                "animation-duration": "2s"
            })
            Counter1.start();
            Counter2.start();
            Counter3.start();
            Counter4.start();

        },
        offset: '110%'
    });
    //END COUNTER SECT
    $('.ourClient__slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });
    $(".slick-slide").css("outline", "none")
        // Fixed NAVBAR 
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
                if ($(".dropDownMenu").css("top") == "200px") {
                    $(".dropDownMenu").css("transform", "translateY(-163px)")
                } else if ($(".dropDownMenu").css("top") == "170px") {
                    $(".dropDownMenu").css("transform", "translateY(-140px)")
                } else {
                    $(".dropDownMenu").css("transform", "translateY(-100px)")
                }

            } else {
                $(".header__navbarWrapper").css({
                    "position": "static",
                })
                $(".dropDownMenu").css("transform", "translateY(0px)")


            }
        },
        // offset: '-30%'
    });

    //OUR GALLERY FADE IN EFFECT

    let ourGalleryItem = $(".ourGallery__tabs-item")
    let ourGalleryMenu = $(".ourGallery__menu li")
    ourGalleryMenu.on("click", (event) => {
        ourGalleryMenu.removeClass("active")
        $(event.target).addClass("active")
        let dataKey = $(event.target).attr("datakey")
        ourGalleryItem.fadeOut()
        if (dataKey) {
            $(`.${dataKey}`).fadeIn()
        } else {
            ourGalleryItem.fadeIn()
        }
    })

    //////////////// ANIMATIONS START///////////////

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
            $(".about__text-box *").css({
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
    let ourCourses = new Waypoint({
        element: document.getElementById('ourCourses'),
        handler: function(direction) {
            $(".ourCourses__header").css({
                "animation-name": "fadeInUp",
                "animation-duration": "2s"
            })

        },
        offset: '100%'
    });
    let ourCoursesTabs = new Waypoint({
        element: document.getElementById('ourCourses__tabs'),
        handler: function(direction) {
            $(".ourCourses__tabs-item").slice(0, 3).css({
                "animation-name": "fadeInUp",
                "animation-duration": "2s"
            })

        },
        offset: '110%'
    });
    let ourCoursesTabsHalf = new Waypoint({
        element: document.getElementById('ourCourses__tabs-midle'),
        handler: function(direction) {
            $(".ourCourses__tabs-item").slice(3, 6).css({
                "animation-name": "fadeInUp",
                "animation-duration": "2s"
            })

        },
        offset: '110%'
    });
    let upcomingEvents = new Waypoint({
        element: document.getElementById('upcomingEvents'),
        handler: function(direction) {
            $(".upcomingEvents__header").css({
                "animation-name": "fadeInUp",
                "animation-duration": "2s"
            })

        },
        offset: '100%'
    });
    let upcomingEventsTabs = new Waypoint({
        element: document.getElementById('upcomingEvents__tabs'),
        handler: function(direction) {
            $(".upcomingEvents__tabs").css({
                "animation-name": "fadeInUp",
                "animation-duration": "2s"
            })

        },
        offset: '110%'
    });
    let onlineCourses = new Waypoint({
        element: document.getElementById('onlineCourses'),
        handler: function(direction) {
            $(".onlineCourses__form").css({
                "animation-name": "fadeInLeft",
                "animation-duration": "2s"
            })
            $(".onlineCourses__img").css({
                "animation-name": "fadeInRight",
                "animation-duration": "2s"
            })

        },
        offset: '110%'
    });
    let ourGallery = new Waypoint({
        element: document.getElementById('ourGallery'),
        handler: function(direction) {
            $(".ourGallery__header").css({
                "animation-name": "fadeInUp",
                "animation-duration": "2s"
            })
        },
        offset: '100%'
    });
    let ourGalleryTabs = new Waypoint({
        element: document.getElementById('ourGallery__menu'),
        handler: function(direction) {
            $(".ourGallery__menu,.ourGallery__tabs").css({
                "animation-name": "fadeInUp",
                "animation-duration": "2s"
            })
        },
        offset: '110%'
    });
    let ourTeachers = new Waypoint({
        element: document.getElementById('ourTeachers'),
        handler: function(direction) {
            $(".ourTeachers__header").css({
                "animation-name": "fadeInUp",
                "animation-duration": "2s"
            })
        },
        offset: '100%'
    });
    let ourTeachersTabs = new Waypoint({
        element: document.getElementById('ourTeachers__tabs'),
        handler: function(direction) {
            $(".ourTeachers__tabs").css({
                "animation-name": "fadeInUp",
                "animation-duration": "2s"
            })
        },
        offset: '110%'
    });
    let studentSay = new Waypoint({
        element: document.getElementById('studentSay'),
        handler: function(direction) {
            $(".studentSay__header").css({
                "animation-name": "fadeInUp",
                "animation-duration": "2s"
            })
        },
        offset: '100%'
    });
    let studentSaySlider = new Waypoint({
        element: document.getElementById('studentSay__slider'),
        handler: function(direction) {
            $(".studentSay__slider").css({
                "animation-name": "fadeInUp",
                "animation-duration": "2s"
            })
        },
        offset: '110%'
    });
    let ourBlogTabs = new Waypoint({
        element: document.getElementById('ourBlog__tabs'),
        handler: function(direction) {
            $(".ourBlog__tabs").css({
                "animation-name": "fadeInUp",
                "animation-duration": "2s"
            })
        },
        offset: '110%'
    });
    let ourClient = new Waypoint({
        element: document.getElementById('ourClient'),
        handler: function(direction) {
            $(".ourClient__header").css({
                "animation-name": "fadeInUp",
                "animation-duration": "2s"
            })
            $(".ourClient__slider").css({
                "animation-name": "fadeIn",
                "animation-duration": "4s"
            })
        },
        offset: '100%'
    });

    //////////////END ANIMATIONS////////////
})

$('.ourGallery__tabs-item-hover-icon').magnificPopup({
    type: 'image'

    // other options
});