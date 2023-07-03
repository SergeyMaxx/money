import React from 'react'
import MoneyBar from '../components/moneyBar'
import MainPageTable from '../components/mainPageTable'
import SideBar from '../components/sideBar'
import OperationsList from '../components/operationsList'

const MainPage = () => {
  return (
    <>
      <MoneyBar/>
      <div className="main-page">
        <SideBar/>
        <MainPageTable/>
        <OperationsList/>
      </div>
    </>
  )
}

export default MainPage