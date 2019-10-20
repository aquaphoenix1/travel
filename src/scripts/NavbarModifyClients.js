//Лякишев Антон Андреевич 20.10.2019

import React from "react";
import {withRouter} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import AuthService from "./AuthService";

class NavbarModifyClients extends React.Component{
    constructor(props){
        super(props);

        this.state = {isAccess: true};
    }

    componentDidMount(){

    }

    render(){
        if(this.state.isAccess){
            return (<Nav.Link href="/modifyClients">Работа с пользователями</Nav.Link>)
        } else{
            return "";
        }
    }
}

export default withRouter(NavbarModifyClients);