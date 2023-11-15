/**
 * DateSelector is a component for displaying a calendar view of a current date.
 */
import { useState } from "react";
import { startOfMonth, getDay, getDaysInMonth } from "date-fns";
import "./DateSelector.css";
// calendar has 7 columns and 4 or 5 rows
const DateSelector = ({ currentDate, onChange }) => {
  // TODO: localize this one day
  //   TODO: first day of week isn't always sunday.
  const DAYS_OF_WEEK = ["Su", "M", "T", "W", "Th", "F", "Sa"];
  const DAY_PADDING = [0, 1, 2, 3, 4, 5];
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const firstDayOfMonth = startOfMonth(currentDate);
  const dayOfTheWeek = getDay(firstDayOfMonth);
  const startOfMonthPaddding = DAY_PADDING.slice(0, dayOfTheWeek);
  const [selectedDay, setSelectedDay] = useState("");
  const updateSelectedDay = (event) => {
    setSelectedDay(event.target.innerText);
  };
  console.log(dayOfTheWeek);

  const totalDays = getDaysInMonth(currentDate);
  const dayArray = days.slice(0, totalDays);
  return currentDate ? (
    <span className="dateSelector">
      <span className="month">
        {/* arrow functions have minimalist syntax where if nature of function 
        allows you to form expression for return value quickly, don't need curly braces */}
        {DAYS_OF_WEEK.map((dayOfWeek) => (
          <b key={dayOfWeek}>{dayOfWeek}</b>
        ))}
        {startOfMonthPaddding.map((pad) => (
          <span key={pad}></span>
        ))}
        {dayArray.map((day) => {
          return (
            <button key={day} onClick={(event) => updateSelectedDay(event)}>
              {day}
            </button>
          );
        })}
      </span>
      <span>{selectedDay}</span>
    </span>
  ) : null;
};

export default DateSelector;
