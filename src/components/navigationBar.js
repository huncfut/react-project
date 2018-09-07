import React, {Component} from 'react'
import {Navbar,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Container} from 'reactstrap'
import {Link} from 'react-router-dom'
import NavbarLink from './navbarLink'

class NavigationBar extends Component {
  constructor(props) {
    super(props)
    this.state = {isOpen: false}
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <Navbar color="faded" light expand="md">
        <NavbarBrand tag={Link} to="/">React Starter</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/huncfut/react-project">
                GitHub
              </NavLink>
            </NavItem>
            <NavbarLink title="Documentation" link="/documentation" />
            <NavbarLink title="Examples" link="/examples" />
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar
