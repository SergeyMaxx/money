import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {getAccounts} from '../Store/money'
import PropTypes from 'prop-types'

const DropDownAccount = ({select}) => {
  const [active, setActive] = useState(false)
  const account = useSelector(getAccounts())

  return (
    <div className="add-btn-acc" onClick={() => setActive(!active)}>
      <div className="dropdown-acc">
        Account
        <ul className={active ? 'menu-acc menu-open-acc' : 'menu-acc'}>
          {account.map(acc => (
            <li
              className="dropdown-acc-link"
              onClick={() => select(account.find(a => a.id === acc.id))}
              key={acc.id}
            >
              {acc.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

DropDownAccount.propTypes = {
  select: PropTypes.func.isRequired
}

export default DropDownAccount