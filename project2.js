//variables
let startstopBtn = document.getElementById('startstopbtn');
let resetBtn = document.getElementById('reset');
//time variables
let seconds=0;
let minutes=0;
let hours=0;
//variables for leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//variables for setinterval & timerstatus
let timerInterval = null;
let timerstatus = "stopped" ;

//timer function
function stopwatch()
{
    seconds++;
    if(seconds / 60 ===1)
    {
        seconds = 0;
        minutes++ ;
    }
    if(minutes / 60 ===1)
    {
        minutes = 0;
        hours++ ;
    }
    if(seconds < 10)
    {
        leadingSeconds = "0" + seconds.toString();
    }
    else{
        leadingSeconds = seconds;
    }
    if(minutes < 10)
    {
        leadingMinutes = "0" + minutes.toString();
    }
    else{
        leadingMinutes = minutes;
    }
    if(hours < 10)
    {
        leadingHours = "0" + hours.toString();
    }
    else{
        leadingHours = hours;
    }

    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds ;
}



startstopBtn.addEventListener('click', function(){
    if(timerstatus === "stopped")
    {
        timerInterval = window.setInterval(stopwatch,900);
        document.querySelector('#startstopbtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerstatus = "started";
    }
    else{
         timerInterval = window.clearInterval(timerInterval);
        document.querySelector('#startstopbtn').innerHTML =`<i class="fa-solid fa-play" id="play"></i>`;
        timerstatus = "stopped";
    } 


});

resetBtn.addEventListener('click' , function(){
       window.clearInterval(timerInterval);
       seconds = 0;
       minutes = 0;
       hours = 0;

       document.getElementById('timer').innerHTML = "00:00:00" ;
});