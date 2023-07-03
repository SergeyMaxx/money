import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import PropTypes from 'prop-types'
import DropDownAccount from '../dropDownAccount'
import {useHistory} from 'react-router-dom'
import {accountUpdate, getAccounts} from '../../Store/money'
import description from '../../../assets/description.svg'

const OperationModal = ({activeMod, setActiveMod, addAction, category, type}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const account = useSelector(getAccounts())
  const [selectAccount, setSelectAccount] = useState(account[0])
  const [stateDesc, setStateDesc] = useState(false)
  const [operation, setOperation] = useState({quantity: '', description: ''})

  const handleChange = ({target}) => {
    setOperation(prev => ({
      ...prev,
      [target.name]: target.value
    }))
  }

  const descriptionOn = e => {
    e.target.classList.contains('text') && setStateDesc(true)
  }

  const newOperation = ({quantity, description}) => {
    if (quantity > 0 && !isNaN(quantity) && account.length) {
      dispatch(addAction({
        id: Math.random().toString(36).slice(2),
        description,
        operationType: type,
        quantity: +quantity,
        category: category.name,
        categoryId: category.id,
        accountId: selectAccount.id,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      }))

      dispatch(accountUpdate({
        id: selectAccount.id,
        balance: type === 'income'
          ? +selectAccount.balance + +quantity
          : +selectAccount.balance - +quantity
      }))
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    newOperation(operation)
    setOperation({quantity: '', description: ''})
  }

  const handleClick = () => {
    setStateDesc(false)
    setActiveMod(false)
  }

  return (
    <div
      className={activeMod ? 'modal modal-active' : 'modal'}
      onClick={() => setActiveMod(false)}
    >
      <div
        className={activeMod ? 'content content-active' : 'content'}
        onClick={e => e.stopPropagation()}
      >
        <p className="header">
          New {type[0].toUpperCase() + type.slice(1)}
        </p>
        <form className="form form-d" onSubmit={handleSubmit}>
          <div className="form-wrap">
            {account.length
              ?
              <>
                <div className="form-wrap__label">
                  <DropDownAccount select={setSelectAccount}/>
                </div>
                <div className="form-wrap__name select">
                  {selectAccount.name}
                </div>
              </>
              :
              <p className="form-wrap__account" onClick={() => history.push('/')}>
                Create an account !
              </p>
            }
          </div>
          <div className="form-wrap">
            <label className="form-wrap__label" htmlFor="quantity">
              {category.name}
            </label>
            <input
              className="form-wrap__name"
              onChange={handleChange}
              value={operation.quantity}
              name="quantity"
              type="text"
              id="quantity"
            />
          </div>
          <div className="form-wrap flex-s">
            {stateDesc
              ?
              <textarea
                className="form-wrap__name desc"
                onChange={handleChange}
                value={operation.description}
                name="description"
                autoFocus
              />
              :
              <label className="form-wrap__label text">
                <img
                  className="text"
                  src={description}
                  onClick={descriptionOn}
                  alt="description"
                />
              </label>
            }
          </div>
          <button
            className="form-button"
            onClick={handleClick}
            type="submit"
          >
            Add {type[0].toUpperCase() + type.slice(1)}
          </button>
        </form>
      </div>
    </div>
  )
}

OperationModal.propTypes = {
  activeMod: PropTypes.bool.isRequired,
  setActiveMod: PropTypes.func.isRequired,
  addAction: PropTypes.func,
  category: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
}

export default OperationModal