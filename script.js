const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the current date
const currentDate = new Date();

// Get the day of the week (0-6)
const dayOfWeekNumber = currentDate.getDay();

// Use the day of the week number to get the day's name
const dayOfWeekName = daysOfWeek[dayOfWeekNumber];

document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `${dayOfWeekName}`;


// console.log("Today is " + dayOfWeekName);


function displayCurrentUTCTime() {
    setInterval(function () {
        const currentTimeInMilliseconds = new Date().getTime();
        document.querySelector('[data-testid="currentUTCTime"]').textContent = `${currentTimeInMilliseconds}`;
    }, 1000); // Update every 1000 milliseconds (1 second)
}

// Start displaying the current UTC time
displayCurrentUTCTime();

