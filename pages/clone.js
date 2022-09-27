import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";

import { getMonth } from "../utils/util";

import GlobalContext from "../context/GlobalContext";

import CalendarHeader from "../components/CalendarHeader";
import Sidebar from "../components/Sidebar";
import Month from "../components/Month";
import EventModal from "../components/EventModal.js";

export default function Clone() {
  // console.table(getMonth());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  // https://www.youtube.com/watch?v=KUKyTRYGrnU
  // https://github.com/3stbn/google-calendar-clone

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
      </nav>
      <React.Fragment>
        {showEventModal && <EventModal />}
        <div className="h-screen flex flex-col">
          <CalendarHeader />
          <div className="flex flex-1">
            <Sidebar />
            <Month month={currentMonth} />
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}
