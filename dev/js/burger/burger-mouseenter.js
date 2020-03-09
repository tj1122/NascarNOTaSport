/* -------------------------------
    Burger Mouse Enter
------------------------------ */

var linesToLine = gsap.timeline({paused:true});
linesToLine.to("#top-line",{duration:0.25, y:5},"moveLine")
.to("#bottom-line",{duration:0.25, y:-5},"moveLine");

$("#burger-container").on("mouseenter", function(){
    console.log("mouse enter");
    if(isNavVisible === false){
        linesToLine.play();
    }

});
