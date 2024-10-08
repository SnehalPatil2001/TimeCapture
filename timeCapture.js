var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// Display the current day
let time = new Date().getHours()<=12 ? 
new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds() + " AM" :
new Date().getHours()-12 + " : " + new Date().getMinutes() + " : " + new Date().getSeconds() + " PM";
console.log("Time : " + time + ".");
console.log("Year : " + new Date().getFullYear() + "\nMonth : " + new Date().getMonth() + "\nDate : " + new Date().getDay());
console.log("Day : " + daylist[new Date().getDay()]);
