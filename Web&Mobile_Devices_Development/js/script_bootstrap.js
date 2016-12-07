function btnLoginClicked() {
  var email = document.getElementById('inEmail').value;
  var password = document.getElementById('inPassword').value;

  var resultEl = document.getElementById('result');
  if (email == "teyang610.com" && password == 123456) {
    resultEl.className = "bg-success";
    resultEl.innerHTML = "The user has logged in.";
  } else {
    resultEl.className = "bg-danger";
    resultEl.innerHTML = "Incorrect email/password.";
  }
}
