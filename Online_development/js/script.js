alert('The DOM has not been loaded yet.');

document.addeventlistener("DOMContentLoaded", function() {
  alert('Dom was loaded');
});
