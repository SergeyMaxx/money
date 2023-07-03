import React from 'react'
import AddAccount from './addAccount'
import {useSelector} from 'react-redux'
import {getAccounts} from '../Store/money'
import Account from './account'

const AccountsList = () => {
  const accounts = useSelector(getAccounts())

  return (
    <div className="accounts item">
      <div className="head-container">
        Accounts
        <AddAccount/>
      </div>
      {accounts.map(acc => <Account key={acc.id} account={acc}/>)}
    </div>
  )
}

export default AccountsList