//Лякишев Антон Андреевич 20.10.2019

import React from "react";
import Loader from "./Loader";
import {withRouter} from "react-router-dom";
import AuthService from "./AuthService";
import ClientsTable from "./ClientsTable";

class ModifyClients extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    name: "as"
                },
                {
                    name: "dsfdsf"
                }
            ]
        };
    }

    componentDidMount = () => {
        /*if(!AuthService.isLoggedIn()){
            this.props.history.push('/');
        }*/
    };

    render(){
        return this.state.data ? <ClientsTable clients={this.state.data}/> : <Loader/>
    }
}

export default withRouter(ModifyClients);