//this is pure javascript
//document.addEventlistener("DOMcontentloaded", function(){
//
//});
//
//this is jquery
//$(document).ready(function(){
//
//});
//
//this is the short version for the jquery
$(function(){

  $("#btnLogin").click(function() {
//var email = document.getElementById('inEmail').value;
var email = $("#inEmail").val();

//var email = document.getElementById('inEmail').value;
var password = $("#inPassword").val();

//var email = document.getElementById('inEmail').value;
var resultE1 = $("#result").val();
result.removeClass();

  if (email == "teyang610.com" && password == 123456) {
    //resultEl.className = "bg-success";
    //
    resultEl.addClass("bg-success")
            .html("The user has logged in.");

    } else {

    resultEl.addClass("bg-danger")
            .html("Incorrect email/password.");

    }
  });
});
