import React from 'react'
import wallet from '../../assets/wallet.svg'
import card from '../../assets/card.svg'
import piggy from '../../assets/piggy.svg'

const Accounts = () => {
  return (
    <div className="accounts item">
      <div className="head-container">
        Accounts
        <button className="add-btn">
          add
        </button>
      </div>
      <div className="accounts-list">
        <div className="accounts-list__item">
          <img className="accounts-list__item-logo" src={wallet} alt="wallet"/>
          <p>cash</p>
          <p className="accounts-list__item-value">$ 456 545</p>
        </div>
        <div className="accounts-list__item">
          <img className="accounts-list__item-logo" src={card} alt="wallet"/>
          <p>Master Card</p>
          <p className="accounts-list__item-value">$ 125 669</p>
        </div>
        <div className="accounts-list__item">
          <img className="accounts-list__item-logo" src={piggy} alt="wallet"/>
          <p>Coin Keeper</p>
          <p className="accounts-list__item-value">$ 23 125</p>
        </div>
      </div>
    </div>
  )
}

export default Accounts