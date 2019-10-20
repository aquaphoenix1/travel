//Лякишев Антон Андреевич 20.10.2019

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import InOutButton from "./InOutButton";
import NavbarModifyClients from "./NavbarModifyClients";

export default class CustomNavBar extends React.Component{
    render(){
        return (<Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Домой</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Пока ничего</Nav.Link>
                    <NavbarModifyClients/>
                </Nav>
            </Navbar.Collapse>
            <InOutButton/>
        </Navbar>);
    }
}