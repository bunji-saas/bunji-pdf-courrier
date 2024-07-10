import moment from 'moment'

export const fMonthYearShort = (date: string) => moment(date).format('MMM YY')
