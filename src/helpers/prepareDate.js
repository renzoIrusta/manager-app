
export const prepareStartEndDate = ( events ) => {

    return events.map(
        e => ({
            ...e,
            start: e.start.toDate(),
            end: e.end.toDate(),
        })
    )

}

export const prepareDate = ( events ) => {

    return events.map(
        e => ({
            ...e,
            date: e.date.toDate(),
        })
    )

}