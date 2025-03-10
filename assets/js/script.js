$(document).ready(function () {
    window.onscroll = function () {
        myFunction();

    };
    let nav = document.querySelector("header");
    let prt = nav.parentElement;
    let sticky = nav.offsetTop+100;
    function myFunction() {
        let wdth = window.innerWidth
        if (wdth < 257) {
            if (window.pageYOffset > sticky) {
                nav.classList.add("sticky");
            } else {
                nav.classList.remove("sticky");
            }
        } else {
            if (window.pageYOffset > sticky) {
                nav.classList.add("sticky");
            } else {
                nav.classList.remove("sticky");
            }
        }
    }
});




$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.nav-menu').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('.nav-menu').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.nav-menu').removeClass('transition-menu');
        }
    });
    $('.head-menu a').on('click', function () {
        $('.nav-menu').addClass('menu-width');
        $('body').removeClass('body_fix');
        $('.nav-menu').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});

$('.menu-scroll a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        let $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            let targetOffset = $target.offset().top-130;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});


$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }

    let accordion = new Accordion($('#accordion'), false);
});







let possibilitiesSwiper = new Swiper(".possibilities-slider", {
    slidesPerView: 4,
    spaceBetween: 15,
    breakpoints: {
        '1199': {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        '991': {
            slidesPerView: 3,
            spaceBetween: 15,
            loop: true,

        },
        '767': {
            slidesPerView: 2,
            spaceBetween: 15,
            loop: true,

        },

        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
            loop: true,

        },
    },

});


let advantagesSwiper = new Swiper(".advantages-slider", {
    slidesPerView: 5,
    spaceBetween: 15,
    breakpoints: {
        '1199': {
            slidesPerView: 5,
            spaceBetween: 15,
        },
        '991': {
            slidesPerView: 4,
            spaceBetween: 15,
            loop: true,
        },
        '540': {
            slidesPerView: 3,
            spaceBetween: 10,
            loop: true,
        },
        '320': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,
            loop: true,
        }
    }
});

let howSwiper = new Swiper(".how-works-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        '1199': {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        '991': {
            slidesPerView: 3,
            spaceBetween: 15,
            loop: true,
        },
        '767': {
            slidesPerView: 3,
            spaceBetween: 15,
            loop: true,
        },
        '540': {
            slidesPerView: 3,
            spaceBetween: 10,
            loop: true,
        },
        '320': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,
            loop: true,
        },
    }
});
















let usersSwiper = new Swiper(".users-slider", {
    loop: true,
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 10,
    mousewheel: false,
    speed: 1600,
    autoplay: {
        delay: 1800,
        disableOnInteraction: false,
    },
    breakpoints: {

        '991': {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        '767': {
            slidesPerView: 2,
            spaceBetween: 10,
            direction: "horizontal",
            mousewheel: false,
            slidesPerGroup: 1,
            autoplay: false,
        },
        '570': {
            slidesPerGroup: 1,

            slidesPerView: 2,
            spaceBetween: 10,
            direction: "horizontal",
            mousewheel: false,
            autoplay: false,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            direction: "horizontal",
            mousewheel: false,
            autoplay: false,
        },
    },
    pagination: {
        el: ".our-users-pagination",
        clickable: true,
    },
});