function getCurrentAndPrevTime() {

    const date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour = (hour < 10) ? ("0" + hour) : hour;
    min = (min < 10) ? ("0" + min) : min;
    sec = (sec < 10) ? ("0" + sec) : sec;

    month = (month > 9) ? month : ("0" + month);
    day = (day < 10) ? ("0" + day) : day;
    const timeNow = year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;

    const newDateSec = date.valueOf() - 24 * 60 * 60 * 1000;
    const newDate = new Date(newDateSec);
    let newYear = newDate.getFullYear();
    let newMonth = newDate.getMonth() + 1;
    let newDay = newDate.getDate();

    newMonth = (newMonth > 9) ? newMonth : ("0" + newMonth);
    newDay = (newDay < 10) ? ("0" + newDay) : newDay;
    const timePrev = newYear + "-" + newMonth + "-" + newDay + " " + hour + ":" + min + ":" + sec;


    return [timePrev, timeNow];
}

function timeFormat(timeStr) {
    const date = new Date(timeStr);

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour = (hour < 10) ? ("0" + hour) : hour;
    min = (min < 10) ? ("0" + min) : min;
    sec = (sec < 10) ? ("0" + sec) : sec;
    month = (month > 9) ? month : ("0" + month);
    day = (day < 10) ? ("0" + day) : day;
    const timeFormatStr = year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;

    return timeFormatStr;
}

export { getCurrentAndPrevTime, timeFormat }