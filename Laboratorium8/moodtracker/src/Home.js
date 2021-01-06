import React  from "react";
import Calendar from "./Calendar"
import { DateContext } from "./context"
import {
  loadSelectedDays,
  loadTrack,
  loadName,
  loadProgress
} from "./storage"

function Home(){

  const today = new Date()
  const dateContext = {
    today: today,
    currentYear: today.getFullYear(),
    currentMonth: today.getMonth(),
    currentDay: today.getDate(),
    selectedDates: loadSelectedDays(),
    trackingThing: loadTrack(),
    name: loadName(),
    days: loadProgress(),
  }


  return (
      <DateContext.Provider value={dateContext}>
          <Calendar />
      </DateContext.Provider>
  )
}

export default Home