// Return the day of the week for the ginven date.
function daysOfTheWeek(date) {
    const daysOfTheWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return daysOfTheWeek[date.getDay()];
}

// Returns a greeting for the given date.
function greeting(date) {
    let now = new Date(date);
    console.log(now.toDateString())
    return `Hello, world! Happy ${daysOfTheWeek(now)}.`;
}