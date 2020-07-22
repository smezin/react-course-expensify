import moment from 'moment'
import selectExpenses from '../../selectors/expenses'
import expenses from '../fixtures/expense'

test('should filter by text value', () => {
    const filters = {
        text: 'a',
        sortBy: 'date',
        startDate:  undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[1]])
})
test('should filter (decending) by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment('2000-07-08'),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[1]])
})
test('should filter (decending) by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment('2000-07-08')
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[0]])
})
test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2],  expenses[1], expenses[0]])
})
test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[0],  expenses[2], expenses[1]])
})