/* -------------------------------
    Burger Click
------------------------------ */

var lineToX = gsap.timeline({paused:true});
lineToX.to("#burger-container",{duration: 0.25, rotate:-180},"twist")
lineToX.to("#top-line",{duration: 0.5, rotate:-45},"twist")
lineToX.to("#bottom-line",{duration: 0.5, rotate:45},"twist")
lineToX.from("#outline",{duration: 0.4, drawSVG: 0},"twist");

$("#burger-container").on("click", function(){
    console.log("click");

    if(isNavVisible === false){
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
        lineToX.reverse();

        // slide back web site content
        gsap.to("main",{duration:0.25, x:0});

        // slide over navigaiton site content
        gsap.to("nav",{duration:0.25, x:0})

        // set this to false, so that the default mouseenter and mouselever DO work
        isNavVisible = false;
    }
});
