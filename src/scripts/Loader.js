//Лякишев Антон Андреевич 20.10.2019

import Spinner from "react-bootstrap/Spinner";
import React from "react";
import "../styles/mainStyle.css"

export default class Loader extends React.Component{
    render(){
        return (
            <div className="fullScreen flex column center">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...></span>
                </Spinner>
                <div className="loadingText">Загрузка</div>
            </div>)
    }
}