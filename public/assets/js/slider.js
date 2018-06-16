$(document).ready(function() {

    var input;
    $(function() {
        $( "#slider" ).slider({
            min: 0,
            range: false,
            step: 0.001,
            max: 4,
            value: 0,
            animate:"slow",
            orientation: "horizontal",
            slide: function( event, ui ) {
                $(".value").text("How drunk will you get: " + ui.value.toFixed(1));
                input = ui.value.toFixed(1)
            }

        });
    });

    function textAppend(input) {
        if (0 <= input <=0.5) {
            $("#drunkness").text("Way Too Sober")
        } else if (0.5 < input <= 1) {
            $("#drunkness").text("Cheap Date")
        }else if (1 < input <= 2) {
            $("#drunkness").text("Tipsy")
        }else if (2 < input <= 3) {
            $("#drunkness").text("Drunk")
        } else if (3 < input <= 4) {
            $("#drunkness").text("David Drunk")
        }
    }

    setInterval(function(){
        textAppend(input)
      }, 500);


$("#drinks").on("click", function () {
    console.log(input)
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

