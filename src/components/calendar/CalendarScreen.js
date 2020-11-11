import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';

import { messages } from '../../helpers/calendar-messages-es';
import { uiOpenModal } from '../../actions/ui';
import { AddNewFab } from '../ui/AddNewFab';
import { downloadEvents, eventSetActive } from '../../actions/calendar';
import { db } from '../../firebase/config';
import { prepareDate } from '../../helpers/prepareDate';

moment.locale('es')

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

    const { events } = useSelector(state => state.calendar)

    const dispatch = useDispatch();

    useEffect(() => {
        
        db.collection("calendar").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            const docsDates = prepareDate( docs )
            dispatch(downloadEvents( docsDates ))
        });
    
    }, [dispatch])

    const onSelectEvent = (e) => {
        dispatch(eventSetActive(e))
        dispatch(uiOpenModal())
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const eventStyleGetter = (event, start, end, isSelected) => {
        // console.log(event, start, end, isSelected);

        const style = {
            backgroundColor: event.bgcolor,
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    }

    return (
        <div className='calendar-container'>
            <Calendar
                messages={messages}
                localizer={localizer}
                events={events}
                startAccessor="start"
                onSelectEvent={onSelectEvent}
                endAccessor="end"
                views={['month', 'day', 'agenda']}
                eventPropGetter={eventStyleGetter}
                onView={onViewChange}
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />
            <AddNewFab />
            <CalendarModal />
        </div>
    )
}
