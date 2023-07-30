
var navlist = document.getElementById('navitems');
// var mainbd = document.querySelector('.main-background');
function openmenu() {
    navlist.style.left = '0';
}
function closemenu() {
    navlist.style.left = '-200px';
}

document.querySelector("#menuopen").addEventListener("click", openmenu);

$(".carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        500: {
            items: 2,
            nav: false
        },
        800: {
            items: 3,
            nav: false
        },
        1200: {
            items: 4,
            nav: false
        }
    }
});


