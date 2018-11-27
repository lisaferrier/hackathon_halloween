import React, { Component } from 'react';
import { Button } from "reactstrap";
import "./ButtonReturn.css";
import { NavLink } from 'react-router-dom';

export default class ButtonReturn extends Component {
    render() {
        return (
            <NavLink to="/">
                <div className="centerButton">
                    <Button size="lg">Retourner au<br />compteur</Button>
                </div>
            </NavLink>
            
        )
    }
}
