import { useState, useEffect } from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';
import deadlineIcon from '../../assets/deadline.svg';

// Reference: copilot
const Calendar = ({ deadlines } : any ) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 86400000); // Update every 24 hours
        return () => clearInterval(interval);
    }, []);

    const tileContent = ({ date, view } : { date: Date, view: string }) => {
        if (view === 'month') {
            const deadline = deadlines.find((d : any) => new Date(d.date).toISOString().split('T')[0] === date.toISOString().split('T')[0]);
            if (deadline) {
                return (
                    <div>
                        <img src={deadlineIcon} className="deadline-icon"></img>
                    </div>
                );
            }
        }
    }

    return (
        <div className="calendar-container">
            <ReactCalendar
            value = {date}
            tileContent={tileContent}
            tileClassName={({ date, view }) => {
                if (view === 'month' && date.toDateString() === new Date().toDateString()) {
                    return 'highlight-today';
                }
                const deadline = deadlines.find((d: any) => new Date(d.date).toDateString() === date.toDateString());
                if (deadline) {
                    return 'deadline-day';
                }
            }}
            />
        </div>
    )
}

export default Calendar;