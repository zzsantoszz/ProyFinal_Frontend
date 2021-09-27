$(".carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,//2000 ms = 2 sec
    autoplayHoverpause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 4,
            nav: false
        }
    }
});