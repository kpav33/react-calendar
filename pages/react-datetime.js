import React from "react";
import Link from "next/link";

import styles from "../styles/Datetime.module.css";
import "react-datetime/css/react-datetime.css";

import Datetime from "react-datetime";
import moment from "moment";
// import "moment/locale/fr";
import "moment/locale/sl";

export default function ReactDatetime() {
  // Below we have all the props that we can use with the <DateTime> component. There are also some methods that can be used imperatively.
  // value => Represents the selected date by the component, in order to use it as a controlled component. This prop is parsed by Moment.js, so it is possible to use a date string or a moment object.
  // input => Whether to show an input field to edit the date manually.
  // open => Whether to open or close the picker. If not set react-datetime will open the datepicker on input focus and close it on click outside.
  // locale => Manually set the locale for the react-datetime instance. Moment.js locale needs to be loaded to be used, see i18n docs.
  // onChange => Callback trigger when the date changes. The callback receives the selected moment object as only parameter, if the date in the input is valid. If the date in the input is not valid, the callback receives the value of the input (a string).
  // onOpen, onClose => Callback trigger for when the user opens/closes the datepicker.
  // isValidDate => Define the dates that can be selected. The function receives (currentDate, selectedDate) and shall return a true or false whether the currentDate is valid or not. See selectable dates.
  // timeConstraints => Add some constraints to the timepicker. It accepts an object with the format { hours: { min: 9, max: 15, step: 2 }}, this example means the hours can't be lower than 9 and higher than 15, and it will change adding or subtracting 2 hours everytime the buttons are clicked. The constraints can be added to the hours, minutes, seconds and milliseconds.
  // onBeforeNavigate => Allows to intercept a change of the calendar view. The accepted function receives the view that it's supposed to navigate to, the view that is showing currently and the date currently shown in the view. Return a viewMode ( default ones are years, months, days or time) to navigate to it. If the function returns a "falsy" value, the navigation is stopped and we will remain in the current view.

  const yesterday = moment().subtract(1, "day");
  const valid = (current) => {
    // return current.isAfter(yesterday);
    return (
      current.day() !== 0 && current.day() !== 6 && current.isAfter(yesterday)
    );
  };

  return (
    <div>
      <nav style={{ display: "flex", gap: "10px", margin: "20px 10px" }}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/clone">
          <a>Clone</a>
        </Link>
        <Link href="/react-datetime">
          <a>React-datetime</a>
        </Link>
        <Link href="/react-big-calendar">
          <a>React-big-calendar</a>
        </Link>
      </nav>
      <div className={styles.center}>
        <Datetime
          input={true}
          open
          locale="sl"
          onChange={(date) => console.log("Date changed! ", date._d)}
          isValidDate={valid}
          timeConstraints={{ hours: { min: 9, max: 15, step: 1 } }}
          // Intercept and disable change of the calendar view
          // This way only daily view mode is enabled
          onBeforeNavigate={() => false}
        />
      </div>
    </div>
  );
}
