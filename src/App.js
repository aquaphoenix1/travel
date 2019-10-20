import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import CustomNavbar from "./scripts/CustomNavbar";
import Login from "./scripts/Login";
import Registration from "./scripts/Registration";
import Reset from "./scripts/Reset";
import Welcome from "./scripts/Welcome";
import UserInfo from "./scripts/UserInfo";
import ModifyClients from "./scripts/ModifyClients";

function App() {
    return (
        <div className="fullScreen flex column">
            <BrowserRouter>
                <CustomNavbar/>
                <Route exact path="/" component={Welcome}/>

                <Route exact path="/login" component={Login}/>
                <Route exact path="/registration" component={Registration}/>
                <Route exact path="/reset" component={Reset}/>
                <Route exact path="/userInfo" component={UserInfo}/>
                <Route exact path="/modifyClients" component={ModifyClients}/>
            </BrowserRouter>
        </div>
    );
}

export default App;