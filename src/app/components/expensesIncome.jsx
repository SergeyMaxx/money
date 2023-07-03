import React from 'react'
import CashValue from './cashValue'
import DropDown from './dropDown'
import {useSelector} from 'react-redux'
import {getOperations} from '../Store/money'

const ExpensesIncome = () => {
  const operation = useSelector(getOperations())

  const allIncomes = operation
    .filter(o => o.operationType === 'income')
    .reduce((acc, el) => acc + el.quantity, 0)

  const allExpenses = operation
    .filter(o => o.operationType === 'expense')
    .reduce((acc, el) => acc + el.quantity, 0)

  return (
    <div className="exp-inc item">
      <div className="head-container">
        Expenses and income
        <DropDown/>
      </div>
      <div className="exp-inc__cash">
        <span className="exp-inc__cash-p">
          +${allIncomes}
        </span>
        <span className="exp-inc__cash-m">
          -${allExpenses}
        </span>
      </div>
        <CashValue/>
        <CashValue/>
    </div>
  )
}

export default ExpensesIncome