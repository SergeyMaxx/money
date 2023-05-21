import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Login from './layouts/login'
import Register from './layouts/register'
import Main from './layouts/main'
import MainPage from './layouts/mainPage'
import './scss/main.scss'

function App() {
  return (
    <>
      <Switch>
        <Route path={'/mainPage'} component={MainPage}/>
        <Route path={'/login'} component={Login}/>
        <Route path={'/signUp'} component={Register}/>
        <Route path={'/'} exact component={MainPage}/>
        <Redirect to={'/'}/>
      </Switch>
    </>
  )
}

export default App