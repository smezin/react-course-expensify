import { createStore } from 'redux'

const countReducer = (state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.step
            }
        case 'DECREMENT':
            return {
                count: state.count - action.step
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            if (typeof action.value !== 'number') {
                return {
                    count: state.count
                }
            }
            return {
                count: action.value
            }
        default :
            return state
    }
}

const store = createStore(countReducer)

const incrementCount = ({step = 1} = {}) => (
    {
        type: 'INCREMENT',
        step,
    }
)
const decrementCount = ({step = 1} = {}) => (
    {
        type: 'DECREMENT',
        step,
    }
)
const setCount = ({value}) => {
    if (typeof value !== 'number') {
        return {
            type: 'SET'
        }
    }
    return {
        type: 'SET',
        value,
    }
}
const resetCount = () => ({
        type: 'RESET'
})
const unsubscribe = store.subscribe ( () => {
    console.log(store.getState())
})
store.dispatch (incrementCount({step: 5}))
store.dispatch (decrementCount({step: 10}))
store.dispatch (decrementCount())
store.dispatch (resetCount())
store.dispatch (setCount({value: -100}))
store.dispatch (setCount({value: '55'}))
//unsubscribe()
