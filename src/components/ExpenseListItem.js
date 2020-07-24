import React from 'react'
import {Link} from 'react-router-dom'
import numeral from 'numeral'

const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>description: {description}</h3>
        </Link>
        
        <p>
            amount: {numeral(amount / 100).format('$0,0.00')} <br/>
            created at: {createdAt.format('Do MMM YYYY')}
        </p>
       
    </div>
)

export default ExpenseListItem