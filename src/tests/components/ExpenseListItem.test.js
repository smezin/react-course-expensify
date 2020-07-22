import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'
import singleExpense from '../fixtures/singleExpense'

test('should render single item', () => {
    const wrapper = shallow(<ExpenseListItem {...singleExpense} />)
    expect(wrapper).toMatchSnapshot()
})

