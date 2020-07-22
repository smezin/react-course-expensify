import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/AddExpensePage'
import singleExpense from '../fixtures/singleExpense'

let addExpense, history, wrapper

beforeEach(() => {
    addExpense = jest.fn()
    history = {
        push: jest.fn()
    }
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
})

test('should render expensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})
test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(singleExpense)
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpense).toHaveBeenLastCalledWith(singleExpense)
})