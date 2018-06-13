var introBurb = new Audio ("assets/audio/introBurp.mp3");
var buttonBurp = new Audio ("assets/audio/buttonBurp.mp3");

setTimeout(oneSecond, 1000); 

function oneSecond() {
    // $('#intro-burp').append();
    console.log("burp greeting");
    introBurb.play();
}

$("#beerButton").click(function() {
    buttonBurp.play();
    setTimeout(function() { window.location = '/login' }, 1000);
    
    console.log("loadme")
});

