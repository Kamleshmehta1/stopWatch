const stopwatch = document.getElementById("display");

const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", startStopwatch);
pauseButton.addEventListener("click", stopStopwatch);
resetButton.addEventListener("click", resetStopwatch);

var hr = 0;
var min = 0;
var sec = 0;
var ms = 0;

var timestopped = true;

function startStopwatch() {
  if (timestopped) {
    timestopped = false;
    setTimeout(stopWatchCycle, 1000);
    showButton("PAUSE");
  }
}

function stopWatchCycle() {
  if (timestopped === false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec += 1;

    if (sec === 60) {
      min += 1;
      sec = 0;
    }

    if (min === 60) {
      hr += 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (hr < 10) {
      hr = "0" + hr;
    }

    //   let formattedhr = hr.toString().padStart(2, "0");
    //   let formattedmin = min.toString().padStart(2, "0");
    //   let formattedsec = sec.toString().padStart(2, "0");
    //   stopwatch.innerHTML = `${formattedhr}:${formattedmin}:${formattedsec}`;

    stopwatch.innerHTML = `${hr}:${min}:${sec}`;
    setTimeout(stopWatchCycle, 1000);
  }
}

function stopStopwatch() {
  if (timestopped === false) {
    timestopped = true;
    showButton("PLAY");
  }
}

function resetStopwatch() {
  stopwatch.innerHTML = "00:00:00";
  timestopped = true;
  hr = 0;
  min = 0;
  sec = 0;
  showButton("PLAY");
}

function showButton(buttonKey) {
  if (buttonKey === "PLAY") {
    playButton.style.display = "block";
    pauseButton.style.display = "none";
  } else {
    playButton.style.display = "none";
    pauseButton.style.display = "block";
  }
}
