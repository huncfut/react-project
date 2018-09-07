import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'
import Popper from 'popper.js'
import {BrowserRouter as Router} from 'react-router-dom'
import React from "react"
import ReactDOM from "react-dom"
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReduxPromise from 'redux-promise'
import App from './components/app'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render((
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById("app"))
