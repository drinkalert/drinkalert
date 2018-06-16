$(document).ready(function() {

    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value; // Display the default slider value
    var number;
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        output.innerHTML = this.value;
        number = this.value
        textAppend(number)
    }

    function textAppend(number) {
        console.log(number)
        if (number === "1") {
            $("#drunkness").text("Cheap Date")
        } else if(number === "2") {
            $("#drunkness").text("Buzzed Light Year")
        }else if (number === "3") {
            $("#drunkness").text("YOLO")
        }else if (number === "4") {
            $("#drunkness").text("David Drunk")
        }
    }


$("#drinks").on("click", function () {
    console.log(number)
    var hours = 2
    var genderConstant = 0.68
    var weight = 220
    var name = "Chris"
    
 function bac(x) {
    var bac = parseInt(x) * 0.03
    return bac
}

function howManyDrinks(w, x, y, z, a, b) {

    return (((w(input) + (x * 0.015))/100) * (y * 453.59237 * z))/(22.3677555 * a * b)
    
}

appendDrinkInfo(name, howManyDrinks(bac, hours, weight, genderConstant))


});

function appendDrinkInfo(x, y) {
    var div = $("<div>")
    div.append(`<h2> Pro tip ${ x }, always round up. You can have ${ parseFloat(Math.round(y * 100) / 100).toFixed(2) } drinks. </h2>`)

    $("#formula").append(div)
}

});

// BAC = (((28.3495 * number_of_Drinks * fl_oz_per_drink * ac_drink * 0.789)/(weight * 453.59237 * gender)) * 100) - (hours_elapsed * 0.015)

// (((BAC + (hours_elapsed * 0.015))/100) * (weight * 453.59237 * gender))/(22.3677555 * fl_oz_per_drink * ac_drink) = number_of_Drinks

// (((w + (x * 0.015))/100) * ((y * 453.59237) * z))/14.0000949

