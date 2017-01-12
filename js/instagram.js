$(function() {
  console.log('ready');

  $("#showFollowers").click(function () {
    $.ajax({
      url: "https://api.instagram.com/v1/users/self/followed-by?access_token=1428507007.6eaddd3.53bb720480a8444cb595086c5a494eea",
      dataType:'jsonp',
      success: function(response){
        console.log('success');
        console.log(response);
        for(let follower of response.data) {
          console.log(follower.full_name);
          $("#followers").append("<img src=" + follower.profile_picture + "><p>"+follower.full_name+"</p>");
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



$(function() {
     var tocken = "1428507007.6eaddd3.53bb720480a8444cb595086c5a494eea"; /* Access Tocken 입력 */
     var count = "6";
     $.ajax({
         type: "GET",
         dataType: "jsonp",
         cache: false,
         url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=1428507007.6eaddd3.53bb720480a8444cb595086c5a494eea&count=6",
         success: function(response) {
          if ( response.data.length > 0 ) {
               for(var i = 0; i < response.data.length; i++) {
                    var insta = '<div class="insta-box">';
                    insta += "<a target='_blank' href='" + response.data[i].link + "'>";
                    insta += "<div class'image-layer'>";
                    //insta += "<img src='" + response.data[i].images.thumbnail.url + "'>";
                    insta += '<img src="' + response.data[i].images.thumbnail.url + '">';
                    insta += "</div>";
                    //console.log(response.data[i].caption.text);
                    if ( response.data[i].caption !== null ) {
                         insta += "<div class='caption-layer'>";
                         if ( response.data[i].caption.text.length > 0 ) {
                              insta += "<p class='insta-caption'>" + response.data[i].caption.text + "</p>"
                         }
                         insta += "<span class='insta-likes'>" + response.data[i].likes.count + " Likes</span>";
                         insta += "</div>";
                    }
                    insta += "</a>";
                    insta += "</div>";
                    $("#instaPics").append(insta);
               }
          }
          $(".insta-box").hover(function(){
               $(this).find(".caption-layer").css({"backbround" : "rgba(255,255,255,0.7)", "display":"block"});
          }, function(){
               $(this).find(".caption-layer").css({"display":"none"});
          });
         }
        });
});


(function($) {
    $(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);
