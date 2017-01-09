$.ajax({
  url: "https://api.instagram.com/v1/users/self/?access_token=1428507007.6eaddd3.53bb720480a8444cb595086c5a494eea",
  dataType:'jsonp',
}).done(funtion (data) {
  console.log(data);
  document.getElmentById("hannahuser").innerHTML = data.data.username;
}).error(funtion(err){

});
