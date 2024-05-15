var p=1000;
var r=10;
var t=5;

var s=(p*r*t)/100;
var d=p+s;
var e=d-p;




document.getElementById("Heading").innerHTML = "Simple Interest ";
document.getElementById("P").innerHTML = " Principal Amount =";
document.getElementById("P-amount").innerHTML = p;
document.getElementById("R").innerHTML = "  Rate of interest =";
document.getElementById("R-amount").innerHTML = r;
document.getElementById("T").innerHTML = "  Number of years=";
document.getElementById("years").innerHTML = t;
document.getElementById("accured").innerHTML="Total accrued amount ="
document.getElementById("A").innerHTML=d;
document.getElementById("I").innerHTML= "Interest =";
document.getElementById("int").innerHTML=e;