$(document).ready(function () {

    // Send the PUT request.
    // $.ajax("/api/drink/", {
    //     type: "GET",
    //     dataType: "json",
    //     data: newDrinks
    //     }).then( function(newDrinks) {
    //         console.log(newDrinks); 
    //     })
    $('#myCarousel').carousel({
		interval:   4000
	});
	
	var clickEvent = false;
	$('#myCarousel').on('click', '.nav a', function() {
			clickEvent = true;
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.nav').children().length -1;
			var current = $('.nav li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.nav li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
 
    $.getJSON('/api/alcohol/', function (data) {
        
        for(var i=0; i<data.length; i++){
            console.log(data[i].name)
            $("#drink_menu").append("<option data-ounces="+ data[i].ounces +" value="+data[i].alcohol_content+">"+data[i].name+"</option>")
        }
    })

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

    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);

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
        $.get("/api/users/" + id, function (data) {
            
        }).then(function (data) {
            console.log(data.name)
            $("#user").text(`Welcome ${ data.name }`)

            // Setting variables
            //var userChoice 
            var userChoice = $("#drink_menu").val()
            var ounces;
	    var content;
//             $("#drink_menu :selected").each(function(){
//                ounces = $(this).data('ounces')
//             })
    

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
            console.log(weight)
            var bac = 0.03 * parseInt(number)

            // Function for determining how many drinks the user can have based on their selected inputs
            function howManyDrinks(w, x, y, z, a, b) {
                var result = (((w + (x * 0.015)) / 100) * (y * 453.59237 * z)) / (22.3677555 * a * b)
               
               console.log(`w ${w}`)
               console.log(x)
               console.log(y)
               console.log(z)
               console.log(a)
               console.log(b)
               
                console.log(`result ${result}`)
                
                return result

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
