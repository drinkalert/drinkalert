$(function() {
// $(document).ready(function () {
      var showData = $('#show-data');
      var url = window.location.pathname;
      var id = url.substring(url.lastIndexOf('/') + 1);
      var name
      var weight
      var sex
  
      $.getJSON('/api/alcohol/', function (data) {
        console.log(data);
        for(var i=0; i<data.length; i++){
            console.log(data[i].name)
            $("#drink_menu").append("<option value="+data[i].alcohol_content+">"+data[i].name+"</option>")
        }
    })


    $.getJSON('/api/users/'+id, function (data) {
            console.log(data.sex)
            name = data.name
            weight = data.weight
            sex = data.sex
    })

  
console.log(id)

    // Click listener
    $("#drinks").on("click", function () {

        // Setting variables and ajax call to get recent user data for the BAC formula
        // var name = $("#user").text().split("Welcome ")
        // console.log(name[1])

        // $.post("/api/newdrinksession/" + name[1], function (data) {
        //     console.log(data)
        // }).then(function (data) {

            // Setting variables
            var userChoice = $("#drink_menu").val()
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
            var number = 1;
            //var name = data.name
            var hours = $("#2").val()
            var genderConstant;
            if (sex === "m") {
                genderConstant = 0.68
            } else {
                genderConstant = 0.55
            }
            var bac = 0.03 * parseInt(number)
            // Function for determining how many drinks the user can have based on their selected inputs
            function howManyDrinks(w, x, y, z, a, b) {

                return (((w + (x * 0.015)) / 100) * (y * 453.59237 * z)) / (22.3677555 * a * b)

            }
            var timer = 60
            var min = 0
            var sec = 0
            var clock;
            function startTimer() {
                min = parseInt(timer / 60)
                sec = parseInt(timer % 60)
                clock = min + ":" + sec

                if (timer < 0) {
                    timer = 0
                }
                timer--
                setTimeout(function () {
                    startTimer()
                }, 1000)
            }
            startTimer()


            appendDrinkInfo(name, howManyDrinks(bac, hours, weight, genderConstant, content, ounces), clock)

        });
        // Function for appending the results of the howManyDrinks function to the page.

        function appendDrinkInfo(x, y, z) {
            var div = $("<div>")
            div.append(`<h2> Pro tip ${x}, always round up. You can have ${parseFloat(Math.round(y * 100) / 100).toFixed(2)} drinks. Get going ${z}</h2>`)

            $("#formula").text("")
            $("#formula").prepend(div)
        }




})