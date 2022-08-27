
// Set time to current date
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// set differing time slots
//var dailyTime = document.getElementById("inputGroup-sizing-default");
var time = "";
for (let i = 0 + 9; i < 18; i++) {
  time += i + ".00" + "<br>";
}

document.getElementById("inputGroup-sizing-default").innerHTML = time;


