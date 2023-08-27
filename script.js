document.addEventListener('DOMContentLoaded', function () {
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var tens = 0;
    var appendHours = document.getElementById("hours");
    var appendMinutes = document.getElementById("minutes");
    var appendSeconds = document.getElementById("seconds");
    var appendTens = document.getElementById("tens");
    var buttonStart = document.getElementById("Start");
    var buttonStop = document.getElementById("Stop");
    var buttonReset = document.getElementById("Reset");

    var Interval;

    buttonStart.addEventListener('click', function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    });

    buttonStop.addEventListener('click', function () {
        clearInterval(Interval);
    });

    buttonReset.addEventListener('click', function () {
        clearInterval(Interval);
        hours = 0;
        minutes = 0;
        seconds = 0;
        tens = 0;
        updateDisplay();
    });

    function startTimer() {
        tens++;
        if (tens > 99) {
            seconds++;
            tens = 0;
        }
        if (seconds > 59) {
            minutes++;
            seconds = 0;
        }
        if (minutes > 59) {
            hours++;
            minutes = 0;
        }
        updateDisplay();
    }

    function updateDisplay() {
        appendHours.textContent = hours < 10 ? "0" + hours : hours;
        appendMinutes.textContent = minutes < 10 ? "0" + minutes : minutes;
        appendSeconds.textContent = seconds < 10 ? "0" + seconds : seconds;
        appendTens.textContent = tens < 10 ? "0" + tens : tens;
    }
});
