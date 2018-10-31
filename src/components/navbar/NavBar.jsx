import React from 'react';
import "./NavBar.css";
import location from "./location.png";
import { Navbar, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';



export default class NavBar extends React.Component {
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
                <Navbar color="faded" light>
                    <NavbarBrand className="mr-auto" className="linkIll">
                        <NavLink to="/">ill'thy</NavLink>
                    </NavbarBrand>
                    <div>
                        <NavLink to="/Maps">
                            <img className="location" src={location} alt="location"></img>
                        </NavLink>
                    </div>
                </Navbar>
            </div>
        );
    }
}