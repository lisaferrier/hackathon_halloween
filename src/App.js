import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './App.css';
import NavBar from "./components/navbar/NavBar";
import More from './components/more/More';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import FirstPage from "./components/home/FirstPage";
import Suggarlist from "./components/suggarlist/Suggarlist";
import Mappage from "./components/mappage/Mappage";


export default class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <Container fluid>
          <NavBar />
          <Switch>
            <Route exact path="/" component={FirstPage} />
            <Route exact path="/More" component={More} />
            <Route exact path="/Categorie" component={Suggarlist} />
            <Route exact path="/Maps" component={Mappage} />
          </Switch>
        </Container>
      </BrowserRouter>

    );
  }
}

//<Route exact path="/Categorie" component={Suggarlist} />
//<Route exact path="/" component={Home} />

//           