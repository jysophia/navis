import { useState, useEffect } from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';

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
            const deadline = deadlines.find((d : any) => new Date(d.date).toDateString() === date.toDateString());
            if (deadline) {
                return (
                    <div className="deadline-tile">{deadline.name}</div>
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
            }}
            />
        </div>
    )
}

export default Calendar;