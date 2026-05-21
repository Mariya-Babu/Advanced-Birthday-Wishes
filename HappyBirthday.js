// Get URL parameters
const params = new URLSearchParams(window.location.search);

// Default values
const defaultName = "Mariya Babu";
const defaultDOB = "July 14 2027";

// Read values from URL or use defaults
const name = params.get("name") || defaultName;
const dob = params.get("dob") || defaultDOB;

// Show name in HTML
document.querySelector("h2").innerHTML = `${name} 🔥`;

// Countdown Date
var count = new Date(dob + " 00:00:00").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = count - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
    }

}, 1000);