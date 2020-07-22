import React from 'react'
import { shallow } from 'enzyme'
import singleExpense from '../fixtures/singleExpense'
import { EditExpensePage } from '../../components/EditExpensePage'

let editExpense, removeExpense, history, wrapper

beforeEach( () => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = { push: jest.fn()}
    wrapper = shallow(
        <EditExpensePage 
        editExpense={editExpense} 
        removeExpense={removeExpense}
        history={history}
        expense={singleExpense}
        />
    )
})

test('should render editExpensePage', () => {
    expect(wrapper).toMatchSnapshot()
})
test('should handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(singleExpense)
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(singleExpense.id, singleExpense)
})
test('should handle remove expense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith({id: singleExpense.id})
})