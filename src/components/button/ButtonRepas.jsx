import React, { Component } from 'react';
import { Button } from "reactstrap";
import "./ButtonRepas.css";
import { NavLink } from 'react-router-dom';

export default class ButtonRepas extends Component {
  render() {
    return (
      <NavLink to="/Categorie">
        <div className="centerButton">
          <Button size="lg">Ajouter au<br />repas</Button>
        </div>
      </NavLink>
    )
  }
}
