import React from 'react'

export const CalendarEvent = ( {event} ) => {

    const { title, profesional } = event;

    return (
        <div>
            <strong>{ title }</strong>
            <span> - { profesional }</span>
        </div>
    )
}