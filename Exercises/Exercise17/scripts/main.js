$(document).ready(function(){

//When the page loads, select all the elements with the class of 'error' and hide them.
$('.error').hide();

//When the page loads, select all the elements with the class of 'input-group' use .filter() to get the even elements. Add the class 'even' to the selected elements.
$('.input-group').filter(':even').addClass("even");

//Add an .on('blur') to the FirstName input.

$('#firstName').closest('.requiredMsg');
$('#firstName').on('blur', function() {
    var input = $(this); 
    if (input.val() === "") {
        $('.requiredMsg').fadeIn(2250).delay(5000).fadeOut(2250);
    };
});

//Repeat the above step on LastName

$('#lastName').closest('.requiredMsg');
$('#lastName').on('blur', function() {
    var input = $(this); 
    if (input.val() === "") {
        $('.requiredMsg').fadeIn(2250).delay(5000).fadeOut(2250);
    };
});

//Repeat the above on the EmailAddress
//In your .on('blur') for EmailAddress also do the following:
    //Check to see if EmailAddress contains the "@" symbol and the ".com" string.
    //Show the error message with the class 'emailMsg'

$('#emailAddress').closest('.emailMsg');
$('#emailAddress').on('blur', function() {
    var input = $(this); 
    
    if (input.val() === "" || input.val().indexOf("@") === -1 || input.val().indexOf(".com") === -1) {
        $('.emailMsg').fadeIn(2250).delay(5000).fadeOut(2250);
    };
});


});
