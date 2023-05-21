import React from 'react'
import CashValue from './cashValue'

const ExpensesIncome = () => {
  return (
    <div className="exp-inc item">
      <div className="head-container">
        Expenses and income
        <button className="add-btn">
          add
        </button>
      </div>
      <div className="exp-inc__cash">
        <span className="exp-inc__cash-p">
          +$ 810 677
        </span>
        <span className="exp-inc__cash-m">
          -$ 510 677
        </span>
      </div>
        <CashValue/>
        <CashValue/>
    </div>
  )
}

export default ExpensesIncome