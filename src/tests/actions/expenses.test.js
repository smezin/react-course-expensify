import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('shold setup remove expense object', () => {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('shold edit existing expense', () => {
    const action = editExpense('id123', {note: 'new info'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'id123',
        updates: {
            note: 'new info'
        }
    })
})

test('should setup expense action object with provided values', () => {
    const expenseData = {
        description: 'rent',
        note: 'due today',
        amount: 10055,
        createdAt: 1000
    }
    const action = addExpense(expenseData)
    expect (action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})


test('should setup expense action object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})
