const getExpensesTotal = (expenses) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const amountsArray = expenses.map(expense => expense.amount)
    return amountsArray.reduce(reducer, 0)
}

export default getExpensesTotal