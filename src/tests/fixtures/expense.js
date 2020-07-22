import moment from 'moment'

const expenses = [{
    id: '1',
    description: 'gum',
    note: '',
    amount: 1000,
    createdAt: moment(0)
}, {
    id: '2',
    description: 'cola',
    note: 'light',
    amount: 150,
    createdAt: moment('2010-07-08')
}, {
    id: '3',
    description: 'bread',
    note: 'brown',
    amount: 250,
    createdAt: moment('2020-01-01')
}]

export default expenses