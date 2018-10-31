import React, { Component } from 'react';
import "./FirstPage.css";
import Counter from '../counter/Counter';
import TextStatues from '../textStatues/TextStatues';
import CounterBackground from "../counterBackground/CounterBackground"
import ButtonRepas from '../button/ButtonRepas';
import Footer from "../footer/Footer"

export default class FirstPage extends Component {
  render() {
    return (
      <div className="FirstPage">
        <CounterBackground />
        <Counter />
        <TextStatues />
        <ButtonRepas />
        <Footer />
      </div>
    )
  }
}
