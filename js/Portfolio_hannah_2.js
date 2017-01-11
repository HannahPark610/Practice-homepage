$(function() {
  console.log('ready');

  $("#showRelationships").click(function () {
    $.ajax({
      url: "https://api.instagram.com/v1/users/{user-id}/relationship?access_token=1428507007.6eaddd3.53bb720480a8444cb595086c5a494eea",
      dataType:'jsonp',
      success: function(response){
        console.log('success');
        console.log(response);
        for(let relationship of response.data) {
          console.log(relationship.full_name);
          $("#relationships").append("<img src=" + relationship.profile_picture + "><p>"+relationship.full_name+"</p>");
        }
      },
    });
  });

  $.ajax({
    url: "https://api.instagram.com/v1/users/self/?access_token=1428507007.6eaddd3.53bb720480a8444cb595086c5a494eea",
    dataType:'jsonp',
    success: function(response){
      console.log('success');
      console.log(response.data.username);
    },
  });
});

$(function(){

  $("#bar1").click(function(){
    $("#group_bars").fadeOut("slow", function(){
      $("#content1").fadeIn("slow");
    });
  });

$(function(){

  $("#bar2").click(function(){
    $("#group_bars").fadeOut("slow", function(){
      $("#content2").fadeIn("slow");
    });
  });

$(function(){

  $("#bar3").click(function(){
    $("#group_bars").fadeOut("slow", function(){
      $("#content3").fadeIn("slow");
    });
  });

$(function(){

  $("#bar4").click(function(){
    $("#group_bars").fadeOut("slow", function(){
      $("#content4").fadeIn("slow");
  });
});



$(function(){

  $("#icons_1").click(function(){
    $("#group_bars").fadeOut("slow", function(){
      $("#icons_1_f").fadeIn("slow");
      });
    });
$(function(){

  $("#icons_2").click(function(){
    $("#group_bars").fadeOut("slow", function(){
      $("#icons_2_i").fadeIn("slow");
      });
    });
$(function(){

  $("#icons_3").click(function(){
    $("#group_bars").fadeOut("slow", function(){
      $("#icons_3_w").fadeIn("slow");
      });
    });
$(function(){

  $("#icons_4").click(function(){
    $("#group_bars").fadeOut("slow", function(){
      $("#icons_4_t").fadeIn("slow");
      });
    });

       });
      });
     });
    });
   });
  });
 });
});
