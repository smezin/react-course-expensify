import moment from 'moment'

const expenses = [{
    id: '1',
    description: 'gum',
    note: '',
    amount: 800,
    createdAt: moment(0)
}, {
    id: '2',
    description: 'cola',
    note: 'light',
    amount: 100,
    createdAt: moment('2010-07-08')
}, {
    id: '3',
    description: 'bread',
    note: 'brown',
    amount: 200,
    createdAt: moment('2020-01-01')
}]

export default expenses