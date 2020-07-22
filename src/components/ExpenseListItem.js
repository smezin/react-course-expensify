import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>description: {description}</h3>
        </Link>
        
        <p>
            amount: {parseFloat(amount/100).toFixed(2)} <br/>
            created at: {createdAt.format('Do MMM YYYY')}
        </p>
       
    </div>
)

export default ExpenseListItem