import { DateUtils } from "react-day-picker"

function serializeDates(dates) {
  const dateTsArr = dates.map((d) => d.getTime())
  return JSON.stringify(dateTsArr)
}

function deserializeDates(dates) {
  if (!dates) return []
  const dateArr = JSON.parse(dates)
  return dateArr.map((d) => new Date(d))
}

function hasDay(selectedDays, searchDay) {
  const ind = selectedDays.findIndex((selectedDay) =>
    DateUtils.isSameDay(selectedDay, searchDay)
  )
  return ind !== -1
}

function loadSelectedDays() {
  const storedDates = localStorage.getItem("selectedDays")
  return deserializeDates(storedDates)
}

function saveSelectedDays(dates) {
  const serializedDates = serializeDates(dates)
  localStorage.setItem("selectedDays", serializedDates)
}

function toggleSelectedDay(date) {
  const selectedDays = loadSelectedDays()

  const ind = selectedDays.findIndex((searchDay) =>
    DateUtils.isSameDay(searchDay, date)
  )
  if (ind === -1) {
    selectedDays.push(date)
  } else {
    selectedDays.splice(ind, 1)
  }

  saveSelectedDays(selectedDays)
  return selectedDays
}

function saveTrack(thing){
    const trackingThing = JSON.stringify(thing)
    localStorage.setItem("trackingThing", trackingThing)
}
function loadTrack() {
    const storedTrack = localStorage.getItem("trackingThing")
    if (!storedTrack) return ""
    const tracking = JSON.parse(storedTrack)
    return tracking
}
function checkTrack(thing){
    const trackingThing = loadTrack()
    if(trackingThing !== thing) {
        saveTrack(thing)
    }
    return trackingThing
}

function loadProgress(){
  const days = loadSelectedDays()
  let nr = days.length
  return nr - 1
}

function saveName(name){
  const nameToSave = JSON.stringify(name)
  localStorage.setItem("name", nameToSave)
}
function loadName() {
  const storedName = localStorage.getItem("name")
  if (!storedName) return ""
  const name = JSON.parse(storedName)
  return name
} 
function checkName(name){
  const nameToCheck = loadName()
  if(nameToCheck !== name) {
      saveName(name)
  }
  return nameToCheck
}


export {
  loadSelectedDays,
  toggleSelectedDay,
  hasDay,
  loadTrack,
  checkTrack,
  checkName,
  loadName,
  loadProgress,
}