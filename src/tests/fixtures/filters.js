import moment from 'moment'

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const altFilters = {
    text: 'bill',
    sortBy: 'amount',
    startDate: moment('2000-01-01'),
    endDate: moment('2020-01-01')
}

export { filters, altFilters }