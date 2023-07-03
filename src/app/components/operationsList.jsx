import React from 'react'
import {useSelector} from 'react-redux'
import {getOperations} from '../Store/money'

const OperationsList = () => {
  const operation = useSelector(getOperations())

  return (
    <div className="operation">
      <ul className="operation-list">
        {operation.map(o => (
          <li
            className={'operation-list__item ' + (o.operationType === 'income' ? '' : 'ex')}
            key={o.id}
          >
            <span className="operation-list__item_description">
              {o.category}
              {o.description}
            </span>
            <span >
              {o.operationType === 'income' ? '+$' + o.quantity : '-$' + o.quantity}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OperationsList