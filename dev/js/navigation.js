
var isNavVisible = false;

var navigationWidth = $("nav").width();

// listen for the window to resize and reset the nav width var
$( window ).resize(function() {
    console.log(navigationWidth);
    navigationWidth = $("nav").width();
});
