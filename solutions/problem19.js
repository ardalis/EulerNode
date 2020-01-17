'use strict';

/*

You are given the following information, but you may prefer to do some research for 
yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
1900 is not a leap year; 2000 is.

How many Sundays fell on the first of the month during the twentieth 
century (1 Jan 1901 to 31 Dec 2000)?

We could use a date library but that seems like cheating.
*/

const monthDays = [
    31, // January
    28, // February
    31, // March
    30, // April
    31, // May
    30, // June
    31, // July
    31, // August
    30, // September
    31, // October
    30, // November
    31, // December
];

const weekDays = [
    0, // Monday
    1, // Tuesday
    2, // Wednesday
    3, // Thursday
    4, // Friday
    5, // Satuday
    6, // Sunday
];

function Solution() {
    Solution.prototype.getDays = function(monthIndex, year){
        var days = monthDays[monthIndex];
        if(year > 1900 && year % 4 == 0 && monthIndex == 1)
        {
            days++;
        }
        return days;
    }

    Solution.prototype.solve = function() {
        var currentYear = 1900;
        let currentMonth = 0; // January
        let currentWeekDay = 0;
        let sundayCount = 0;

        while(currentYear < 2001) {
            console.log(currentYear);
            currentMonth = 0;
            for(let monthIndex=0;monthIndex<monthDays.length;monthIndex++) {
                currentMonth++;
                currentWeekDay = (currentWeekDay + this.getDays(monthIndex, currentYear)) % 7;
                console.log(currentWeekDay);
                if(currentWeekDay > 6) throw error("currentWeekDay out of range");
                if(currentWeekDay == 6) {
                    if(currentYear > 1900) { // start counting in 1901
                        sundayCount++;
                    }
                }
            }
            currentYear++;
        }
        return sundayCount;
    };
}

module.exports = Solution;