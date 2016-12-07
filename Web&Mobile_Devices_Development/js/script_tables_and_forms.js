function FormClicked() {
  var email = document.getElementById("inEmail").value;
  var password = document.getElementById("inPassword").value;

  if (email == "teyang610@gmail.com" && password == 123456) {
    window.alert("The user has logged in");
  } else {
    window.alert("incorrect user/password.");
  }
}
