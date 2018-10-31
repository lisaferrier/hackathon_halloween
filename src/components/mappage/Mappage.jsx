import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import "./Mappage.css";
import Footer from "../footer/Footer"

export default class mappage extends Component {
  render() {
    return (
      <div>
        <Navbar color="faded" light className="c">
          <NavbarBrand className="mr-auto" className="titlec">
            Les cimetières près de chez toi !
          </NavbarBrand>
        </Navbar>
        <div className="mapss">
          <iframe width="100%" height="500" src="https://trouver.datasud.fr/dataset/marseille-cimetieres/resource/c5f16f4f-c0b4-42d0-86df-8c58bd2d0466/view/c6301535-3881-4ff3-853b-5289638a2bfe" frameBorder="0"></iframe>
        </div>
        <Footer />
      </div>
    )
  }
}