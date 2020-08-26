import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";                
import './App.css';

import Header from "./components/Header/Header";  //Nostetaan Header komponentti Appiin
import List from "./components/List/List";  //Nostetaan lista Appiin
import Stats from "./components/Stats/Stats"; //Nostetaan tilasto Appiin
import Settings from "./components/Settings/Settings";  //Nostetaan asetukset Appiin
import Menu from "./components/Menu/Menu";    //Nostetaan menu Appiin

function App() {                    //Nostetaan komponentit App funktioon reitittimellä
  return (
    <Router> 
      <div className="App">   
        <Header/>
        <Route path="/" exact component= {List}/>
        <Route path="/stats" component= {Stats}/>
        <Route path="/settings" component= {Settings}/> 
        <Menu/>
      </div>
    </Router>
  );
}

export default App;
