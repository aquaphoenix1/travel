//Лякишев Антон Андреевич 20.10.2019

import React from "react";
import BootstrapTable from "react-bootstrap/Table";

const columns = [{
    dataField: 'name',
    text: 'Имя',
    sort: true
}];

export default class ClientsTable extends React.Component{
    constructor(props){
        super(props);

        this.state = {clients: props.clients}
    }

    render(){
        return (
            <BootstrapTable columns={columns} data={this.state.clients}/>
        )
    }
}