import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Popper from 'popper.js'
import {BrowserRouter as Router} from 'react-router-dom'
import React from "react"
import ReactDOM from "react-dom"
import App from './components/app'

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById("app"))
