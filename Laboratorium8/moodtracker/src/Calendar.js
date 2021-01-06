import React, { useState, useContext } from "react"
import { toggleSelectedDay, hasDay, checkTrack, checkName } from "./storage"
import { DateContext  } from "./context"
import Generator from "./Generator"
import { PieChart } from 'react-minimal-pie-chart';
import './style.css'

const SHORT_MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

function Day({ month, day}) {
  const date = new Date(2021, month, day)
  const dateCtx = useContext(DateContext)
  const selected = hasDay(dateCtx.selectedDates, date)
  const [checked, setChecked] = useState(selected)

  let border = " h-7"
  if (month === dateCtx.currentMonth && day === dateCtx.currentDay) {
    border = " h-6 border-2 border-orange-400"
  }

  let bgClass, bgColor

  if (checked) {
    bgClass = ""
    bgColor = "#d1e0e0"
  } else {
    bgClass = " bg-gray-200"
    bgColor = ""
  }

  const handleClick = () => {
    const toggled = !checked
    setChecked(toggled)
    toggleSelectedDay(date)
    window.location.reload();
  }

  return (
    <div
      className={
        "w-8 ml-1 mt-1 text-center rounded-lg cursor-pointer" + bgClass + border
      }
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {day}
    </div>

  )
}

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit() {
    checkTrack(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <div className="form-group">
              <label htmlFor="tracking"> What do you want to track? </label>
              <input type="text" className="form-control" style={{width: '50%', margin: "0 auto"}} value={this.state.value} onChange={this.handleChange}></input>
          </div>
          <button type="submit" className="btn btn-outline-secondary">Save</button>
      </form>
    );
  }
}

class MySecondForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit() {
      checkName(this.state.value);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="tracking"> What's your name? </label>
                <input type="text" className="form-control" style={{width: '50%', margin: "0 auto"}} value={this.state.value} onChange={this.handleChange}></input>
            </div>
            <button type="submit" className="btn btn-outline-secondary">Save</button>
        </form>
      );
    }
  }

function Month({ month}) {
  const numDays = new Date(2020, month + 1, 0).getDate()
  const days = [...Array(numDays).keys()]
  const monthName = SHORT_MONTH_NAMES[month]

  return (
    <div key={month} className="flex flex-col">
      <div className="text-center">{monthName}</div>
      {days.map((_, ind) => (
        <Day key={month + ind} month={month} day={ind + 1} />
      ))}
    </div>
  )
}

function Tracker() {
    const dateCtx = useContext(DateContext)
    const tracking = dateCtx.trackingThing
    const name = dateCtx.name
    /*wykorzystanie Object.assign*/
    var my = { a: name}
    var thg = {b: tracking}
    var tr = {c: 'tracker'}
    var text = Object.assign(my,thg,tr)

    return (
        <div className="text-center tracking">
            <p>{text.a}'s {text.b} {text.c}</p>
        </div>
    )
}
function isLeap(year) {
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
function Calendar() {
  const months = [...Array(12).keys()]
  const dateCtx = useContext(DateContext)
  let days = 0;
  let date = new Date();
  let year = isLeap(date.getFullYear())
  if(year === true) {
    days = 366
  } else {
    days = 365
  }
  let percent = ((dateCtx.days/days)*100).toPrecision(3)
  return (
    <div>
        <br></br>
      <h1 className="text-center year fonty" >{dateCtx.currentYear}</h1>
      <Tracker />
      <Generator />
      <div className="flex justify-center">
        {months.map((_, ind) => (
          <Month key={ind} month={ind} />
        ))}
      </div>
      <br></br><br></br><br></br>
      <p className="set text-center">Progress</p>
      <div className="card text-center fontyy" style={{margin: "0 auto", width: "60%", fontSize: '150%'}}>
          <div className="card-body">
            <p>All days tracked: {dateCtx.days}</p>
            <p>Yearly progress in %: {percent}%</p>
            <PieChart
            data={[
              { title: 'Tracked', value: dateCtx.days, color: '#75a3a3' },
              { title: 'Not tracked', value: days, color: '#a3c2c2' },
              ]}
              style={{width: '200px', paddingBottom: '50px'}}
            />
            </div>
        </div>
        <br></br>
        <br></br>
      <p className="set text-center">Settings</p>
      <div className="card text-center fontyy" style={{margin: "0 auto", width: "60%", fontSize: '150%'}}>
          <div className="card-body">
              <MyForm />
              <br></br>
              <MySecondForm />
            </div>
        </div>
        <br>
        </br>
        <br>
        </br>
    </div>
  )
}

export default Calendar