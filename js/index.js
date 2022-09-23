//grabbers
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");
const btn4 = document.getElementById("button4");
const btn5 = document.getElementById("button5");
const bill = document.getElementById("bill");
const tip = document.getElementsByName("tip");
const numberOfPeople = document.getElementById("nuofpeople");
const resetButton = document.getElementById("reset");
const tipamount = document.getElementById("tipamount");
const total = document.getElementById("total");

//colors
const color = "hsl(172, 67%, 45%)";
const color2 = "hsl(183, 100%, 15%)";
const white = "hsl(0, 0%, 100%)";

var buttons = [btn1, btn2, btn3, btn4, btn5];

//eventlisteners
resetButton.addEventListener('click', function(e) {
  tipamount.innerHTML = "$0.00";
  total.innerHTML = "$0.00";
  e.target.style.opacity = "0.2";
  numberOfPeople.value = numberOfPeople.defaultValue;
  bill.value = bill.defaultValue;
});

bill.addEventListener('input', function() {
  resetButton.style.opacity = "1";
});

numberOfPeople.addEventListener('input', function() {
  const billValue = document.getElementById("bill").value; 
  let no = document.getElementById("nuofpeople").value;
  total.innerHTML = `$${billValue * no}.00`;
});

btn1.addEventListener('click', function(event) {
  event.target.style.backgroundColor = color;
  event.target.style.color = color2;

  let tip = 5;
  const billValue = document.getElementById("bill").value; 
  tipamount.innerHTML = `$${(billValue * tip)/100}.00`;

  changeOtherButtons(0);
});

btn2.addEventListener('click', function(event) {
  event.target.style.backgroundColor = color;
  event.target.style.color = color2;

  let tip = 10;
  const billValue = document.getElementById("bill").value; 
  tipamount.innerHTML = `$${(billValue * tip)/100}.00`;

  changeOtherButtons(1);
});

btn3.addEventListener('click', function(event) {
  event.target.style.backgroundColor = color;
  event.target.style.color = color2;

  let tip = 15;
  const billValue = document.getElementById("bill").value; 
  tipamount.innerHTML = `$${(billValue * tip)/100}.00`;

  changeOtherButtons(2);
});

btn4.addEventListener('click', function(event) {
  event.target.style.backgroundColor = color;
  event.target.style.color = color2;

  let tip = 25;
  const billValue = document.getElementById("bill").value;  
  tipamount.innerHTML = `$${(billValue * tip)/100}.00`;

  changeOtherButtons(3);
});

btn5.addEventListener('click', function(event) {
  event.target.style.backgroundColor = "hsl(172, 67%, 45%)";
  event.target.style.color = color2;

  let tip = 50;
  const billValue = document.getElementById("bill").value; 
  tipamount.innerHTML = `$${(billValue * tip)/100}.00`;

  changeOtherButtons(4);
});

function changeOtherButtons(number) {
  for(var i = 0; i<=buttons.length; i++) {
    if(i == number) {continue};
    buttons[i].style.backgroundColor = color2;
    buttons[i].style.color = white;
  };
}

