import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import {removeExpense, editExpense} from '../actions/expenses'

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }
    onRemove = () => {
        this.props.removeExpense({ id: this.props.expense.id })
        this.props.history.push('/')
    }
    render () {
        return (
            <div>
                <h1>Edit Expense</h1>
                <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
                <button onClick={this.onRemove} >remove</button>
           </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}
const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)


/*-->Old version 
const EditExpensePage = (props) => {
    return (
        <div>
            <h1>Edit Expense</h1>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense))
                    props.history.push('/')
                }}
            />
            
        <button onClick={() => {
            props.dispatch(removeExpense({ id: props.expense.id }))
            props.history.push('/')
        }}
        >remove</button>
        </div>
    )
}
<--*/