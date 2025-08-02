// alarm.js

let alarmTime = null; //creating a variable to store the alarm time
let alarmSet = false; // flag to indicate if the alarm is set
const alarmAudio = new Audio('alarm_15.mp3');
let alarmPlaying = false; // flag to indicate if the alarm is currently playing

function updateClock() { //Function to update the clock and check for alarm
    const now = new Date(); 

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    var currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    console.log(`Current time: ${hours}:${minutes}:${seconds} ${ampm}`);
    if (alarmSet && alarmTime) {
        if (currentTime === alarmTime) {// Check if it's time for the alarm
            console.log("Alarm ringing!"); 
            if (!alarmPlaying) {
                alarmPlaying = true;
                alarmAudio.play().catch(console.error);
                console.log("Alarm ringing!");
            }
            return; // Stop further execution if alarm is ringing
        }
    }
}

setInterval(updateClock, 400);

document.addEventListener('DOMContentLoaded', function () {
    const setAlarmButton = document.querySelector('.alarmButton');

    setAlarmButton.addEventListener('click', function () {
        var hours = document.getElementById('alarmHour').value;
        const minutes = document.getElementById('alarmMinute').value;
        const seconds = 0; // Default seconds to 0
        const ampm = document.getElementById('ampmSelect').value;

        if (hours === "" || minutes === "" || ampm === "") { //Check if any field is empty
            alert("Please enter hour, minute, and AM/PM.");
            return;
        }
        
        console.log(minutes);
    
        if (hours < 1 || hours > 12 || minutes < 0 || minutes > 59) {
            alert("Please enter a valid time.");
            return;
        }
        
        if (ampm == "PM") {
            hours = parseInt(hours, 10) + 12; // Convert PM hours to 24-hour format
        }

        console.log(`Set time: ${hours}:${minutes}:${seconds} ${ampm}`);
        alarmTime = `${hours.toString()}:${minutes.toString()}:${seconds} ${ampm}`; // Format the alarm time
        alarmSet = true;
        alert(`Alarm set for ${alarmTime}`);
    });

    const stopAlarmButton = document.getElementById('stopAlarm');
    stopAlarmButton.addEventListener('click', function () {
        if (alarmPlaying) {
            alarmAudio.pause();
            alarmAudio.currentTime = 0; // Reset the audio to the beginning
            alarmPlaying = false;
            console.log("Alarm stopped.");
        } else {
            console.log("No alarm is currently playing.");
        }
    });

});