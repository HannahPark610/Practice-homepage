$.ajax(


  {
  url: "https://api.instagram.com/v1/users/self/?access_token=1428507007.6eaddd3.53bb720480a8444cb595086c5a494eea",
  dataType:'jsonp',
  success: function(response){
    console.log('success');
    console.log(response.data.username);
  },
});
} else {
     console.log("I want login");
     $("#loginArea").show();
     $("#infoArea").hide();
     $("#logoutArea").hide();
   }
 });
