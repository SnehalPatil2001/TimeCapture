var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Time 12 format
let time = new Date().getHours()<=12 ? 
new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds() + " AM" :
new Date().getHours()-12 + " : " + new Date().getMinutes() + " : " + new Date().getSeconds() + " PM";
console.log("Time in 12 hours format - " + time);

console.log("Time in 24 hours format - " + new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds());

// Year, Month, Date
console.log("Year : " + new Date().getFullYear() + "\nMonth : " + new Date().getMonth() + "\nDate : " + new Date().getDay());

// Day
console.log("Day : " + daylist[new Date().getDay()]);

// Greetings
let hours = new Date().getHours();
// Determine greeting based on the time of day
let greeting;
if (hours < 12) {
    greeting = "Good Morning";
} else if (hours < 18) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}
console.log(greeting);