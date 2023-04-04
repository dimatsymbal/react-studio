import { useState } from 'react'
import Calendar from 'react-calendar'
import './Calendar.css'
import 'react-calendar/dist/Calendar.css'

function CalendarFunc() {
    const [date, setDate] = useState(new Date())

    return (
        <div className="calendarBlock">
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date} />
            </div>
            <p className="paragraphWithDate">
                Selected Date:
                {date.toDateString()}
            </p>
        </div>
    )
}

export default CalendarFunc
