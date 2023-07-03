import React, {useState} from 'react'
import PropTypes from 'prop-types'
import OperationsList from '../components/operationsList'
import OperationModal from '../components/modals/operationModal'
import {useHistory} from 'react-router-dom'
import CategoryModel from '../components/modals/categoryModel'

const Operation = ({category, addAction, addCategory, type}) => {
  const [categoryById, setCategoryById] = useState({})
  const [modalActive, setModalActive] = useState(false)
  const [modCategory, setModCategory] = useState(false)
  const history = useHistory()

  const handleClick = id => {
    setModCategory(true)
    setCategoryById(category.find(c => c.id === id))
  }

  return (
    <div className="income">
      <div className="income-container">
        <ul className="income-nav">
          <li
            className="income-nav__item"
            onClick={() => history.replace('/')}
          >
            Back
          </li>
          <li className="income-nav__item big">
           {type[0].toUpperCase() + type.slice(1)}
          </li>
          <li className="income-nav__item">Edit</li>
        </ul>
        <ul className="income-grid">
          {category.map(i => (
            <React.Fragment key={i.id}>
              <li className="income-grid-wrap" onClick={() => handleClick(i.id)}>
                <div className="income-grid__item"/>
                <div className="income-grid__item-name">{i.name}</div>
              </li>
              <OperationModal
                activeMod={modCategory}
                setActiveMod={setModCategory}
                addAction={addAction}
                category={categoryById}
                type={type}
              />
            </React.Fragment>
          ))}
          <div className="income-grid-wrap">
            <button
              className="income-grid__item cursor"
              onClick={() => setModalActive(true)}
            >
              Add
            </button>
            <CategoryModel
              activeMod={modalActive}
              setActiveMod={setModalActive}
              header="Category"
              addCategory={addCategory}
            />
          </div>
        </ul>
      </div>
      <OperationsList/>
    </div>
  )
}

Operation.propTypes = {
  category: PropTypes.arrayOf(PropTypes.object).isRequired,
  addAction: PropTypes.func.isRequired,
  addCategory: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}

export default Operation