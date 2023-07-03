import React, {useState} from 'react'
import AccountModal from './modals/accountModal'

const AddAccount = () => {
  const [modalActive, setModalActive] = useState(false)

  return (
    <>
      <button className="add-btn" onClick={() => setModalActive(true)}>
        add
      </button>
      <AccountModal active={modalActive} setActive={setModalActive}/>
    </>
  )
}

export default AddAccount