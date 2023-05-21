import React from 'react'
import MoneyBar from '../components/moneyBar'
import MainPageTable from '../components/mainPageTable'
import SideBar from '../components/sideBar'

const MainPage = () => {
  return (
    <>
      <MoneyBar/>
      <div className="main-page">
        <SideBar/>
        <MainPageTable/>
      </div>
    </>
  )
}

export default MainPage