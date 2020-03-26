// console.log("burger js file");

/* -------------------------------
    Burger Maintenance
------------------------------ */

// Hide the burger outline
// gsap.set("#outline",{alpha:0});
// change the transformOrigin of the 2 lines
// gsap.set(".lines",{transformOrigin: "50% 50%"});
gsap.set(".cross",{drawSVG:0,transformOrigin: "50% 50%",alpha:0});
gsap.set("#down-left",{rotate:180});
gsap.set("#up-left",{rotate:180});
gsap.set("#circle-outline",{drawSVG:0, rotate:90,transformOrigin: "50% 50%"});
