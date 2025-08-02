function clock(){
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var today = new Date();
    document.getElementById("date").innerHTML = dayNames[today.getDay()] + " " + monthNames[today.getMonth()] + " " + today.getDate() + " " + today.getFullYear();

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = h<11 ? "AM" : "PM";
    h = h>11 ? h - 12 : h;
    if (h === 0) h = 12; // Convert 0 hour to 12 for AM/PM format
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    document.getElementById("hours").innerHTML = h; 
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
    document.getElementById("ampm").innerHTML = day;
} 

var inter = setInterval(clock,400)