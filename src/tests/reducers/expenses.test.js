import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expense'
import singleExpense from '../fixtures/singleExpense'

test('shouldSetDefaultState', () => {
    const state = expensesReducer(undefined, '@@INIT')
    expect(state).toEqual([])
})
test('should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})
test('should not remove expense if ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add a new expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: singleExpense}
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, singleExpense])
})
test('should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description: 'book'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].description).toEqual('book')
})
test('should not edit expense if ID not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'book'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})