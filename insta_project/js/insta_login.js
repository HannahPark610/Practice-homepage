$(function() {
  var urlanchor = location.hash;
  var token = urlanchor.split("=");
  if (urlanchor !== "") {
    localStorage.setItem("insta-token", token[1])
  }
});
