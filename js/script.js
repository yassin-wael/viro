document.getElementById("btn-h").onclick = function () {
    document.getElementById("div1").innerHTML = "Scroll down For more details"
    console.log("first commit is done")
}
document.getElementById("home-form").onclick = function () {
    confirm("You will be directed the form page")
    console.log("confirm is done")
}
document.getElementById("rels").onclick = function () {
    alert("this section is under delopment")
    console.log("alert is done")
}
//////////////OF HOME/////////////
// Start of VARIABLES
var num1 = 21
var num2 = 18
var num3 = 20
var name = "Div(s)"
// document.getElementById("div2").innerHTML = (num1 - num2)
// document.getElementById("div2").innerHTML = (typeof num1),
// console.log(num1 + num2 + name) , console.log(typeof num1 - name)
document.getElementById("div2").innerHTML = (num1 + num2 + name)
// console.log(num1 +  num2)
// console.log(typeof name )
////////////////////////////
// START OF BOOLEAN

var X = true
var Y = false
console.log(typeof X)
// //////// ///////////
// START OF ARRAYS

var demv = ["Yassin", "SH", "Wael", false , 21 , 0]
// var demv1 = [prompt("your name"), prompt("your age"), prompt("your city")]
document.getElementById("mainlgo").onclick = function (){
    var demv1 = [prompt("Your name"), prompt("Your Age"), prompt("Your City")]
    document.getElementById("div3").innerHTML = (demv1)
}
// document.getElementById("div2").innerHTML = (demv1)
console.log(demv)
/////////////////////////
// START OF OBJECT
var obj = {
    name : "Yassin",
    age:  21,
    city: "Alex"
}
console.log(obj.city)
///////////////////////
// START OF NULL
var D 
console.log(typeof D)
/////////////////////REVISION ON JS///////////////////////
//////////////OF PROD//////////////
document.getElementById("btn-r").onclick = function () {
    document.getElementById("prod-s").innerHTML = "Available Soon"
    console.log("prodsection is done")
}
///////////////////////////////////
