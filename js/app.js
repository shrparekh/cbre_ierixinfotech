$(document).ready(function() {
    var d = new Date();
    $('.copyrightYear').html(d.getFullYear());

    var winHT = $(window).height();
    var winWD = $(window).width();
    var navHt = $("header").outerHeight();
    var conWD = $(".container").width();
    // var bannerHt = winHT - navHt;
    var bannerHt = winHT;
    isFloorplan = 0;
    isBrochure = 0;

    $('.banner_ht').css('height', bannerHt);
    $('.banner_ht2').css('height', bannerHt * 2);
    $('.section-first').css('margin-top', navHt);


    if (winWD > 1023) {
        $('.banner-content, .banner-continue').css('right', ((winWD - conWD) / 2) + 50);
    }

    $(".goto-home").on("click", function() {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });

    $(".scroll-next").click(function() {
        var cls = $(this).closest("section").next().offset().top - 50;
        $("html, body").animate({
            scrollTop: cls
        }, 1000);
    });

    $('.lux-tab a').on('click', function() {
        var link = $(this).attr('rel');
        $('.tduration').hide();
        $('#' + link).fadeIn();
        $('.lux-tab a').removeClass('active-gal-tab');
        $(this).addClass('active-gal-tab');
    });

    $('.luxury-tab a').on('click', function() {
        var link = $(this).attr('rel');
        $('.tab-content').hide();
        $('#' + link).fadeIn();
        $('.tab-item-wrapper').toggleClass('expanded');
        $('.luxury-tab a').removeClass('active-gal');
        $(this).addClass('active-gal');
    });


    function podiumFun() {
        $('.podium-slider').slick({
            slidesToShow: 3,
            rows: 3,
            responsive: [{
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    rows: 2,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="./images/arrow-left.svg"></button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button"> <img src="./images/arrow-right.svg"></button>',
                },
            }]
        });
    }

    function rooftopFun() {
        $('.rooftop-slider').slick({
            slidesToShow: 3,
            rows: 2,
            responsive: [{
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    rows: 2,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="./images/arrow-left.svg"></button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button"> <img src="./images/arrow-right.svg"></button>',
                },
            }]
        });
    }

    function apartmentFun() {
        $('.apartment-slider').slick({
            slidesToShow: 3,
            rows: 2,
            responsive: [{
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    rows: 2,
                    arrows: false,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="./images/arrow-left.svg"></button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button"> <img src="./images/arrow-right.svg"></button>',
                },
            }]
        });
    }

    podiumFun();
    rooftopFun();
    apartmentFun();


    $(".int-ext-tabs").click(function() {
        let rel = $(this).attr('rel');
        console.log(rel);
        if (rel == "podium") {
            $(".podium-slider").slick('unslick');
            $(".rooftop-slider").slick('unslick');
            $(".apartment-slider").slick('unslick');
            podiumFun();
            rooftopFun();
            apartmentFun();
        }
        if (rel == "rooftop") {
            $(".podium-slider").slick('unslick');
            $(".rooftop-slider").slick('unslick');
            $(".apartment-slider").slick('unslick');
            podiumFun();
            rooftopFun();
            apartmentFun();
        }
        if (rel == "apartment") {
            $(".podium-slider").slick('unslick');
            $(".rooftop-slider").slick('unslick');
            $(".apartment-slider").slick('unslick');
            podiumFun();
            rooftopFun();
            apartmentFun();
        }
    });

    $('.plus-icon').click(function() {
        var id = $(this).attr('id');
        $('.lux-tabs-wrapper .col-4').removeClass('col-4').addClass('col-2');
        $('.lux-tabs-wrapper .col-8').removeClass('col-8').addClass('col-2');
        $('.' + id).removeClass('col-4, col-2').addClass('col-8');

        $(this).parent().fadeOut();

        // $('.'+id+' .card-images').fadeOut();
        $('.card-content-hover').hide();
        $('.' + id + ' .card-content-hover').fadeIn(2000);

        $('.lux-tabs-wrapper .col-2 .card-images, .lux-tabs-wrapper .col-2 .card-content').show();
    })

    $('.cardclosepop').click(function() {
        $('.lux-tabs-wrapper .col-8').removeClass('col-8').addClass('col-4');
        $('.lux-tabs-wrapper .col-2').removeClass('col-2').addClass('col-4');
        $('.card-content-hover').hide();
        $('.lux-tabs-wrapper .col-4 .card-images, .lux-tabs-wrapper .col-4 .card-content').show();
    })

    var $statusGal4 = $('.gal-pagingInfogallery');
    var $slickElement4 = $('.gal-slider');
    $slickElement4.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        var l = (currentSlide ? currentSlide : 0) + 1;
        $statusGal4.html('<span>' + l + ' - </span>' + slick.slideCount);
    });

    $('.gal-slider').slick({
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="23.13" height="12.75" viewBox="0 0 23.13 12.75"><g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(0.5 0.707)"><path id="Path_34262" data-name="Path 34262" d="M29.63,18H7.5" transform="translate(-7.5 -12.332)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><path id="Path_34263" data-name="Path 34263" d="M23.668,7.5,18,13.168l5.668,5.668" transform="translate(-18 -7.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/></g></svg></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="23.13" height="12.75" viewBox="0 0 23.13 12.75"><g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(12.998 -6.793)"><path id="Path_34262" data-name="Path 34262" d="M7.5,18H29.63" transform="translate(-19.998 -4.832)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><path id="Path_34263" data-name="Path 34263" d="M18,7.5l5.668,5.668L18,18.835" transform="translate(-14.036)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/></g></svg></button>',
        centerMode: true,
        arrows: true,
        centerPadding: '237px',
        slidesToShow: 1,
        responsive: [{
                breakpoint: 992,
                settings: {
                    centerPadding: '150px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: false,
                }
            }
        ]
    });

    $(".gal-slider .slick-arrow").detach().appendTo('.gal-slider-arrows');

    $('.enq_click, .mob_enq_click').click(function() {
        $("#overlay").show();
    });
    $("#close").on("click", function() {
        $("#overlay").hide();
    });

    // if (winWD > 992) {
    //     $(".enq_click, .frmclose").click(function() {
    //         if ($(".form-container").is(':visible')) {
    //             $(".form-container").slideUp();
    //         } else {
    //             $(".form-container").slideToggle();
    //         }
    //         $(".form-container, .frmclose").toggleClass("show");
    //     });

    // }

    $(".menu-icon-mobile").on("click", function() {
        $(".nav-links").slideToggle();
        $(".menu-icon-mobile").toggleClass("active");
    });

    if (winWD <= 992) {
        $(".nav-links a").on("click", function() {
            $(".menu-icon-mobile").trigger("click");
        })

        $('.banner-content').css('top', (navHt + 50));
    }


    var childrenSelector = $(".nav-links a");
    var aChildren = $(".nav-links a"); // find the a children of the list items
    if (winWD <= 700)
        var gap = 55; // $(".header-wrapper").outerHeight(); //Navigation height
    else
        var gap = 100;
    var aArray = []; // create the empty aArray
    for (var i = 0; i < childrenSelector.length; i++) {
        var aChild = aChildren[i];
        if (!$(aChild).hasClass('extLink')) {
            if ($(aChild).attr('rel')) {
                var ahref = $(aChild).attr('rel');
                aArray.push(ahref);
            }
        }
    }
    // var counterflag=0;
    //On Scroll - Add class active to active tab
    var counterflag1 = 0;
    $(window).scroll(function() {
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();
        for (i = 0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $("#" + theID).offset().top; // get the offset of the div from the top of page
            var divHeight = $("#" + theID).outerHeight(); // get the height of the div in question
            if (windowPos >= (divPos - gap) && windowPos < ((divPos - gap) + divHeight)) {
                if (!$("a[rel='" + theID + "']").hasClass("active")) {
                    // ga('set', 'page', '/'+theID);
                    // ga('send', 'pageview');
                    $("a[rel='" + theID + "']").addClass("active");
                    if (winWD > 992) {
                        if (theID == 'overview' && counterflag1 == 0) {
                            $('.bench-wrapper').addClass('fadeAnim');
                            counterflag1 = 1;
                        }
                    }
                    if (theID == 'location') {
                        $('.anim').addClass('fade-in-image');
                    }
                    // if(theID == 'about'){
                    //     $('.path-anim').addClass('path');
                    // }
                }
            } else {
                $("a[rel='" + theID + "']").removeClass("active");
            }
        }

        //If document has scrolled to the end. Add active class to the last navigation menu
        if (windowPos + windowHeight == docHeight) {
            if (!$(".nav-links a:not(.extLink):last-child").hasClass("active")) {
                var navActiveCurrent = $(".active").attr("rel");
                $("a[rel='" + navActiveCurrent + "']").removeClass("active");
                $(".nav-links a:not(.extLink):last-child").addClass("active");
            }
        }
    });

    //On Click
    $('.nav-links a').on("click", function() {
        if (!$(this).hasClass('extLink')) {
            var href = $(this).attr("rel");
            if (winWD <= 700)
                var gap = 45; // $(".header-wrapper").outerHeight(); //Navigation height
            else
                var gap = 80;

            $('html,body').animate({
                scrollTop: $("#" + href).offset().top - gap
            }, 1000);
        }
    });

});


