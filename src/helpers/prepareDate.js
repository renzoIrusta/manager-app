
export const prepareDate = ( events ) => {

    return events.map(
        e => ({
            ...e,
            start: e.start.toDate(),
            end: e.end.toDate(),
        })
    )

}