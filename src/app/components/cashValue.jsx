import React from 'react'

const CashValue = () => {
  return (
    <div className="progress">
      <span>Доход за месяц</span>
      <div className="progress-bar">
        <div className="progress-bar__fact"/>
        + $ 1 200 568 (fact)
      </div>
      <div className="progress-bar op">
        <div className="progress-bar__plan"/>
        + $ 1 200 568 (plan)
      </div>
    </div>
  )
}

export default CashValue