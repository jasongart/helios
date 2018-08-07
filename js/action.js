var slider = document.getElementById("billAmt");
var yearRange = document.getElementById("yearRange");
var output = document.getElementById("demo");
var outputYear = document.getElementById("demo2");
var cash = document.getElementById("cash");
var monthly = document.getElementById("monthly");
var cashOption = document.getElementById("cashOption");
var monthlyOption = document.getElementById("monthlyOption");

var total = document.getElementById("grandTotal");
var grandTotal = slider.value * yearRange.value;

output.innerHTML = slider.value;
outputYear.innerHTML = yearRange.value;
total.innerHTML = grandTotal;


//when the Cash Option div is clicked
cashOption.addEventListener("click", function(){
  cash.checked = true;
  showCash();
}
);

//when the Monthly Option div is clicked
monthlyOption.addEventListener("click", function(){
  monthly.checked = true;
  showCash();
}
);



slider.oninput = function() {
  // output.innerHTML = this.value;
  calculateGrandTotal();
};

yearRange.oninput = function() {
  // outputYear.innerHTML = this.value;
  calculateGrandTotal();
};


//Calculates the total as the sliders move

  function calculateGrandTotal(){
if (document.getElementById("cash").checked==true){
  var grandCashTotal = Math.round(slider.value * yearRange.value * 1.7); //try to make 1.7 work
  total.innerHTML = grandCashTotal;
    console.log("grand total")
}
else{
    var grandTotal = slider.value * yearRange.value;
    total.innerHTML = grandTotal;
      console.log("grand total")
    }
    };


//Calculates the total as the radios and their containing divs are clicked

function showCash(){
  if (cash.checked==true){
      cashOption.style.backgroundColor="#E85D1C";
      monthlyOption.style.backgroundColor="#b25124";
      var grandCashTotal = Math.round(slider.value * yearRange.value * 1.7); //try to make 1.7 work
      total.innerHTML = grandCashTotal;
    }

    if (monthly.checked==true){
        cashOption.style.backgroundColor="#b25124";
        monthlyOption.style.backgroundColor="#E85D1C";
      var grandCashTotal = slider.value * yearRange.value;
      total.innerHTML = grandCashTotal;}
    // console.log("cash radio pushed");
};


//smooth scroll to contact


function scrollCalc() {
    var contact = document.getElementById("calc");
    contact.scrollIntoView({
  behavior: 'smooth'
});
}

function scrollContact() {
    var contact = document.getElementById("contact");
    contact.scrollIntoView({
  behavior: 'smooth'
});
}
