import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default function Navs(props) {
    return (
        <Navbar className={props.class} expand={props.expand} variant={props.variant} bg={props.bg}>
            <Navbar.Brand href={props.brandRef}>{props.brandValue}</Navbar.Brand>
            <Nav>
                {props.navlinks}
            </Nav>
        </Navbar>
    )
}

