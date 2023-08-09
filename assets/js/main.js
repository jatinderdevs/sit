$(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 110) {
        $(".menu").removeClass("sticky");
    } else {
        $(".menu").addClass("sticky");
    }
    if (scroll > 300) {
        $(".callback").css("visibility", "visible");
        $("#accordion").css("visibility", "visible");
    } else {
        $(".callback").css("visibility", "hidden");
        $("#accordion").css("visibility", "hidden");

    }
});
//menu

$("#respMenu").aceResponsiveMenu({
    resizeWidth: '768',

    // slow, medium, fast

    animationSpeed: 'fast',

    accoridonExpAll: false
});

//banner//

$('#mainbanner').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: true,
    navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
    dots: false,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots:true
        },
        600: {
            items: 1
        },
        1000: {
            items: 1,
            nav: true
        }
    }
})

$('#testimonial').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: false,
    autoplayTimeout: 5000,
    nav: true,
    navText: ['<i class="fa fa-chevron-left text-white " ></i>', '<i class="fa fa-chevron-right text-white "></i>'],
    dots: false,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
            //dots: true
        },
        600: {
            items: 1
        },
        1000: {
            items: 1,
            nav:true,
            
        }
    }
})
$('#blog').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: false,
    navText: ['<i class="fa fa-chevron-left text-red fa-2x" ></i>', '<i class="fa fa-chevron-right text-red fa-2x"></i>'],
    dots: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
$('#team').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2000,
    nav: false,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    dots: true,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4,
                      
        }
    }
})
$('#partners').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: false,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 5,
        }
    }
})

//closing banner//



$(document).ready(function () {
    var popup_btn = $('.popup-btn');
    popup_btn.magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,

        fixedContentPos: false
    })

})
//$('body').scrollspy({ target: ".navbar", offset: 50 });

// Add smooth scrolling on all links inside the navbar
$(" .top_nav li a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });

    } // End if

});


//band calculator

function calculate() {
    if (rawlist = document.getElementById("rawlist").value,
        rawreadgen = document.getElementById("rawreadgen").value,
        rawreadaca = document.getElementById("rawreadaca").value, "" != rawlist)
        for (n = 13; n > -1; n--) rawlist >= listeninglist[n] && (document.getElementById("bandlist").innerHTML = bandlist[n], n = -1),
            rawlist < listeninglist[0] && (document.getElementById("bandlist").innerHTML = "0");
    if ("" != rawreadgen)
        for (i = 13; i > -1; i--) rawreadgen >= generallist[i] && (document.getElementById("bandreadgen").innerHTML = bandlist[i], i = -1),
            rawreadgen < generallist[0] && (document.getElementById("bandreadgen").innerHTML = "0");
    if ("" != rawreadaca) for (j = 13; j > -1; j--) rawreadaca >= academiclist[j] && (document.getElementById("bandreadaca").innerHTML = bandlist[j], j = -1),
        rawreadaca < academiclist[0] && (document.getElementById("bandreadaca").innerHTML = "0")
}
var listeninglist = [4, 6, 8, 10, 13, 16, 18, 23, 26, 30, 32, 35, 37, 39], bandlist = [2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9], academiclist = [4, 6, 8, 10, 13, 15, 19, 23, 27, 30, 33, 35, 37, 39], generallist = [6, 9, 12, 15, 19, 23, 27, 30, 32, 34, 36, 37, 39, 40];


// closing//

$(document).ready(function ($) {

    var feedbackSlider = $('.feedback-slider');
    feedbackSlider.owlCarousel({
        items: 1,
        nav: true,
       dots: false,
        autoplayHoverPause: true,

        autoplay: true,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1,
                nav:true,
            },
            1000: {
                items: 1,
                nav:true
            }
        }
    });

    feedbackSlider.on("translate.owl.carousel", function () {
        $(".feedback-slider-item h3").removeClass("animated fadeIn").css("opacity", "0");
        $(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating").removeClass("animated zoomIn").css("opacity", "0");
    });

    feedbackSlider.on("translated.owl.carousel", function () {
        $(".feedback-slider-item h3").addClass("animated fadeIn").css("opacity", "1");
        $(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating").addClass("animated zoomIn").css("opacity", "1");
    });
    feedbackSlider.on('changed.owl.carousel', function (property) {
        var current = property.item.index;
        var prevThumb = $(property.target).find(".owl-item").eq(current).prev().find("img").attr('src');
        var nextThumb = $(property.target).find(".owl-item").eq(current).next().find("img").attr('src');
        var prevRating = $(property.target).find(".owl-item").eq(current).prev().find('span').attr('data-rating');
        var nextRating = $(property.target).find(".owl-item").eq(current).next().find('span').attr('data-rating');
        $('.thumb-prev').find('img').attr('src', prevThumb);
        $('.thumb-next').find('img').attr('src', nextThumb);
        $('.thumb-prev').find('span').next().html(prevRating + '<i class="fa fa-star"></i>');
        $('.thumb-next').find('span').next().html(nextRating + '<i class="fa fa-star"></i>');
    });
    $('.thumb-next').on('click', function () {
        feedbackSlider.trigger('next.owl.carousel', [300]);
        return false;
    });
    $('.thumb-prev').on('click', function () {
        feedbackSlider.trigger('prev.owl.carousel', [300]);
        return false;
    });

}); //end ready


var $sidebar = $('#sidebar');
// Get & Store the original top of our #sidebar-nav so we can test against it
var sidebarTop = $sidebar.position().top + 300;
// Edit the `- 10` to control when it should disappear when the footer is hit.
var blogHeight = $('.page_content').outerHeight() - 100;

// Add the function below to the scroll event
$(window).scroll(fixSidebarOnScroll);

// On window scroll, this fn is called (binded above)
function fixSidebarOnScroll() {
    // Cache our scroll top position (our current scroll position)
    var windowScrollTop = $(window).scrollTop();

    // Add or remove our sticky class on these conditions
    if (windowScrollTop >= blogHeight || windowScrollTop <= sidebarTop) {
        // Remove when the scroll is greater than our #content.OuterHeight()
        // or when our sticky scroll is above the original position of the sidebar
        $sidebar.removeClass('sticky1');
    }
        // Scroll is past the original position of sidebar
    else if (windowScrollTop >= sidebarTop) {
        // Otherwise add the sticky if $sidebar doesnt have it already!
        if (!$sidebar.hasClass('sticky1')) {
            $sidebar.addClass('sticky1');
        }
    }
}
$(" .list-group li a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });

    } // End if

});