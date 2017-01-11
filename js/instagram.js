$(function() {
  console.log('ready');
});
$.ajax({
  url: "https://api.instagram.com/v1/users/self/?access_token=1428507007.6eaddd3.53bb720480a8444cb595086c5a494eea",
  dataType:'jsonp',
  success: function(response){
    console.log('success');
    console.log(response.data.username);
  },
});

$.ajax({
  url: "https://api.instagram.com/v1/users/self/follows?access_token=1428507007.6eaddd3.53bb720480a8444cb595086c5a494eea",
  dataType:'jsonp',
  success: function(response){
    //console.log('success');
    //console.log(response.data.username);
    for(let follower of response.data) {
      console.log(follower.full_name);
      $("#followers").append("<img src=" + follower.profile_picture + "><p>"+follower.full_name+"</p>");
    }
  },
});


// } else {
//      console.log('success');
//      $("#login").show();
//      $("#info").hide();
//      $("#logout").hide();
//    }
//  });
