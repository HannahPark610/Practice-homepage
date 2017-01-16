$(function() {
  var urlanchor = location.hash;
  var token = urlanchor.split("=");
  if (urlanchor !== "") {
    localStorage.setItem("insta-token", token[1])
  }

  if (localStorage.getItem("insta-token") !== null) {
    $("#login").show();
    $("#logout").hide();
  } else {
      $("#login").hide();
      $("#logout").show();
  }
});
