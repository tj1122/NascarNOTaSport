/* -------------------------------
    Burger Mouse Enter
------------------------------ */

var linesToLine = gsap.timeline({paused:true});
linesToLine.to("#bottom-bar",{duration:0.25, y:8},"moveLine")
.to("#top-bar",{duration:0.25, y:31},"moveLine")
.to("#mid-bar",{duration:0.25, y:19},"moveLine")
.to("#top-bar",{duration:0.01, alpha:0},"vanishLine")
.to("#mid-bar",{duration:0.01, alpha:0},"vanishLine");

$("#burger-container").on("mouseenter", function(){
    console.log("mouse enter");
    if(isNavVisible === false){
        linesToLine.play();
    }

});
