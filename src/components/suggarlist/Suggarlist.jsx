import React from 'react';
import "./Suggarlist.css";
import { Navbar, NavbarBrand } from 'reactstrap';
import ButtonReturn from '../button/ButtonReturn';
import Sugargrid from "./Sugargrid/Sugargrid"

export default class Suggarlist extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light className="cat">
          <NavbarBrand className="mr-auto" className="titleCat">
            Top des meilleurs aliments
          </NavbarBrand>
        </Navbar>

        <Sugargrid />
        <ButtonReturn />
      </div>
    );
  }
}