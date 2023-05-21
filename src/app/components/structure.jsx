import React from 'react'

const Structure = () => {
  return (
    <div className="structure item">
      <div className="structure__container">
        Structure Income
        <p className="structure-detail">detail</p>
      </div>
      <div className="structure-wrap">
        <div className="bar">
          <svg>
            <circle cx="50%" cy="50%" r="50%"/>
          </svg>
          <h1>$1 200 568</h1>
        </div>
        <div className="structure-list">
          <div className="structure-list__item">
            <p className="structure-list__item-p">36%</p>
            <div className="structure-list__item-bar"/>
            <p className="structure-list__item-desc">
              месячные выплаты
            </p>
          </div
          ><div className="structure-list__item">
            <p className="structure-list__item-p">28%</p>
            <div className="structure-list__item-bar bar-2"/>
            <p className="structure-list__item-desc">
              годовые выплаты
            </p>
          </div>
          <div className="structure-list__item">
            <p className="structure-list__item-p">21%</p>
            <div className="structure-list__item-bar bar-3"/>
            <p className="structure-list__item-desc">
              мерчендайзинг
            </p>
          </div>
          <div className="structure-list__item">
            <p className="structure-list__item-p">15%</p>
            <div className="structure-list__item-bar bar-4"/>
            <p className="structure-list__item-desc">
              консультации
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Structure