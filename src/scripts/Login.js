//Лякишев Антон Андреевич 20.10.2019

import React from "react";
import {withRouter} from "react-router-dom";
import AuthService from "./AuthService";

class Login extends React.Component{
    constructor(props){
        super(props);

        if(AuthService.isLoggedIn()){
            this.props.history.push("/");
        }
    }

    render(){
        return (<div></div>);
    }
}

export default withRouter(Login);