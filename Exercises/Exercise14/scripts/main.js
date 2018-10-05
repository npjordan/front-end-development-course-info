function submit() {
    for (var e, t = [], s = 0; s < inputs.length; s++)
        e = getE(inputs[s]),
        "" === e.value ? (t.push(e.placeholder + " is required"),
        e.classList.add(ERROR_CLASS)) : e.classList.remove(ERROR_CLASS);
    -1 == getE("emailAddress").value.indexOf("@") && t.push("Enter a valid Email");
    var i = getE("timezone");
    "" === i.value ? (i.classList.add(ERROR_CLASS),
    t.push("Timezone is required")) : i.classList.remove(ERROR_CLASS),
    !1 === getE("terms").checked && t.push("You must accept the terms and conditions");
    var n;
    t.length > 0 ? n = '<ul class="errors"><li>' + t.join("</li><li>") + "</li></ul>" : (n = "<h1>Thank you for registering</h1>",
    reset()),
    getE("messages").innerHTML = n
}
function reset() {
    for (var e = 0; e < inputs.length; e++) {
        var t = getE(inputs[e]);
        t.value = "",
        t.classList.remove(ERROR_CLASS)
    }
    getE("messages").innerHTML = "",
    getE("timezone").value = "",
    getE("terms").checked = !1
}
function getE(e) {
    return document.getElementById(e)
}
var btn = getE("btnSubmit");
btn.addEventListener("click", submit);
var btn2 = getE("btnReset");
btn2.addEventListener("click", reset);
var inputs = ["userName", "emailAddress", "password"]
  , ERROR_CLASS = "invalid";
