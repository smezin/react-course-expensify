import getExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expense'
import singleExpense from '../fixtures/singleExpense'

test('should handle multiple expenses', () => {
    const totalValue = getExpensesTotal(expenses)
    expect(totalValue).toBe(1100)
})
test('should handle single expense', () => {
    const totalValue = getExpensesTotal([singleExpense])
    expect (totalValue).toBe(999)
})
test('should handle no expenses', () => {
    const totalValue = getExpensesTotal([])
    expect (totalValue).toBe(0)
})