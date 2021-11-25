console.log("kk lauwe shit");

// Retrieving Look At Me Elements
var lookAtNew = document.querySelector(".home section:first-of-type ul li:first-of-type p:first-of-type");
var lookAtRed = document.querySelector(".home section:first-of-type ul li:first-of-type");
var lookAtText = document.querySelector(".home section:first-of-type ul li:first-of-type h2");
var lookAtPlayButton = document.querySelector(".home section:first-of-type ul li:first-of-type img:first-of-type")
var lookAtPlayText = document.querySelector(".home section:first-of-type ul li:first-of-type p:nth-of-type(2)")

var lookAtAudio = new Audio("../audio/lookatme.mp3");

// Retrieving Look At Me Elements
var numbersUpNew = document.querySelector(".home section:first-of-type ul li:nth-of-type(2) p:first-of-type");
var numbersUpYellow = document.querySelector(".home section:first-of-type ul li:nth-of-type(2)");
var numbersUpText = document.querySelector(".home section:first-of-type ul li:nth-of-type(2) h2");
var numbersUpPlayButton = document.querySelector(".home section:first-of-type ul li:nth-of-type(2) img:first-of-type")
var numbersUpPlayText = document.querySelector(".home section:first-of-type ul li:nth-of-type(2) p:nth-of-type(2)")

var numbersUpAudio = new Audio("../audio/numbersup.mp3");

// Retrieving Look At Me Elements
var whatGoesNew = document.querySelector(".home section:first-of-type ul li:nth-of-type(3) p:first-of-type");
var whatGoesBlue = document.querySelector(".home section:first-of-type ul li:nth-of-type(3)");
var whatGoesText = document.querySelector(".home section:first-of-type ul li:nth-of-type(3) h2");
var whatGoesPlayButton = document.querySelector(".home section:first-of-type ul li:nth-of-type(3) img:first-of-type")
var whatGoesPlayText = document.querySelector(".home section:first-of-type ul li:nth-of-type(3) p:nth-of-type(2)")

var whatGoesAudio = new Audio("../audio/whatgoesletgo.mp3");

// Caroussel Shit
var carousselElement = document.querySelector(".home section:nth-of-type(2) img");
var leftArrowElement = document.querySelector(".home section:nth-of-type(2) button:first-of-type");
var rightArrowElement = document.querySelector(".home section:nth-of-type(2) button:nth-of-type(2)");

// Look At Me
function lookAtAudioPlay() {
    lookAtAudio.play();
}

function stopLookAtAudioPlay() {
    lookAtAudio.pause();
    lookAtAudio.currentTime = 0;
}

function lookAtMePlay() {
    lookAtNew.classList.toggle("hide");
    lookAtRed.classList.toggle("playsingle");
    lookAtText.classList.toggle("goingUp");
    lookAtPlayText.classList.toggle("hide");

    numbersUpNew.classList.remove("hide");
    numbersUpYellow.classList.remove("playsingle");
    numbersUpText.classList.remove("goingUp");
    numbersUpPlayText.classList.remove("hide");
    whatGoesNew.classList.remove("hide");
    whatGoesBlue.classList.remove("playsingle");
    whatGoesText.classList.remove("goingUp");
    whatGoesPlayText.classList.remove("hide");


    if (lookAtRed.classList.contains("playsingle")) {
        lookAtAudioPlay();
        lookAtPlayButton.src = "../images/pause.png";
        whatGoesPlayButton.src = "../images/play.png";
        numbersUpPlayButton.src = "../images/play.png";
    } else {
        stopLookAtAudioPlay();
        lookAtPlayButton.src = "../images/play.png";
    }

    stopNumbersUpAudioPlay();
    stopWhatGoesAudioPlay();
}

lookAtRed.addEventListener("click", lookAtMePlay);

// Numbers Up
function numbersUpAudioPlay() {
    numbersUpAudio.play();
}

function stopNumbersUpAudioPlay() {
    numbersUpAudio.pause();
    numbersUpAudio.currentTime = 0;
}

function numbersUpPlay() {
    numbersUpNew.classList.toggle("hide");
    numbersUpYellow.classList.toggle("playsingle");
    numbersUpText.classList.toggle("goingUp");
    numbersUpPlayText.classList.toggle("hide");


    whatGoesNew.classList.remove("hide");
    whatGoesBlue.classList.remove("playsingle");
    whatGoesText.classList.remove("goingUp");
    whatGoesPlayText.classList.remove("hide");
    lookAtNew.classList.remove("hide");
    lookAtRed.classList.remove("playsingle");
    lookAtText.classList.remove("goingUp");
    lookAtPlayText.classList.remove("hide");

    if (numbersUpYellow.classList.contains("playsingle")) {
        numbersUpAudioPlay();
        numbersUpPlayButton.src = "../images/pause.png";
        lookAtPlayButton.src = "../images/play.png";
        whatGoesPlayButton.src = "../images/play.png";
    } else {
        stopNumbersUpAudioPlay();
        numbersUpPlayButton.src = "../images/play.png";
    }

    stopLookAtAudioPlay();
    stopWhatGoesAudioPlay();
}

numbersUpYellow.addEventListener("click", numbersUpPlay);

// What Goes, Let Go
function whatGoesAudioPlay() {
    whatGoesAudio.play();
}

function stopWhatGoesAudioPlay() {
    whatGoesAudio.pause();
    whatGoesAudio.currentTime = 0;
}

function whatGoesPlay() {
    whatGoesNew.classList.toggle("hide");
    whatGoesBlue.classList.toggle("playsingle");
    whatGoesText.classList.toggle("goingUp");
    whatGoesPlayText.classList.toggle("hide");

    numbersUpNew.classList.remove("hide");
    numbersUpYellow.classList.remove("playsingle");
    numbersUpText.classList.remove("goingUp");
    numbersUpPlayText.classList.remove("hide");
    lookAtNew.classList.remove("hide");
    lookAtRed.classList.remove("playsingle");
    lookAtText.classList.remove("goingUp");
    lookAtPlayText.classList.remove("hide");

    if (whatGoesBlue.classList.contains("playsingle")) {
        whatGoesAudioPlay();
        whatGoesPlayButton.src = "../images/pause.png";
        lookAtPlayButton.src = "../images/play.png";
        numbersUpPlayButton.src = "../images/play.png";
    } else {
        stopWhatGoesAudioPlay();
        whatGoesPlayButton.src = "../images/play.png";
    }

    stopLookAtAudioPlay();
    stopNumbersUpAudioPlay();
}

whatGoesBlue.addEventListener("click", whatGoesPlay);