import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('es')

const localizer = momentLocalizer(moment);

const events = [
    {
    title: 'cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate()
    },
    {
    title: 'cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate()
    },
    {
    title: 'cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate()
}
]

export const CalendarScreen = () => {
    return (
        <div className='calendar-container'>
            <Calendar
                localizer={localizer}
                events={ events }
                startAccessor="start"
                endAccessor="end"
                views={['month', 'day', 'agenda']}
            />
        </div>
    )
}
