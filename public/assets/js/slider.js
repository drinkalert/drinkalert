$(document).ready(function() {

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;

}

$("#drinks").on("click", function () {
    var sliderNumber = slider.value
    var hours = 2
    var genderConstant = 0.68
    var weight = 220
    var name = "Chris"
    
 var bac;
if (sliderNumber === "1") {
    var bac = 0.03 
    // cheap date
}
else if (sliderNumber === "2" ) {
    var bac = 0.06
    // buzzed lightyear
}
else if (sliderNumber === "3" ) {
    var bac = 0.08
    // drunk
}
else if (sliderNumber === "4" ) {
    var bac = 0.11
    // david drunk
}
console.log(bac)


function howManyDrinks(w, x, y, z) {

    return (((w + (x * 0.015))/100) * ((y * 453.59237) * z))/14.0000949
    
}

appendDrinkInfo(name, howManyDrinks(bac, hours, weight, genderConstant))


});

function appendDrinkInfo(x, y) {
    var div = $("<div>")
    div.append(`<h2> Pro tip ${ x }, always round up. You can have ${ parseFloat(Math.round(y * 100) / 100).toFixed(2) } drinks. </h2>`)

    $("#formula").append(div)
}

});
