//Лякишев Антон Андреевич 20.10.2019

import React from "react";
import {withRouter} from "react-router-dom";
import AuthService from "./AuthService";
import axios from "axios"
import Loader from "./Loader";

class UserInfo extends React.Component{
    constructor(props){
        super(props);

        if(!AuthService.isLoggedIn()){
            this.props.history.push("/");
        }

        this.state = {data: null};
    }

    componentDidMount(){
        axios.post("127.0.0.1:8080/userInfo", AuthService.getLoggedName(),{
            headers: {
                "Authorization": "Bearer " + AuthService.getToken()
            }
        }).then(response => {
            this.setState({data: response});
        });
    }

    render(){
        if(this.state.data){
            return (<div></div>);
        }
        else {
            return <Loader/>
        }
    }
}

export default withRouter(UserInfo);