import React, { Component } from 'react'
import "./TextStatues.css";
import zombie from "./zombie.png";

export default class TextStatues extends Component {
    render() {
        return (
            <div className="textImage">
                <div className="textStatus">
                    <span className="statutZombie">Statut <br />ZOMBIE</span>
                    <span className="caloConso">5000 Kcal<br />conso</span>
                </div>
                <img className="statuts" src={zombie} alt="zombie" />
            </div>
        )
    }
}
