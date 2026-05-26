// ===============================
// SIMPLE ENCRYPTION / DECRYPTION
// ===============================

// Shift each character by +1
function encryptName(name) {
    let result = "";

    for (let i = 0; i < name.length; i++) {
        result += String.fromCharCode(name.charCodeAt(i) + 1);
    }

    return result;
}

// Shift back by -1
function decryptName(name) {
    let result = "";

    for (let i = 0; i < name.length; i++) {
        result += String.fromCharCode(name.charCodeAt(i) - 1);
    }

    return result;
}

// Encrypt DOB
function encryptDOB(dob) {
    // 2006-07-14 -> 3117.18.25
    return dob
        .split("")
        .map(char => {
            if (!isNaN(char) && char !== "-") {
                return Number(char) + 1;
            }

            if (char === "-") {
                return ".";
            }

            return char;
        })
        .join("");
}

// Decrypt DOB
function decryptDOB(dob) {
    return dob
        .split("")
        .map(char => {
            if (!isNaN(char) && char !== ".") {
                return Number(char) - 1;
            }

            if (char === ".") {
                return "-";
            }

            return char;
        })
        .join("");
}

// ===============================
// READ URL
// ===============================

const params = new URLSearchParams(window.location.search);

const encryptedData = params.get("data");

// Default values
let name = "Mariya Babu";
let dob = "2006-07-14";

// If encrypted data exists
if (encryptedData) {

    // Decode base64
    const decoded = atob(encryptedData);

    // Split
    const parts = decoded.split("_");

    const encryptedName = parts[0];
    const encryptedDOB = parts[1];

    // Decrypt
    name = decryptName(encryptedName);
    dob = decryptDOB(encryptedDOB);
}

// ===============================
// SHOW NAME
// ===============================

document.querySelector("h2").innerHTML = `${name} 🔥`;

// ===============================
// NEXT BIRTHDAY COUNTDOWN
// ===============================

// DOB parts
const dobParts = dob.split("-");

const birthMonth = parseInt(dobParts[1]) - 1;
const birthDate = parseInt(dobParts[2]);

const now = new Date();

// Birthday this year
let nextBirthday = new Date(
    now.getFullYear(),
    birthMonth,
    birthDate,
    0,
    0,
    0
);

// If birthday already passed this year
if (nextBirthday < now) {
    nextBirthday.setFullYear(now.getFullYear() + 1);
}

// Countdown
var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = nextBirthday.getTime() - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);