import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import MainPage from './layouts/mainPage'
import './scss/main.scss'
import OperationType from './components/operationType'

function App() {
  return (
    <>
      <Switch>
        <Route path={'/income'} component={OperationType}/>
        <Route path={'/expense'} component={OperationType}/>
        <Route path={'/'} exact component={MainPage}/>
        <Redirect to={'/'}/>
      </Switch>
    </>
  )
}

export default App