import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const DropDown = () => {
  const [active, setActive] = useState(false)

  return (
    <div className="add-btn" onClick={() => setActive(!active)}>
      <div className="dropdown">
        add
        <ul className={active ? 'menu menu-open' : 'menu'}>
          <li>
            <Link className="dropdown-link" to="/income">
              Income
            </Link>
          </li>
          <li>
            <Link className="dropdown-link" to="/expense">
              Expenses
            </Link>
          </li>
          <li>
            <Link className="dropdown-link" to="/transaction">
              Transaction
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DropDown