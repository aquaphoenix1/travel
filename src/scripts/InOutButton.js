//Лякишев Антон Андреевич 20.10.2019

import AuthService from "./AuthService";
import Nav from "react-bootstrap/Nav";
import React from "react";

export default class InOutButton extends React.Component{
    render(){
        return AuthService.isLoggedIn() ?
            <Nav>
                <Nav.Link href="/userInfo">{AuthService.getLoggedName()}</Nav.Link>
                <Nav.Link href="/logout">Выход</Nav.Link>
            </Nav> :
            <Nav className="mr-auto">
                <Nav.Link href="/login">Вход</Nav.Link>
                <Nav.Link href="/registration">Регистрация</Nav.Link>
            </Nav>;
    }
}