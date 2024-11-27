const getTimeUntilNewYearsInSeconds = function() {
    const newYearsDate = new Date("2025-01-01");
    const currentDate = new Date();

    return newYearsDate / 1000 - currentDate / 1000;
}

const getTimeUntilBirthdayAsSeconds = function() {
    const birthdayDate = new Date("2029-12-02");
    const currentDate = new Date();

    return birthdayDate / 1000 - currentDate / 1000;
}

const getCurrentTimeInSeconds = function() {
    const currentDateWithoutTime = new Date().setHours(0, 0, 0, 0);
    const currentDate = new Date();

    return currentDate / 1000 - currentDateWithoutTime / 1000;
}

$(function() {
    const timeUntilNewYearsAsSeconds = getTimeUntilNewYearsInSeconds();
    const timeUntilBirthdayAsSeconds = getTimeUntilBirthdayAsSeconds();
    const timeAsSeconds = getCurrentTimeInSeconds();

    $(".clock.new-years").FlipClock(timeUntilNewYearsAsSeconds, {clockFace: "DailyCounter"});
    $(".clock.birthday").FlipClock(timeUntilBirthdayAsSeconds, {clockFace: "DailyCounter"});
    $(".clock.normal").FlipClock(timeAsSeconds);
});