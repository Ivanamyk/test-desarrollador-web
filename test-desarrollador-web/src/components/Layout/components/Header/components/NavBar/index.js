import React from 'react'
import { Navbar, Container, NavDropdown } from 'react-bootstrap'
import logo from '../../../../../../assets/img/logo.png'
import * as Icon from 'react-bootstrap-icons'
import './navBar.scss'

const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" variant="light" bg="none">
                <Container>
                    <NavDropdown title='menu' id="basic-nav-dropdown">
                        <NavDropdown.Item href="/">inicio</NavDropdown.Item>
                        <NavDropdown.Item href="/projects">trabajos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.5">encuéntranos</NavDropdown.Item>
                    </NavDropdown>
                    <img className='logo' src={logo} />
                    <button type="button" class="btn">contacto</button>
                </Container>
            </Navbar>
        </>
    )
}
export { NavBar }