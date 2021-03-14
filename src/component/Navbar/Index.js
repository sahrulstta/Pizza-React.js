import React from 'react'
import { Nav, NavIcon, Bars, NavLink } from './Navbar.Element';

const Navbar = ({toggle})=> {
    return (
        <>
           <Nav>
               <NavLink to="/">Pitzza</NavLink>
               <NavIcon onClick={toggle}>
                   <p>Menu</p>
                <Bars/>
               </NavIcon>
           </Nav>
        </>
    );
}

export default Navbar
