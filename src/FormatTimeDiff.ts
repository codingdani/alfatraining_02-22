type IntervalInfo = [number, string, string]

function formatTimeDiff(date1: Date, date2: Date) {
    let diff = Math.abs(Number(date1) - Number(date2))

    const second = 1000
    const minute = 60 * second
    const hour = 60 * minute
    const day = 24 * hour
    const week = 7 * day
    const month = 4 * week
    const year = 12 * month

    return [
        [year, 'Jahr', 'e'],
        [month, 'Monat', 'e'],
        [week, 'Woche', 'n'],
        [day, 'Tag', 'e'],
        [hour, 'Stunde', 'n'],
        [minute, 'Minute', 'n'],
        [second, 'Sekunde', 'n']
    ]
        .map((value: IntervalInfo) => {
            const [intervalSecs, intervalName, pluralPostfix] = value
            const roundedIntervalCount = Math.floor(diff / intervalSecs);
            diff -= roundedIntervalCount * intervalSecs;
            if (roundedIntervalCount > 0) {
                return `${roundedIntervalCount} ${intervalName}${roundedIntervalCount > 1 ? pluralPostfix : ''}`
            }
        })
        // nur elemente beruecksichtigen, die einen Rueckgabewert hatten, wegen `if` in `map`
        .filter(a => a)
        .join(', ')
}

// const date1 = new Date(2011, 8, 11, 11, 11, 11);
// const date2 = new Date();
const date3 = new Date(2017, 11, 1, 15, 56, 42);
const date4 = new Date(2018, 11, 1, 15, 56, 42);

console.log(formatTimeDiff(date4, date3));
