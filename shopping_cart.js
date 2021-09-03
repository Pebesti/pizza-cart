//get reference to add buttons
const addLargeBtn = document.querySelector("#add_large_pizza");
const addSmallBtn= document.querySelector("#add_small_pizza");
const addMediumBtn = document.querySelector("#add_mid_pizza");

//get reference to minus buttons
const minLargeBtn = document.querySelector("#minus_large_pizza");
const minSmallBtn = document.querySelector("#minus_small_pizza");
const minMediumBtn = document.querySelector("#minus_mid_pizza");

//get reference to totals
const small_totalElem = document.querySelector(".small_pizza_price");
const medium_totalElem = document.querySelector(".medium_pizza_price");
const large_totalElem = document.querySelector(".large_pizza_price");
const totalCostElem = document.querySelector(".total-cost");

//variables to hold quantity number
var small_pizza_counter = 0;
var medium_pizza_counter = 0;
var large_pizza_counter = 0;

//variable for totalcost of pizzas
var total=0;
//order
const small = document.querySelector(".small");
const medium = document.querySelector(".medium");
const large = document.querySelector(".large");

//get reference to table body and payment div
const table_body = document.querySelector("#clear-cart");
const payment_div = document.querySelector(".payment");
//onclick
small.addEventListener("click", function(){
    checkBtn.style.display="block";
    small_pizza_counter++;
    small_totalElem.innerHTML = (small_pizza_counter*40.00).toFixed(2);
    total+=40.00;
    totalCostElem.placeholder= "R"+total.toFixed(2);
   document.querySelector(".show").style.display = "block";
   table_body.style.display = "table";
   document.querySelector(".theMessage").style.display = "none";
   document.querySelector("#small").style.display = "table-row";
});

medium.addEventListener("click",function(){
    checkBtn.style.display="block";
    medium_pizza_counter++;
    medium_totalElem.innerHTML = (medium_pizza_counter*70.00).toFixed(2);
    total+=70.00;
    document.querySelector(".theMessage").style.display = "none";
    totalCostElem.placeholder= "R"+total.toFixed(2);
    document.querySelector(".show").style.display = "block";
    table_body.style.display = "table";
   document.querySelector("#medium").style.display = "table-row";
});

large.addEventListener("click",function(){
    checkBtn.style.display="block";
    large_pizza_counter++;
    large_totalElem.innerHTML = (large_pizza_counter*120.00).toFixed(2);
    total+=120.00;
    document.querySelector(".theMessage").style.display = "none";
    totalCostElem.placeholder= "R"+total.toFixed(2);
    document.querySelector(".show").style.display = "block";
    table_body.style.display = "table";
   document.querySelector("#large").style.display = "table-row";
});

//add listerner event
addSmallBtn.addEventListener("click",function (){
    small_pizza_counter++;
    total+=40.00;
    totalCostElem.placeholder= "R"+total.toFixed(2);
    small_totalElem.innerHTML = (small_pizza_counter*40).toFixed(2);
});

addMediumBtn.addEventListener("click",function (){
    medium_pizza_counter++;
    total+=70.00;
    totalCostElem.placeholder= "R"+total.toFixed(2);
    medium_totalElem.innerHTML = (medium_pizza_counter*70).toFixed(2);
});

addLargeBtn.addEventListener("click",function (){
    large_pizza_counter++;
    total+=120.00;
    totalCostElem.placeholder= "R"+total.toFixed(2);
    large_totalElem.innerHTML = (large_pizza_counter*120).toFixed(2);
});

minSmallBtn.addEventListener("click",function (){
    if(small_pizza_counter>0) {
        small_pizza_counter--;
        total-=40.00;
        totalCostElem.placeholder= "R"+total.toFixed(2);
    }
    small_totalElem.innerHTML = (small_pizza_counter*40.00).toFixed(2);
});

minMediumBtn.addEventListener("click",function (){
    if(medium_pizza_counter>0) {
        medium_pizza_counter--;
        total-=70.00;
        totalCostElem.placeholder= "R"+total.toFixed(2);
    }
    medium_totalElem.innerHTML = (medium_pizza_counter*70.00).toFixed(2);
});

minLargeBtn.addEventListener("click",function (){
    if(large_pizza_counter>0) {
        large_pizza_counter--;
        total-=120.00;
        totalCostElem.placeholder= "R"+total.toFixed(2);
    }
    large_totalElem.innerHTML = (large_pizza_counter*120.00).toFixed(2);
});

//variable to hold message function
var interval ="";
//get reference to message
const theMessage = document.querySelector(".theMessage");

//checkout button reference
const checkBtn = document.querySelector(".checkout");

//when the button is clicked run the show payment option button
checkBtn.addEventListener("click",showPaymentOption);
checkBtn.addEventListener("click",pay_for_pizza);

//display pay button  
function showPaymentOption(){
  if(payment_div.style.display === "none") {
    document.getElementById("check").value = "Pay";
   payment_div.style.display = "block";
}
else return;
}

//function for payment processing
function pay_for_pizza(){
if(payment_div.style.display === "block") {
    if(document.querySelector("#pay").value ==="") return;
    if(parseFloat(document.querySelector("#pay").value)>= total){
        checkBtn.style.display="none";
        document.getElementById("check").value = "Checkout";
        large_pizza_counter = small_pizza_counter = medium_pizza_counter = total=0;  
        table_body.style.display = "none";
        payment_div.style.display = "none";
        document.querySelector(".theMessage").classList.remove("red");
        document.querySelector(".theMessage").classList.add("green");
        document.querySelector("#small").style.display = "none";
        document.querySelector("#medium").style.display = "none";
        document.querySelector("#large").style.display = "none";
        totalCostElem.placeholder="R"+total;
        document.getElementById("pay").value = "";
        document.querySelector(".theMessage").style.display = "block";
        document.querySelector(".theMessage").innerHTML="Thank you! Thank you for buying monate pizza! Enjoy your pizzas";
    }
 else {
    document.querySelector(".theMessage").classList.add("red");
    document.querySelector(".theMessage").style.display = "block";
    document.querySelector(".theMessage").innerHTML="Sorry - that is not enough money!";
     interval = setTimeout(disappearingMessage,3000);
}
}
else return;
}

function disappearingMessage(){
    document.querySelector(".theMessage").style.display = "none";
}

function stopFunction(){ 
clearTimeout(interval);
}
