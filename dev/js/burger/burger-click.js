/* -------------------------------
    Burger Click
------------------------------ */

var lineToX = gsap.timeline({paused:true});
lineToX.to("#bottom-bar",{duration:0.25, drawSVG: "49.5% 50.5%"},"outlineDraw")
.to("#circle-outline",{duration:0.25, drawSVG: "100%",delay:.15},"outlineDraw")
.to(".cross",{duration:0.25, drawSVG: "20% 60%",alpha:1})
.to("#down-left",{duration:.5,rotate:360,repeat:2,ease: "none"},"wheelTurn")
.to("#up-left",{duration:.5,rotate:360,repeat:2,ease: "none"},"wheelTurn")
.to("#down-right",{duration:.5,rotate:180,repeat:2,ease: "none"},"wheelTurn")
.to("#up-right",{duration:.5,rotate:180,repeat:2,ease: "none"},"wheelTurn")
;

var xToLine = gsap.timeline({paused:true});
xToLine.to(".cross",{duration:0.25,drawSVG:0,alpha:0})
.to("#circle-outline",{duration:0.25,drawSVG:0},"outlineBreak")
.to("#bottom-bar",{duration:0.25,drawSVG:"100%",delay:0.15},"outlineBreak");

$("#burger-container").on("click", function(){
    console.log("click");



    if(isNavVisible === false){
        lineToX.invalidate().restart();
        lineToX.play();
        // make the outline visible
        gsap.set("#outline",{alpha:1});
        // set this to true, so that the default mouseenter and mouselever DON'T work

        // slide over web site content
        gsap.to("main",{duration:0.25, x:-navigationWidth});

        // slide over navigaiton site content
        gsap.to("nav",{duration:0.25, x:-navigationWidth});

        isNavVisible = true;
    }else{
        xToLine.invalidate().restart();
        xToLine.play();

        // slide back web site content
        gsap.to("main",{duration:0.25, x:0});

        // slide over navigaiton site content
        gsap.to("nav",{duration:0.25, x:0})

        // set this to false, so that the default mouseenter and mouselever DO work
        isNavVisible = false;
    }
});
