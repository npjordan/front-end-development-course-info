var arrayItems = [];

function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    console.log(firstName);
    console.log(lastName);

    var p1_fullName = firstName + " " + lastName;
    console.log(p1_fullName);
    document.getElementById("p1_fullName").innerHTML = p1_fullName;

    var p1_valid = (firstName.length > 0 && lastName.length > 0) ? true : false;
    console.log(p1_valid);
    document.getElementById("p1_valid").innerHTML = p1_valid;

    var p1_fullNameLength = p1_fullName.length;
    console.log(p1_fullNameLength);
    document.getElementById("p1_fullNameLength").innerHTML = p1_fullNameLength;

    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);

    var p2_email = emailAddress;
    console.log(p2_email);
    document.getElementById("p2_email").innerHTML = p2_email;

    var p2_valid = (emailAddress.indexOf('@')) ? true : false; 
    console.log(p2_valid);


    var p2_emailLength = emailAddress.length;
    console.log(p2_emailLength);

    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);

    var p3_number = randomNumber;
    console.log(p3_number);
    document.getElementById("p3_number").innerHTML = randomNumber;

    var p3_valid;
    if (!isNan(p3_number)){
        p3_valid = true;
    }else{
        p3_valid = false;
    } 


    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);



    arrayItems.push("arrayInput");
    console.log(arrayItems);

    var p4_arrayLength = arrayItems.length;
    console.log(p4_arrayLength);
    document.getElementById("p4_arrayLength").innerHTML = p4_arrayLength;

    var p4_valid = arrayItems;
    document.getElementById("p4_valid").innerHTML = arrayItems;








    ////////////////////////Your code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}



var arrayItems = [];

function update() {}
