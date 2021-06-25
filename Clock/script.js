var  wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime =lunchtime+2;
var partytime;
var evening = 18;
// Getting it to show the current time on the page
function showCurrentTime(){
    // display the string on the page
    var clock =document .getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM"
    if(hours >= noon){
        meridian = "PM";
    }
    if (hours > noon){
        hours = hours -12;
    }
    // set minutes and seconds
    if (minutes < 10){
        minutes = "0"+minutes;
    }
    if (seconds < 10){
        seconds = "0"+seconds;
    }
    var clockTime = hours + ':' + minutes+ ':'+seconds+" "+meridian+"!";
    clock.innerText=clockTime;
    
}
var oneSecond = 1000;
setInterval(showCurrentTime,oneSecond);

var partyButton = document.getElementById("partyTimeButton");

//part Button Setting
function partyEvent()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyButton.innerText = "Party Over!";
        partyButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyButton.innerText = "Party Time!";
        partyButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);

// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);