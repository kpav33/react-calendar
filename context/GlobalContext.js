import React, { createContext } from "react";

const GlobalContext = createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCallEvent: ({ type, payload }) => {},
  selectedEvent: null,
  setSelectedEvent: () => {},
  savedEvents: [],
  setLabels: () => {},
  labels: [],
});

export default GlobalContext;