function isIntoView(elem) {

    var documentViewTop = $(window).scrollTop();
    var documentViewBottom = documentViewTop + $(window).height();
    var elementTop = $(elem).offset().top;
    var elementBottom = elementTop + $(elem).height();
    return ((elementBottom <= documentViewBottom) && (elementTop >= documentViewTop));

}
var counterflag = 0;

$(window).scroll(function() {
    $(".lazy").each(function() {
        if ($(this).attr("data-src")) {
            (this.tagName == "IMG" || this.tagName == "IFRAME") ? $(this).attr("src", $(this).data("src")): $(this).css("background-image", "url(" + $(this).data("src") + ")");
            $(this).removeAttr("data-src");
        }
    });

    if (isIntoView($('#about'))) {
        if (counterflag == 0) {
            $('.number span').addClass('counter');
            $('.counter').each(function(index) {
                var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(parseFloat(now).toFixed(size));
                    }
                });
            });
            counterflag = 1;
        }
        $('.path-anim').addClass('path');
    }
    // if (isIntoView($('#overview'))) {
    //     if(winWD > 992){
    //         if(counterFlag1==0){
    //             $('.bench-wrapper').addClass('fadeAnim');
    //             counterFlag1 = 1;
    //         }
    //     }
    // }
    var windscroll = $(window).scrollTop();
    if (windscroll >= 50) {
        $("header").addClass("active");
    } else {
        $("header").removeClass("active");
    }
});