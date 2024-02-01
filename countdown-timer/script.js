"use strict";

// instances.
const newYearsDate = new Date("1 Jan 2022");

// import elements.
const daysElement = document.getElementById("countdown-days");
const hoursElement = document.getElementById("countdown-hours");
const minutesElement = document.getElementById("countdown-minutes");
const secondsElement = document.getElementById("countdown-seconds");


function countDownTimer() {
	const currentDate = new Date();

	const time = (newYearsDate - currentDate) / 1000;
	const days = Math.floor(time / (3600 * 24));
	const hours = Math.floor(time / 3600) % 24; 
	const minutes = Math.floor(time / 60) % 60;
	const seconds = Math.floor(time) % 60;

	daysElement.innerHTML = days;
	hoursElement.innerHTML = hours;
	minutesElement.innerHTML = minutes;
	secondsElement.innerHTML = seconds;	
}

countDownTimer();

setInterval(countDownTimer, 1000);
