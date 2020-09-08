import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavbarBrand
} from 'reactstrap';

const Navigation = () => {
    const [isOpen, toggleNav] = useState(false);

    return (
        <div className='app-nav'>
            <Navbar color='faded' light expand='md'>
                <NavbarBrand/>
                <NavbarToggler onClick={() => toggleNav(!isOpen)}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <Link to='/'>Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='profile'>Profile</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/projects'>Projects</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;