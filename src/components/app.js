import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Container} from 'reactstrap'
import NavigationBar from './NavigationBar'
import WelcomePage from './welcomePage'

const App = () => (
  <div>
    <Container>
      <NavigationBar />
    </Container>
    <Switch>
      <Route path="/" component={WelcomePage} />
    </Switch>
  </div>
)

export default App
