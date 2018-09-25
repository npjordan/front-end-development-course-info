function update() {
    /* ===================
        Your code starts here
    =====================*/
	
    //Create new array.
var messages = [];
    //If first name is empty. Add it to the array
if firstName.length =< 0{messages.push(First Name is required)
	};
    //If last name is empty. Add it to the array
if lastName.length =< 0{messages.push(Last Name is required)
	};
    //Email is empty. Add it to the array
if email.length =< 0{messages.push(Email address is required)
	};
    //Loop through array
var htmlString = "error-list";
for(var i=0; i<messages.length; ++i){
htmlString = htmlString + '<li>' + messages[i] + '</li>'
    htmlString = htmlString + '</ul>';
	console.log(error-list);
};

    //Create javascript object for the user
var user = {
	firstName = "Nicholas"
	lastName = "Jordan"
	email = "nicholas.jordan.10@gmail.com"
	fullName: function(){
var me = this;
return me.firstName + " " + me.lastName;
	}
};
console.log(user);

var now = new Date();
var new Date = new Date(2018, 9, 25);



    //log the user object to the console


    //Check to see if everything is valid

    //Create string for today's date. Remember, if you hard code this, it will be invalid tomorrow.

    //Make the alert box.

alert("Submitted on 'new Date'");


    /* ===================
        Your code ends here
    =====================*/


}



var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}
