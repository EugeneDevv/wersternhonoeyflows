const responsive = {
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}

$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    // click event on toggle menu
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    // Owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });
});

// const selectElement = (s) => document.querySelector(s);

// selectElement('.toggle-collapse').addEvenetListener('click', () => {
//     selectElement('.nav').classList.toggle('collapse');
// });