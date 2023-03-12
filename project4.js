let startStopBtn = document.getElementById("startStopBtn");
let resetBtn = document.getElementById("resetBtn");
let seconds = 00;
let minutes = 00;
let hours = 00;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null;
let timerStatus = 'stopped';

function stopWatch(){

    seconds++;

    if (seconds / 60 === 1){
        seconds = 0;
        minutes++;
        if (minutes/60 === 1){
            minutes = 0;
            hours++;
        }
    }
    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString();
    }else{
        leadingSeconds = seconds
    }
    
    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString();
    }else{
        leadingMinutes = minutes;
    }
    
    if(hours < 10){
        leadingHours = "0" + hours.toString();
    } else{
        leadingHours = hours;
    }
    document.getElementById('timer').innerText = leadingHours + ":"+ leadingMinutes+":"+ leadingSeconds;
}

startStopBtn.addEventListener('click', function(){
    if(timerStatus == "stopped"){
        timerInterval = window.setInterval(stopWatch, 0.2);
        document.getElementById('startStopBtn').innerText = 'STOP';
        timerStatus = 'started';
    } else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerText = "START"
        timerStatus = 'stopped';
    }
})

resetBtn.addEventListener('click', function(){

    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML="00:00:00";
    document.getElementById('startStopBtn').innerText = "START";

})
