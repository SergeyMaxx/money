import React from 'react'
import user from '../../assets/user.svg'
import history from '../../assets/history.svg'
import settings from '../../assets/settings.svg'

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBar-list">
        <img src={user} alt="user-logo"/>
        <img src={history} alt="history"/>
      </div>
      <button className="sideBar__settings">
        <img  src={settings} alt="settings"/>
      </button>
    </div>
  )
}

export default SideBar