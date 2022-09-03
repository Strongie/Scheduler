
// Set time to current date
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));


//format date using moment
var reformatDate1 = moment("9am", "h a").format("hh a");
$("#inputGroup-sizing-default1").text(reformatDate1);

var reformatDate2 = moment("10am", "h a").format("hh a");
$("#inputGroup-sizing-default2").text(reformatDate2);

var reformatDate3 = moment("11am", "h a").format("hh a");
$("#inputGroup-sizing-default3").text(reformatDate3);

var reformatDate4 = moment("12pm", "h a").format("hh a");
$("#inputGroup-sizing-default4").text(reformatDate4);

var reformatDate5 = moment("1pm", "h A").format("hh A");
$("#inputGroup-sizing-default5").text(reformatDate5);

var reformatDate6 = moment("2pm", "h a").format("hh a");
$("#inputGroup-sizing-default6").text(reformatDate6);

var reformatDate7 = moment("3pm", "h a").format("hh a");
$("#inputGroup-sizing-default7").text(reformatDate7);

var reformatDate8 = moment("4pm", "h a").format("hh a");
$("#inputGroup-sizing-default8").text(reformatDate8);

var reformatDate9 = moment("11pm", "h a").format("hh a");
$("#inputGroup-sizing-default9").text(reformatDate9);


//changing colour based on time of day
//9am timeslot
var currentDate = moment().format("h a");
if (currentDate > reformatDate1){
  input1.setAttribute("class", "past");
  }
else if (currentDate === reformatDate1) {
    input1.setAttribute('class', 'present');
   }
else  
      input1.setAttribute("class", "future");

  
//10am timeslot
//var currentDate = moment().format("h a");
if (currentDate > reformatDate2){
input2.setAttribute("class", "past");
}
else if (currentDate === reformatDate2) {
    input2.setAttribute('class', 'present');
   }
else {
  input2.setAttribute("class", "future");
};

//11am timeslot
//var currentDate = moment().format("h a");
if (currentDate > reformatDate3){
input3.setAttribute("class", "past");
}
else if (currentDate === reformatDate3) {
    input3.setAttribute('class', 'present');
   }
else{
  input3.setAttribute("class", "future");
};

//12pm timeslot
//var currentDate = moment().format("h a");
if (currentDate > reformatDate4){
input4.setAttribute("class", "past");
}
else if (currentDate === reformatDate4) {
    input4.setAttribute('class', 'present');
   }
else {
  input4.setAttribute("class", "future");
};

//1pm timeslot
//var currentDate = moment().format("h a");
if (currentDate > reformatDate5){
input5.setAttribute("class", "past");
}
else if (currentDate === reformatDate5) {
    input5.setAttribute('class', 'present');
   }
else {
  input5.setAttribute("class", "future");
};

//2pm timeslot
//var currentDate = moment().format("h a");
if (currentDate > reformatDate6){
input6.setAttribute("class", "past");
}
else if (currentDate === reformatDate6) {
    input6.setAttribute('class', 'present');
   }
else {
  input6.setAttribute("class", "future");
};

//3pm timeslot
//var currentDate = moment().format("h a");
if (currentDate > reformatDate7){
input7.setAttribute("class", "past");
}
else if (currentDate === reformatDate7) {
    input7.setAttribute('class', 'present');
   }
else {
  input7.setAttribute("class", "future");
};



//4pm timeslot
//var currentDate = moment().format("h a");
if (currentDate > reformatDate8){
input8.setAttribute("class", "past");
}
else if (currentDate === reformatDate8) {
    input8.setAttribute('class', 'present');
   }
else {
  input8.setAttribute("class", "future");
};

//5pm timeslot
///var currentDate = moment().format("h a");
if (currentDate > reformatDate9){
input9.setAttribute("class", "past");
}
else if (currentDate === reformatDate9) {
    input9.setAttribute('class', 'present');
}
else{
  input9.setAttribute("class", "future");
};


 //Retrieve local storage on opening page 
