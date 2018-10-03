/*
    Exercise 27 
*/





$(document).ready(function(){
/*=======================
Regular Expressions 
=======================*/
var str = $('#email').val();
var patt = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
var res = patt.test(str);


if (!res){
    document.getElementById("email").classList.add(".is-invalid")
};

console.log(res);


$('#btnvalidate').click(function(){
/*=======================
  RegExp functionality 
=======================*/
var numeric = $('#numeric').val();
var pattern = /[a-z]/gi;
var numericResult = numeric.replace(pattern, '');
console.log(numericResult);
});



/*=======================
  Array Methods 
=======================*/

const numbers = [1, 2, 3, 4
];

const squaredNumbers = numbers.map(

function(element, index, array){
    return Math.pow(element, 2);
}

);

});
