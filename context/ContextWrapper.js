import React, { useState, useEffect, useReducer, useMemo } from "react";

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
  // Track currently selected event
  const [selectedEvent, setSelectedEvent] = useState(null);
  // Track labels
  const [labels, setLabels] = useState([]);
  // Reducer
  const [savedEvents, dispatchCallEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  // Filter events by label
  const filteredEvents = useMemo(() => {
    return savedEvents.filter((evt) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(evt.label)
    );
  }, [savedEvents, labels]);

  // Store events in local storage
  useEffect(() => {
    !ISSERVER &&
      localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  // Create labels that can be either selected or unselected
  useEffect(() => {
    setLabels((prevLabels) => {
      return [...new Set(savedEvents.map((evt) => evt.label))].map((label) => {
        const currentLabel = prevLabels.find((lbl) => lbl.label === label);
        return {
          label,
          checked: currentLabel ? currentLabel.checked : true,
        };
      });
    });
  }, [savedEvents]);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  // Clean up selected event
  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  // Change labels from checked or unchecked
  function updateLabel(label) {
    setLabels(labels.map((lbl) => (lbl.label === label.label ? label : lbl)));
  }

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
        selectedEvent,
        setSelectedEvent,
        savedEvents,
        labels,
        setLabels,
        updateLabel,
        filteredEvents,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
