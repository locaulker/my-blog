import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <div>
      <Navbar fixed="top" light expand="sm">
        <NavbarBrand href="/" className="mr-auto">{props.siteTitle}</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem><NavLink href="/team/">Team</NavLink></NavItem>
            <NavItem><NavLink href="/tags">Tags</NavLink></NavItem>
            <NavItem><NavLink href="/about">About</NavLink></NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header