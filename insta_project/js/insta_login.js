$(function() {
  var urlanchor = location.hash;
  var token = urlanchor.split("=");
  if (urlanchor !== "") {
    localStorage.setItem("insta-token", token[1]);
      hideLogin();
      $("#my_logo").hide();
      $("#thumbnail").show();
  }

  if (localStorage.getItem("insta-token") == null) {
    showLogin();
    $("#my_logo").show();
    $("#thumbnail").hide();
  } else {
    hideLogin();
    $("#my_logo").hide();
    $("#thumbnail").show();
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

$(".jcarousel").click(function(login) {
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
