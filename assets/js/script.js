// Set the date and time when the element should be shown
const showDateTime = new Date('2024-11-22T4:39:00');

// Function to check the current date and time
function checkDateTime() {
    const currentDateTime = new Date();
    if (currentDateTime >= showDateTime) {
        document.getElementById('hiddenElement').style.display = 'block';
    }
}

// Check the date and time every second
setInterval(checkDateTime, 1000);