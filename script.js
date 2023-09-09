// document.addEventListener('DOMContentLoaded', function () {
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const today = new Date();
//     const currentDay = daysOfWeek[today.getUTCDay()];
//     const currentUTCTime = today.getTime();

//     document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${currentDay}`;
//     document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${currentUTCTime}`;
// });

document.addEventListener('DOMContentLoaded', function () {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Function to update the current time
    function updateCurrentTime() {
        const today = new Date();
        const currentDay = daysOfWeek[today.getUTCDay()];
        const currentUTCTime = today.getTime();

        document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${currentDay}`;
        document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${currentUTCTime}`;
    }

    // Update the current time initially
    updateCurrentTime();

    // Set an interval to update the current time every second (1000 milliseconds)
    setInterval(updateCurrentTime, 1000);
});

