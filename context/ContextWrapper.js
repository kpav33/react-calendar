import React, { useState, useEffect } from "react";

import GlobalContext from "./GlobalContext";

import dayjs from "dayjs";

export default function ContextWrapper({ children }) {
  // This is the index you use for navigating through the big calendar
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  // This tracks the the current month on the small calendar
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  // Track the selected day in the small calendar
  const [daySelected, setDaySelected] = useState(dayjs());

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
