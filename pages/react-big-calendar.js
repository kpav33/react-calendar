import React from "react";
import Link from "next/link";

import styles from "../styles/ReactBigCalendar.module.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/fr";

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      //   events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);

// https://jquense.github.io/react-big-calendar/examples/?path=/story/about-big-calendar--page
// Not that useful for your needs, better to work more on the already created google calendar clone and adjust that for your needs

export default function ReactBigCalendar() {
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
        <MyCalendar culture="fr" />
      </div>
    </div>
  );
}
