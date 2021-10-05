import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import "./MenuBar.css";

const MenuBarr = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/home">Arcane CodeHub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/home" className="items">
                                <li>Home</li>
                            </Link>

                            <Link to="/all-courses" className="items">
                                <li>All Courses</li>
                            </Link>

                            <Link to="/instructor" className="items">
                                <li>Instructor</li>
                            </Link>

                            <Link to="/about" className="items">
                                <li>About us</li>
                            </Link>

                            <Link to="/contact" className="items">
                                <li>Contact us</li>
                            </Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default MenuBarr;