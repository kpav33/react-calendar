import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
  // Pass current month to the function
  month = Math.floor(month);
  // Get current year from the dayjs library
  const year = dayjs().year();
  // Returns num between 0 and 6 that tells you with which day the month starts
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();

  // Create the data for the days matrix of the calendar
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });

  return daysMatrix;
}
