// document.addEventListener('DOMContentLoaded', function () {
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const today = new Date();
//     const currentDay = daysOfWeek[today.getUTCDay()];
//     const currentUTCTime = today.getTime();

//     document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${currentDay}`;
//     document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${currentUTCTime}`;
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//     function updateCurrentTime() {
//         const today = new Date();
//         const currentDay = daysOfWeek[today.getUTCDay()];
//         const currentUTCTime = today.getTime();

//         document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `${currentDay}`;
//         document.querySelector('[data-testid="currentUTCTime"]').textContent = `${currentUTCTime}`;
//     }

//     updateCurrentTime();
//     setInterval(updateCurrentTime, 1000);
// });

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the current date
const currentDate = new Date();

// Get the day of the week (0-6)
const dayOfWeekNumber = currentDate.getDay();

// Use the day of the week number to get the day's name
const dayOfWeekName = daysOfWeek[dayOfWeekNumber];

document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `${dayOfWeekName}`;


// console.log("Today is " + dayOfWeekName);


const specificDate = new Date();


const year = specificDate.getUTCFullYear();
const month = specificDate.getUTCMonth() + 1;
const day = specificDate.getUTCDate();
const hours = specificDate.getUTCHours();
const minutes = specificDate.getUTCMinutes();
const seconds = specificDate.getUTCSeconds();
const milliseconds = specificDate.getUTCMilliseconds();

// Display the components
document.querySelector('[data-testid="currentUTCTime"]').textContent=`${year}-${month}-${day} T${hours} : ${minutes} : ${seconds}.${milliseconds}Z`;


