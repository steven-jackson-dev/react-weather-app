import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import AppRoutes from 'global/AppRoutes.module'
import { Link } from 'react-router-dom';

const AppNavBar = (props) => {

    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">React Weather App</Navbar.Brand>
            <Nav className="ml-auto">
                {AppRoutes.map(route => {
                    return <Nav.Item  key={route.id} href="#home">
                        <Link to={route.path} style={{ textDecoration: 'none', color: 'white', padding: '1em' }}>{route.name}</Link>
                        </Nav.Item >
                })}
            </Nav>
        </Navbar>

    );
}

export default AppNavBar
