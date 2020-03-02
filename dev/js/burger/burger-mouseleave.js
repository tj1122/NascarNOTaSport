/* -------------------------------
    Burger Mouse Leave
------------------------------ */

$("#burger-container").on("mouseleave", function(){
    console.log("mouse leave");
    if(isNavVisible === false){
        linesToLine.reverse();
    }

});
