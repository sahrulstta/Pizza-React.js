import React from 'react'
import { Sidecontainer, Closeicon, Icons, Sidemenu, Sidelink, Sidewarp, SidebarRoute } from './SidebarElement';

const Sidebar = ({isOpen, toggle}) => {

    return (
        <Sidecontainer isOpen={isOpen} onClick={toggle}>
            <Icons onClick={toggle}>
                <Closeicon />
            </Icons>
            <Sidemenu>
                <Sidelink to='/'>Pizzas</Sidelink>
                <Sidelink to='/'>Disert</Sidelink>
                <Sidelink to='/'>Full Menu</Sidelink>
            </Sidemenu>
            <Sidewarp>
                <SidebarRoute to='/'>Order Now</SidebarRoute>
            </Sidewarp>
        </Sidecontainer>
    )
}

export default Sidebar
