/*
Taken from Youtube tutorial: https://www.youtube.com/watch?v=kn1bNLMTgdo
		Making a Calendar in Vanilla Javascript | Design a Simple Calendar for Your Blog and Website
		by Online Tutorials
*/

console.log('date.js loaded');
console.log('this is where the date should go...');

const lang = navigator.language;
let date = new Date();

let dayNumber = date.getDate();
let month = date.getMonth();
let dayName = date.toLocaleString(lang, { weekday: 'long' });
let monthName = date.toLocaleString(lang, { month: 'long' });
let year = date.getFullYear();

document.querySelector('.monthName').innerHTML = monthName;
document.querySelector('.dayName').innerHTML = dayName;
document.querySelector('.dayNumber').innerHTML = dayNumber;
document.querySelector('.year').innerHTML = year;

const hrs = document.querySelector(`#hrs`);
const min = document.querySelector(`#min`);
const sec = document.querySelector(`#sec`);

setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);