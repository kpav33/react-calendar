import React, { useState, useEffect, useReducer } from "react";

import GlobalContext from "./GlobalContext";

import dayjs from "dayjs";

// Reducer function
function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}

const ISSERVER = typeof window === "undefined";

// Get stored events from local storage
function initEvents() {
  const storageEvents = !ISSERVER && localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

export default function ContextWrapper({ children }) {
  // This is the index you use for navigating through the big calendar
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  // This tracks the the current month on the small calendar
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  // Track the selected day in the small calendar
  const [daySelected, setDaySelected] = useState(dayjs());
  // Track open or close the event modal
  const [showEventModal, setShowEventModal] = useState(false);
  // Reducer
  const [savedEvents, dispatchCallEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  useEffect(() => {
    !ISSERVER &&
      localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

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
        showEventModal,
        setShowEventModal,
        dispatchCallEvent,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
