// Ophalen van alle elementen van Look At Me
const lookAtNew = document.querySelector(".home section:first-of-type ul li:first-of-type p:first-of-type");
const lookAtRed = document.querySelector(".home section:first-of-type ul li:first-of-type");
const lookAtText = document.querySelector(".home section:first-of-type ul li:first-of-type h1");
const lookAtPlayButton = document.querySelector(".home section:first-of-type ul li:first-of-type img:first-of-type")
const lookAtPlayText = document.querySelector(".home section:first-of-type ul li:first-of-type p:nth-of-type(2)")

const lookAtAudio = new Audio("audio/lookatme.mp3");

// Ophalen van alle elementen van Numbers Up
const numbersUpNew = document.querySelector(".home section:first-of-type ul li:nth-of-type(2) p:first-of-type");
const numbersUpYellow = document.querySelector(".home section:first-of-type ul li:nth-of-type(2)");
const numbersUpText = document.querySelector(".home section:first-of-type ul li:nth-of-type(2) h1");
const numbersUpPlayButton = document.querySelector(".home section:first-of-type ul li:nth-of-type(2) img:first-of-type")
const numbersUpPlayText = document.querySelector(".home section:first-of-type ul li:nth-of-type(2) p:nth-of-type(2)")

const numbersUpAudio = new Audio("audio/numbersup.mp3");

// Ophalen van alle elementen van What Goes, Let Go
const whatGoesNew = document.querySelector(".home section:first-of-type ul li:nth-of-type(3) p:first-of-type");
const whatGoesBlue = document.querySelector(".home section:first-of-type ul li:nth-of-type(3)");
const whatGoesText = document.querySelector(".home section:first-of-type ul li:nth-of-type(3) h1");
const whatGoesPlayButton = document.querySelector(".home section:first-of-type ul li:nth-of-type(3) img:first-of-type")
const whatGoesPlayText = document.querySelector(".home section:first-of-type ul li:nth-of-type(3) p:nth-of-type(2)")

const whatGoesAudio = new Audio("audio/whatgoesletgo.mp3");


// Credit van deze code gaat naar je boy Sam Slotemaker TM (slimmer dan ik)

// Ophalen van alle elementen met de class animate
const allSections = document.querySelectorAll(".animate");

// De Requirements om de class er uiteindelijk op te laten zetten:
// rootMargin -> vanaf 20px gaat JS checken
// treshold -> de hoeveelheid van het item dat in beeld moet zijn om getriggerd te worden
const options = {
    rootMargin: "20px",
    treshold: 0.5
}

// callback functie wordt uitgevoerd wanneer het element in of uit beeld gaat
function callbackFunction(entries) {
    // over alle elementen heenlopen
    entries.forEach(entry => {
        // checken of het element in beeld is
        if (entry.intersectionRatio > 0){
            // class toevoegen zodra deze in beeld is
            entry.target.classList.add("fade");
        }
    })
}

const observer = new IntersectionObserver(callbackFunction, options);

// over alle elementen heenlopen
allSections.forEach(item => {
    // het element observeren
    observer.observe(item);
})






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
    lookAtText.classList.toggle("goingup");
    lookAtPlayText.classList.toggle("hide");

    numbersUpNew.classList.remove("hide");
    numbersUpYellow.classList.remove("playsingle");
    numbersUpText.classList.remove("goingup");
    numbersUpPlayText.classList.remove("hide");
    whatGoesNew.classList.remove("hide");
    whatGoesBlue.classList.remove("playsingle");
    whatGoesText.classList.remove("goingup");
    whatGoesPlayText.classList.remove("hide");


    if (lookAtRed.classList.contains("playsingle")) {
        lookAtAudioPlay();
        lookAtPlayButton.src = "images/pause.png";
        whatGoesPlayButton.src = "images/play.png";
        numbersUpPlayButton.src = "images/play.png";
    } else {
        stopLookAtAudioPlay();
        lookAtPlayButton.src = "images/play.png";
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
    numbersUpText.classList.toggle("goingup");
    numbersUpPlayText.classList.toggle("hide");


    whatGoesNew.classList.remove("hide");
    whatGoesBlue.classList.remove("playsingle");
    whatGoesText.classList.remove("goingup");
    whatGoesPlayText.classList.remove("hide");
    lookAtNew.classList.remove("hide");
    lookAtRed.classList.remove("playsingle");
    lookAtText.classList.remove("goingup");
    lookAtPlayText.classList.remove("hide");

    if (numbersUpYellow.classList.contains("playsingle")) {
        numbersUpAudioPlay();
        numbersUpPlayButton.src = "images/pause.png";
        lookAtPlayButton.src = "images/play.png";
        whatGoesPlayButton.src = "images/play.png";
    } else {
        stopNumbersUpAudioPlay();
        numbersUpPlayButton.src = "images/play.png";
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
    whatGoesText.classList.toggle("goingup");
    whatGoesPlayText.classList.toggle("hide");

    numbersUpNew.classList.remove("hide");
    numbersUpYellow.classList.remove("playsingle");
    numbersUpText.classList.remove("goingup");
    numbersUpPlayText.classList.remove("hide");
    lookAtNew.classList.remove("hide");
    lookAtRed.classList.remove("playsingle");
    lookAtText.classList.remove("goingUp");
    lookAtPlayText.classList.remove("hide");

    if (whatGoesBlue.classList.contains("playsingle")) {
        whatGoesAudioPlay();
        whatGoesPlayButton.src = "images/pause.png";
        lookAtPlayButton.src = "images/play.png";
        numbersUpPlayButton.src = "images/play.png";
    } else {
        stopWhatGoesAudioPlay();
        whatGoesPlayButton.src = "images/play.png";
    }

    stopLookAtAudioPlay();
    stopNumbersUpAudioPlay();
}

whatGoesBlue.addEventListener("click", whatGoesPlay);

