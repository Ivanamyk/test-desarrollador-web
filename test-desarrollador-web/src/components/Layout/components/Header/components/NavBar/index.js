import React from 'react'
import { Navbar, Container, NavDropdown } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import './navBar.scss'

const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" variant="light" bg="none">
                <Container>
                    {/* <Icon.List size={20} /> */}
                    <NavDropdown title='menu' id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">inicio</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">acerca de nosotros</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">trabajos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">nuestro equipo</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.5">encuéntranos</NavDropdown.Item>
                    </NavDropdown>
                    <button type="button" class="btn"><Icon.Telephone /> contacto</button>
                </Container>
            </Navbar>
        </>
    )
}
export { NavBar }