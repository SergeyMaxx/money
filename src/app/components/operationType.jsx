import React from 'react'
import {useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'
import Operation from '../layouts/operation'
import {
  createCategoryEx,
  createCategoryIn,
  createOperations,
  getCategoryEx,
  getCategoryIn
} from '../Store/money'

const OperationType = () => {
  const {pathname} = useLocation()
  const categoryIn = useSelector(getCategoryIn())
  const categoryEx = useSelector(getCategoryEx())

  return (
    <>
      {pathname === '/income'
        ?
        <Operation
          category={categoryIn}
          addAction={createOperations}
          addCategory={createCategoryIn}
          type='income'
        />
        :
        <Operation
          category={categoryEx}
          addAction={createOperations}
          addCategory={createCategoryEx}
          type='expense'
        />}
    </>
  )
}

export default OperationType