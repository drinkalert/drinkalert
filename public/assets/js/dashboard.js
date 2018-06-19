
console.log("yolo dashboard.js!")

$(document).ready(function () {

    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value; // Display the default slider value
    var number = "1";
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function () {
        output.innerHTML = this.value;
        number = this.value
        textAppend(number)
    }

    // Using the slider value to change the display the name of the selected inebriation level.
    function textAppend(number) {
        if (number === "1") {
            $("#drunkness").text("Cheap Date")
        } else if (number === "2") {
            $("#drunkness").text("Buzzed Light Year")
        } else if (number === "3") {
            $("#drunkness").text("YOLO")
        } else if (number === "4") {
            $("#drunkness").text("Sleep through Saturday school (AKA David drunk)")
        }
    }

    // Click listener
    $("#drinks").on("click", function () {
        // Setting variables and ajax call to get recent user data for the BAC formula
        var name = $("#user").text().split("Welcome ")
        console.log(name[1])
        $.get("/api/dashboard/" + name[1], function (data) {
            console.log(data)
        }).then(function (data) {

            // Setting variables
            var userChoice = $("#1").val()
            var content;
            var ounces;
            if (userChoice === "0.05") {
                content = 0.05
                ounces = 12
            } else if (userChoice === "0.12") {
                content = 0.12
                ounces = 6
            } else if (userChoice === "0.4") {
                content = 0.4
                ounces = 2
            }

            var name = data.name
            var hours = $("#2").val()
            var genderConstant;
            if (data.sex === "m") {
                genderConstant = 0.68
            } else {
                genderConstant = 0.55
            }
            var weight = data.weight
            var bac = 0.03 * parseInt(number)
            // Function for determining how many drinks the user can have based on their selected inputs
            function howManyDrinks(w, x, y, z, a, b) {

                return (((w + (x * 0.015)) / 100) * (y * 453.59237 * z)) / (22.3677555 * a * b)

            }

            appendDrinkInfo(name, howManyDrinks(bac, hours, weight, genderConstant, content, ounces))

        });
        // Function for appending the results of the howManyDrinks function to the page.

        function appendDrinkInfo(x, y) {
            var div = $("<div>")
            div.append(`<h2> Pro tip ${x}, always round up. You can have ${parseFloat(Math.round(y * 100) / 100).toFixed(2)} drinks.</h2>`)

            $("#formula").text("")
            $("#formula").prepend(div)
        }

    });

})