function reload1() {
var x = localStorage.getItem("dailyactivity1");
document.getElementById("input1").innerHTML = x;
}

function reload2() {
var x = localStorage.getItem("dailyactivity2");
document.getElementById("input2").innerHTML = x;
}

function reload3() {
var x = localStorage.getItem("dailyactivity3");
document.getElementById("input3").innerHTML = x;
}

function reload4() {
var x = localStorage.getItem("dailyactivity4");
    document.getElementById("input4").innerHTML = x;
}

function reload5() {
var x = localStorage.getItem("dailyactivity5");
document.getElementById("input5").innerHTML = x;
  }

function reload6() {
 var x = localStorage.getItem("dailyactivity6");
document.getElementById("input6").innerHTML = x;
 }

 function reload7() {
var x = localStorage.getItem("dailyactivity7");
 document.getElementById("input7").innerHTML = x;
}

function reload8() {
var x = localStorage.getItem("dailyactivity8");
document.getElementById("input8").innerHTML = x;
}

function reload9() {
    var x = localStorage.getItem("dailyactivity9");
    document.getElementById("input9").innerHTML = x;
    }

$( document ).ready(reload1);
$( document ).ready(reload2);
$( document ).ready(reload3);
$( document ).ready(reload4);
$( document ).ready(reload5);
$( document ).ready(reload6);
$( document ).ready(reload7);
$( document ).ready(reload8);
$( document ).ready(reload9);





 // store the activities in local storage
 //9am
 var saveButtonEL1 = document.querySelector('#saveBtn1');
 function storeActivity1() {
    var input1 = document.getElementById("input1").value;
 localStorage.setItem("dailyactivity1", input1);
 };
 
 saveButtonEL1.onclick = () => {
 storeActivity1();
 }
 //10am
  var saveButtonEL2 = document.querySelector('#saveBtn2');
 function storeActivity2() {
 var input2 = document.getElementById("input2").value;
 localStorage.setItem("dailyactivity2", input2);
 }
 saveButtonEL2.onclick = () => {
    storeActivity2();
  }
//11am
  var saveButtonEL3 = document.querySelector('#saveBtn3');
 function storeActivity3() {
 var input = document.getElementById("input3").value;
 localStorage.setItem("dailyactivity3", input);
 }
 saveButtonEL3.onclick = () => {
    storeActivity3();
  }
//12noon
  var saveButtonEL4 = document.querySelector('#saveBtn4');
 function storeActivity4() {
 var input = document.getElementById("input4").value;
 localStorage.setItem("dailyactivity4", input);
 }
 saveButtonEL4.onclick = () => {
    storeActivity4();
  }
//1pm
  var saveButtonEL5 = document.querySelector('#saveBtn5');
 function storeActivity5() {
 var input = document.getElementById("input5").value;
 localStorage.setItem("dailyactivity5", input);
 }
 saveButtonEL5.onclick = () => {
    storeActivity5();
  }
//2pm
  var saveButtonEL6 = document.querySelector('#saveBtn6');
 function storeActivity6() {
 var input = document.getElementById("input6").value;
 localStorage.setItem("dailyactivity6", input);
 }
 saveButtonEL6.onclick = () => {
    storeActivity6();
  }
//3pm
  var saveButtonEL7 = document.querySelector('#saveBtn7');
 function storeActivity7() {
 var input = document.getElementById("input7").value;
 localStorage.setItem("dailyactivity7", input);
 }
 saveButtonEL7.onclick = () => {
    storeActivity7();
 }
//4pm
  var saveButtonEL8 = document.querySelector('#saveBtn8');
 function storeActivity8() {
 var input = document.getElementById("input8").value;
 localStorage.setItem("dailyactivity8", input);
 }
 saveButtonEL8.onclick = () => {
    storeActivity8();
  }
//5pm
  var saveButtonEL9 = document.querySelector('#saveBtn9');
 function storeActivity9() {
 var input = document.getElementById("input9").value;
 localStorage.setItem("dailyactivity9", input);
 }
 saveButtonEL9.onclick = () => {
    storeActivity9();
  }
