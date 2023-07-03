import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from './app/Store/createStore'

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <Provider store={createStore()}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  )