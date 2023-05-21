import React from 'react'
import ExpensesIncome from './expensesIncome'
import Accounts from './accounts'
import Structure from './structure'

const MainPageTable = () => {
  return (
    <div className="table">
      <ExpensesIncome/>
      <Accounts/>
      <Structure/>
      <Structure/>
    </div>
  )
}

export default MainPageTable