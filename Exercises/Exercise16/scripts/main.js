$(document).ready(function(){

    //Part 2: Basic Effects

    //1 Show the element with a class of display.basic
    $('#btnShow').on('click', function() {
        $('.display-basic').show();
    });

    //2 Hide the element with a class of display.basic
    $('#btnHide').on('click', function() {
        $('.display-basic').hide();
    });

    //3 Toggle the element that has a class of display.basic
    $('#btnToggle').on('click', function() {
        $('.display-basic').toggle();
    });

    //Part 4: Fade Effects
    
    //1 Quickly fade in the element that has a class of display-fade
    $('#btnFadeIn').on('click', function() {
        $('.display-fade').fadeIn('fast');
    });

    //2 Slowly fade out the element that has a class of display-fade
    $('#btnFadeOut').on('click', function() {
        $('.display-fade').fadeOut('slow');
    });

    //3 Toggle the element that has a class of display-fade
    $('#btnFadeToggle').on('click', function() {
        $('.display-fade').fadeToggle();
    });

    //Part 5: Slide Effects
    
    //1 Make the element that has a class of display-slide slide down for 1000 milliseconds
    $('#btnSlideDown').on('click', function() {
        $('.display-slide').slideDown(1000);
    });

    //2 Make the element that has a class of display-slide slide up for 500 milliseconds
    $('#btnSlideUp').on('click', function() {
        $('.display-slide').slideUp(500);
    });

    //3 Toggle the element that has a class of display-slide
    $('#btnSlideToggle').on('click', function() { 
        $('.display-slide').slideToggle();
    })
});
