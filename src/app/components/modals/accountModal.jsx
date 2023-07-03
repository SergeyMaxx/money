import React, {useState} from 'react'
import {createAccount} from '../../Store/money'
import {useDispatch} from 'react-redux'
import PropTypes from 'prop-types'

const AccountModal = ({active, setActive}) => {
  const dispatch = useDispatch()
  const [account, setAccount] = useState({
    name: '',
    balance: '',
    currency: ''
  })

  const handleChange = ({target}) => {
    setAccount(prev => ({
      ...prev,
      [target.name]: target.value
    }))
  }

  const addAccount = ({name, balance, currency}) => {
    if ((name && balance && currency).trim() && !isNaN(+balance) && +balance >= 0) {
      dispatch(createAccount({
        id: Math.random().toString(36).slice(2),
        name,
        balance,
        currency
      }))
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    addAccount(account)
    setAccount({
      name: '',
      balance: '',
      currency: ''
    })
  }

  return (
    <div
      className={active ? 'modal modal-active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? 'content content-active' : 'content'}
        onClick={e => e.stopPropagation()}
      >
        <form className="form" onSubmit={handleSubmit}>
          <p className="form-header">New Account</p>
          <div className="form-wrap w">
            <input className="form-wrap__icon ml"/>
            <div className="form-wrap__tooltip">1</div>
            <label className="form-wrap__label mr" htmlFor="name">
              Name
            </label>
            <input
              className="form-wrap__name mra"
              onChange={handleChange}
              value={account.name}
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="form-wrap">
            <label className="form-wrap__label b-r" htmlFor="balance">
              Balance
            </label>
            <input
              className="form-wrap__name"
              onChange={handleChange}
              value={account.balance}
              type="text"
              name="balance"
              id="balance"
            />
          </div>
          <div className="form-wrap">
            <label className="form-wrap__label" htmlFor="currency">
              Currency
            </label>
            <input
              className="form-wrap__name"
              onChange={handleChange}
              value={account.currency}
              type="text"
              name="currency"
              id="currency"
            />
          </div>
          <button
            className="form-button"
            onClick={() => setActive(false)}
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  )
}

AccountModal.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired
}

export default AccountModal