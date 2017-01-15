$(function() {
  $("#login").click(function() {
    $.ajax({
        url: "https://api.instagram.com/oauth/authorize/?client_id=6eaddd3646c44539a3a10b0f517076ca&redirect_uri=REDIRECT-URI&response_type=token",
        dataType:'jsonp',
        success: function(response){
          alert(respose);
        }
      });
  });
});
