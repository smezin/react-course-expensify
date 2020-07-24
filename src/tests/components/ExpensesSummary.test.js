import getExpenseSummary from '../../components/ExpensesSummary'
import React from 'react'
import {shallow} from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should handle summary of single expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />)
    expect(wrapper).toMatchSnapshot()
    
})
test('should handle summary of multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={100} expensesTotal={23500} />)
    expect(wrapper).toMatchSnapshot()   
})