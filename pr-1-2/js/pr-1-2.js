let a=200;
let b=1000;
let c=100;
let d=500;
let e=a+b+c+d;
var f=(e*10)/100;
var g=(e-f);

document.getElementById("title").innerHTML = "Purchase Bill";
document.getElementById("name").innerHTML = "Product Name:-";
document.getElementById("product-1").innerHTML = "Cheese";
document.getElementById("product-2").innerHTML = "Milk";
document.getElementById("product-3").innerHTML = "Chocolate";
document.getElementById("product-4").innerHTML = "Butter";
document.getElementById("price-total").innerHTML = " Product Price:-";
document.getElementById("price-product-1").innerHTML = a+"Rs";
document.getElementById("price-product-2").innerHTML = b+"Rs";
document.getElementById("price-product-3").innerHTML = c+"Rs";
document.getElementById("price-product-4").innerHTML = d+"Rs";
document.getElementById("total").innerHTML = "Total of Products Price:-" + e+"Rs";
document.getElementById("Discount").innerHTML = "Discount:-"+f +"Rs";
document.querySelector(".dis").innerHTML = " After Discount Payable Amount:-" + g+"Rs";


