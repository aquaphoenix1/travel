//Лякишев Антон Андреевич 20.10.2019

import React from "react";
import AuthService from "./AuthService";
import {withRouter} from "react-router-dom";

class Reset extends React.Component{
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

export default withRouter(Reset);