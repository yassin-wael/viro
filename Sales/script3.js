var allProducts = document.querySelectorAll(".list .h5") // foreach ,// must be named for the function 
var div = document.querySelector("#content")
var btn = document.querySelector("#btn")
var totalPrice = 0
// ? // /////////////
allProducts.forEach(function (item){
    item.onclick = function(){
        div.innerHTML += item.textContent + "+"
        totalPrice += +(item.getAttribute("price"))

        if(div.innerHTML != ""){
            btn.style.display = "block"
        }
    }
})
btn.onclick = function(){
    // final.innerHTML = (final)
    document.getElementById("total").innerHTML = ("Your Total Price is ") + (totalPrice) + (" EGP")
}