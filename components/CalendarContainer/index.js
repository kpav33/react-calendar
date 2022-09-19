import React, { useState, useEffect } from "react";
import styles from "./CalendarContainer.module.css";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarContainer(
  {
    // arrayDates,
    // selectDate,
    // value,
    // onChange,
  }
) {
  const [mounted, setMounted] = useState(false);
  const [value, onChange] = useState(new Date());

  const [arrayDates, setArrayDates] = useState([
    "2022-09-28T22:00:00.000Z",
    "2022-10-01T22:00:00.000Z",
    "2022-10-18T22:00:00.000Z",
    "2022-11-05T23:00:00.000Z",
  ]);

  // console.log(value);

  let date = new Date();
  let maxDate = date.setDate(date.getDate() + 60);
  // console.log(new Date(maxDate));

  // Disable tuesday, friday, weekends

  // const arrayDates = [
  //   "2022-09-28T22:00:00.000Z",
  //   "2022-10-01T22:00:00.000Z",
  //   "2022-10-18T22:00:00.000Z",
  //   "2022-11-05T23:00:00.000Z",
  // ];
  // console.log(new Date("2022-09-28T22:00:00.000Z"));
  // console.log(arrayDates);

  const tileDisabled = ({ activeStartDate, date, view }) => {
    // console.log(date.getTime());
    // console.log(date.getDay());
    // return date < new Date();
    // return date.getTime() === new Date("2022-09-28T22:00:00.000Z").getTime();

    // Check array for already reserved days and disabled the calendar on non working days (tusday, friday, weekends)
    return arrayDates.some(
      (element) =>
        new Date(element).getTime() === date.getTime() ||
        date.getDay() === 2 ||
        date.getDay() === 5 ||
        date.getDay() === 6 ||
        date.getDay() === 0
    );
  };

  const selectDate = () => {
    // arrayDates.push(value.toISOString());
    setArrayDates((prevDates) => [...prevDates, value.toISOString()]);
    // console.log(arrayDates);
    console.log("Date selected successfully!");
    // console.log(value);
    // tileDisabled();
  };

  // console.log(value);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use locale prop to change the language of the calendar
  // maxDate => Maximum date that the user can select. Periods partially overlapped by maxDate will also be selectable, although React-Calendar will ensure that no later date is selected.
  // minDate => Minimum date that the user can select. Periods partially overlapped by minDate will also be selectable, although React-Calendar will ensure that no earlier date is selected.
  // maxDetail => The most detailed view that the user shall see. View defined here also becomes the one on which clicking an item will select a date and pass it to onChange. Can be "month", "year", "decade" or "century".
  // minDetail => The least detailed view that the user shall see. Can be "month", "year", "decade" or "century".
  // onChange => Function called when the user clicks an item (day on month view, month on year view and so on) on the most detailed view available.
  // showNavigation => Whether a navigation bar with arrows and title shall be rendered.
  // showNeighboringMonth => Whether days from previous or next month shall be rendered if the month doesn't start on the first day of the week or doesn't end on the last day of the week, respectively.
  // selectRange => Whether the user shall select two dates forming a range instead of just one. Note: This feature will make React-Calendar return array with two dates regardless of returnValue setting.
  // value => Calendar value. Can be either one value or an array of two values. If you wish to use React-Calendar in an uncontrolled way, use defaultValue instead.

  return (
    <div className={styles.container}>
      <div>
        {mounted && (
          <Calendar
            onChange={onChange}
            value={value}
            locale="sl-SL"
            maxDate={new Date(maxDate)}
            minDate={new Date()}
            minDetail="year"
            // showNavigation={false}
            // showNeighboringMonth={false}
            // selectRange={true}
            tileDisabled={tileDisabled}
            // onClickDay={(date) => console.log("You clicked me! ", date)}
            // onClickDay={() => selectDate()}
          />
        )}
        <button onClick={selectDate}>Select date</button>
      </div>
    </div>
  );
}
