import React, { Component } from 'react';
import "./Footer.css";
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <NavLink to ="/More">
        <footer>En savoir plus sur ill'thy</footer>
      </NavLink>
    )
  }
}
