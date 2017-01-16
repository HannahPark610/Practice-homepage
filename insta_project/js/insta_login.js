$(function() {
  var urlanchor = location.hash;
  var token = urlanchor.split("=");
  if (urlanchor !== "") {
    localStorage.setItem("insta-token", token[1])
  }

  if (localStorage.getItem("insta-token") == null) {
    showLogin();
  } else {
    hideLogin();
  }
});

function logoutInsta() {
    localStorage.removeItem("insta-token");
    showLogin();
}
function showLogin() {
  $("#login").show();
  $("#logout").hide();
}

function hideLogin() {
  $("#login").hide();
  $("#logout").show();
}
