import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'


let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach( () => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(<ExpenseListFilters
        filters = {filters}
        setTextFilter = {setTextFilter}
        sortByAmount = {sortByAmount}
        sortByDate = {sortByDate}
        setStartDate = {setStartDate}
        setEndDate = {setEndDate}
    />)
})

test('should render expensListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})
test('should render with altFilters', () => {
    wrapper.setProps({filters: altFilters})
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    const e = {
        target: {
            value: 'myTextFilter'
        }
    }
    wrapper.find('input').prop('onChange')(e)
    expect(setTextFilter).toHaveBeenLastCalledWith('myTextFilter')
})
test('should handle text change (andrew)', () => {
    wrapper.find('input').simulate('change', {
        target: {
            value: 'myTextFilter'
        }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith('myTextFilter')
})

test('should handle sort by date', () => {
    const e = {
        target: {
            value: 'date'
        }
    }
    wrapper.find('select').prop('onChange')(e)
    expect(sortByDate).toBeCalled()
})
test('should handle sort by date (andrew)', () => {
    const e = {
        target: {
            value: 'date'
        }
    }
    wrapper.find('select').simulate('change', e)
    expect(sortByDate).toBeCalled()
})

test('should handle sort by amount', () => {
    const e = {
        target: {
            value: 'amount'
        }
    }
    wrapper.find('select').prop('onChange')(e)
    expect(sortByAmount).toBeCalled()
})
test('should handle date change', () => {
    const dates = {
        startDate: moment('2000-07-28'),
        endDate: moment('2020-07-28')
    }
    wrapper.find('DateRangePicker').prop('onDatesChange')(dates)
    expect(setStartDate).toHaveBeenLastCalledWith(dates.startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(dates.endDate)
})
test('should handle focus change', () => {
    const calendarFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toEqual(calendarFocused)
})
test('should handle unfocus change', () => {
    const calendarFocused = null
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toEqual(calendarFocused)
})