import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'
import Popper from 'popper.js'
import {BrowserRouter as Router} from 'react-router-dom'
import {Container} from 'reactstrap'
import React from "react"
import ReactDOM from "react-dom"
import App from './components/app'

ReactDOM.render((
  <Router>
    <Container>
      <App />
    </Container>
  </Router>
), document.getElementById("app"))
