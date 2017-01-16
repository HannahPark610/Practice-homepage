$(function() {
  var urlanchor = location.hash;
  var token = urlanchor.split("=");
  if (urlanchor !== "") {
    localStorage.setItem("insta-token", token[1]);
      hideLogin();
  }

  if (localStorage.getItem("insta-token") == null) {
    showLogin();
  } else {
    hideLogin();
  }

  var jcarousel = $('.jcarousel').jcarousel();

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

                  $.ajax({
                      type: "GET",
                      dataType: "jsonp",
                      cache: false,
                      url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=" + localStorage.getItem("insta-token"),
                      success: function(response) {
                         if ( response.data.length > 0 ) {
                              for(var i = 0; i < response.data.length; i++) {
                                var html = '<ul>';
                                $.each(response.data, function() {
                                html += '<li><img src="' + this.images.standard_resolution.url + '" alt="' + this.title + '"></li>';
                            });

                            html += '</ul>';
                            // Append items
                            jcarousel
                                .html(html);

                            // Reload carousel
                            jcarousel
                                .jcarousel('reload');
                        };
                      }
                    }});

                      $("#followers").click(function() {
                        $.ajax({
                          url: "https://api.instagram.com/v1/users/self/followed-by?access_token=1428507007.6eaddd3.53bb720480a8444cb595086c5a494eea",
                          dataType:'jsonp',
                          success: function(response){
                            console.log('success');
                            console.log(response);
                            for(let follower of response.data) {
                              console.log(follower.full_name);
                              $("#login").append("<img src=" + follower.profile_picture + "><p>"+follower.full_name+"</p>");
                            }
                          },
                        });
                      });
});

function logoutInsta() {
    localStorage.removeItem("insta-token");
    showLogin();
}
function showLogin() {
  $("#login").show();
  $("#logout").hide();
  $("#my_logo").show();
  $("#thumbnail").hide();
  $("#followers").hide();
}

function hideLogin() {
  $("#login").hide();
  $("#logout").show();
  $("#my_logo").hide();
  $("#thumbnail").show();
  $("#followers").show();
}
