import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import "./More.css";

export default class More extends Component {
  render() {
    return (
      <div>
        <Navbar color="faded" light className="cat">
          <NavbarBrand className="mr-auto" className="titlem">
            Disclaimer
          </NavbarBrand>
        </Navbar>
          <p className="Pouet">
            On le sait, les bonbons n'ont jamais été très sains pour l'organisme (trop de sucre, gélatine de porc, trop d'additifs alimentaires douteux...).
             Mais lorsqu'ils contiennent des nanoparticules, c'est encore pire. <br />
  
            D'après l'enquête réalisée par l'association Agir pour l'Environnement, une grande quantité de confiseries destinées 
            aux enfants contiendrait des additifs alimentaires susceptibles de contenir des nanoparticules, majoritairement 
            le dioxyde de titane (colorant alimentaire E171), mais aussi des Hydroxydes de fer (E172) et du dioxyde de silicium (E551).<br />
            
            Plus de 300 produits ont ainsi été identifiés par l'association dans une quinzaine d'enseignes de supermarchés. Au banc des produits alimentaires suspectés de contenir des nanoparticules :
            <ul>
              <li>bonbons : Hema, Little Extra, Netto, Elodie, Fizzy...</li>
              <li>chewing-gum : Airwaves, Hollywood, Freedent, Malabar, Dietaroma...</li>
              <li>confiseries : M&M's[1], Skittles...</li>
              <li>gâteaux : LU, biscuits Delacre "Tea Time"...</li>
              <li>chocolats : Milka...</li>
              <li>café : dosettes Cappuccino, Tassimo...</li>
              <li>décorations gâteaux : Vahiné...</li>
              <li>assaisonnements : Ducros, Cigalou, Bouton d'Or, sauce Bénédicta...</li>
              <li>Plats préparés...</li>
            </ul>
          </p>
        
      </div>
    )
  }
}
