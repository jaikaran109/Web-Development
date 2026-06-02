let myDate = new Date(); 
// console.log(myDate);   // return todays date  -- 2026-06-02T18:20:10.290Z
// console.log(myDate.toString()); // return day , date and  time  --  Tue Jun 02 2026 23:50:10 GMT+0530 (India Standard Time)
// console.log(myDate.toJSON()); // formate -- 2026-06-02
// console.log(myDate.toDateString()); // formate -- Tue Jun 02 2026
// console.log(myDate.toTimeString());  // formate -- 23:50:53 GMT+0530 (India Standard Time) -- returns the exact time

// console.log(myDate.getFullYear()); // returns the current year
// console.log(myDate.getMonth()); // returns the current month (0-11) -- 0 for January, 1 for February, and so on.
// console.log(myDate.getDate()); // returns the current day of the month (1-31)



console.log("--------------------------------------------------------------------------");




let myCreatedDate = new Date(2020, 0, 1, 12, 0, 0, 0);
// console.log(myCreatedDate);   // new Date(year, month, day, hours, minutes, seconds, milliseconds)
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toJSON());
// console.log(myCreatedDate.toLocaleString());  // formate -- 1/1/2020, 12:00:00 pm
// console.log(myCreatedDate.toDateString());    // Wed Jan 01 2020
// console.log(myCreatedDate.toTimeString());    // 12:00:00 GMT+0530 (India Standard Time)


// console.log(myCreatedDate.getFullYear());  //  year
// console.log(myCreatedDate.getMonth());    //  month
// console.log(myCreatedDate.getDate());     // returns date


myCreatedDate = new Date("2034-01-15");
// console.log(myCreatedDate.toString());   // Sun Jan 15 2034 05:30:00 GMT+0530 (India Standard Time)
// console.log(myCreatedDate.toJSON());     // 2034-01-15T00:00:00.000Z
// console.log(myCreatedDate.toLocaleString());  // 15/1/2034, 5:30:00 am



myCreatedDate = new Date("01-12-2003");
// console.log(myCreatedDate.toString());   //Sun Jan 12 2003 00:00:00 GMT+0530 (India Standard Time)

console.log(Date.now());      // Date.now() returns the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC (the Unix Epoch) up to the current moment.
console.log(Math.floor(Date.now() / 1000));   // in Seconds

