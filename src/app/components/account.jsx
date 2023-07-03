import React from 'react'
import wallet from '../../assets/wallet.svg'
import PropTypes from 'prop-types'

const Account = ({account}) => {
  return (
    <div className="accounts-list">
      <div className="accounts-list__item">
        <img className="accounts-list__item-logo" src={wallet} alt="wallet"/>
        <p>{account.name}</p>
        <p className="accounts-list__item-value">
          {account.balance}
        </p>
        <span>{account.currency}</span>
      </div>
    </div>
  )
}

Account.propTypes = {
  account: PropTypes.object.isRequired
}

export default Account