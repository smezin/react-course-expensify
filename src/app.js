import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import moment from 'moment'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'react-dates/lib/css/_datepicker.css'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()
console.log('test')
// store.dispatch(addExpense({
//     description: 'water bill',
//     amount: 10000,
//     createdAt: moment('2020-07-08')
// }))
// store.dispatch(addExpense({
//     description: 'gas bill',
//     amount: 2090,
//     createdAt: moment('2020-07-18')
// }))
// store.dispatch(addExpense({
//     description: 'rent',
//     amount: 109555,
//     createdAt: moment('2020-07-28')
// }))
// store.dispatch(sortByDate())



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'))