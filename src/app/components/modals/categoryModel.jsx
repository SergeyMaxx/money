import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import PropTypes from 'prop-types'

const CategoryModel = ({activeMod, setActiveMod, header, addCategory}) => {
  const dispatch = useDispatch()
  const [operation, setOperation] = useState({name: ''})

  const handleChange = ({target}) => {
    setOperation(prev => ({
      ...prev,
      [target.name]: target.value
    }))
  }

  const newOperation = ({name}) => {
    if (name.trim()) {
      dispatch(addCategory({
        id: Math.random().toString(36).slice(2),
        name
      }))
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    newOperation(operation)
    setOperation({name: ''})
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
        <form className="form" onSubmit={handleSubmit}>
          <p className="header">New {header}</p>
          <div className="form-wrap">
            <label className="form-wrap__label" htmlFor="name">
              {header} Name
            </label>
            <input
              className="form-wrap__name"
              onChange={handleChange}
              value={operation.name}
              name="name"
              type="text"
              id="name"
            />
          </div>
          {/*<div className="form-wrap">*/}
          {/*  <label className="form-wrap__label" htmlFor="category">*/}
          {/*    Category*/}
          {/*  </label>*/}
          {/*  <input*/}
          {/*    className="form-wrap__name"*/}
          {/*    name="category"*/}
          {/*    type="text"*/}
          {/*    id="category"*/}
          {/*  />*/}
          {/*</div>*/}
          <button
            className="form-button"
            onClick={() => setActiveMod(false)}
            type="submit"
          >
            Add {header}
          </button>
        </form>
      </div>
    </div>
  )
}

CategoryModel.propTypes = {
  activeMod: PropTypes.bool.isRequired,
  setActiveMod: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  addCategory: PropTypes.func
}

export default CategoryModel