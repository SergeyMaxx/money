import React from 'react'
import ExpensesIncome from './expensesIncome'
import AccountsList from './accountsList'
import Structure from './structure'

const MainPageTable = () => {
  return (
    <div className="table">
      <ExpensesIncome/>
      <AccountsList/>
      <Structure/>
      <Structure/>
    </div>
  )
}

export default MainPageTable