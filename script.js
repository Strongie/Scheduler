
// Set time to current date
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// set differing time slots
//var dailyTime = document.getElementById("inputGroup-sizing-default");
//var time = "";
//for (let i = 0 + 9; i < 18; i++) {
 // time += i + ".00" + "<br>";
//}

//document.getElementById("hours8").innerHTML = time;

//get the correct format for moment and set it equal to a variable 
//compare that to the id of the hour (9 am ,  10am 11am)
//will be using this to target the hour
//write if else if statment comparent the to and change the attribute depending on the color (set attribute of class past)

//local storage to save the notes 
//use text and hour

 //var hour= moment().hour(Number);
 //Number = 10
 //console.log(hour)


 // store the activities in local storage

 var saveButtonEL = document.querySelector('#saveBtn');
 
 function storeActivity() {
    var input = document.getElementById("input2").value;
    localStorage.setItem("dailyactivity", input);
 }
 saveButtonEL.onclick = () => {
    storeActivity();
  }