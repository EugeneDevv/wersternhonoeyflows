$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    // click event on toggle menu
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })


});

// const selectElement = (s) => document.querySelector(s);

// selectElement('.toggle-collapse').addEvenetListener('click', () => {
//     selectElement('.nav').classList.toggle('collapse');
// });