import React from 'react'
import {NavItem, NavLink} from 'reactstrap'
import {NavLink as Link} from 'react-router-dom'

const NavbarLink = ({link, title}) => (
  <NavItem>
    <NavLink tag={Link} to={link} activeClassName="active">
      {title}
    </NavLink>
  </NavItem>
)

export default NavbarLink
