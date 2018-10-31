import React, { Component } from 'react'
import "./TextStatues.css";
import zombie from "./zombie.png";

export default class TextStatues extends Component {
    render() {
        return (
            <div className="textImage">
                <div className="textStatus">
                    <span className="statutZombie">Statut *insérer*</span><span className="caloConso">*insérer*Kcal<br />conso</span>
                </div>
                <img className="statuts" src={zombie} alt="zombie" />
            </div>
        )
    }
}
