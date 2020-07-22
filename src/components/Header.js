import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavList/>
    </header>
)
const NavList = () => (
    <p>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink> 
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </p>
)
export default Header