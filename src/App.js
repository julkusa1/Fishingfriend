import React from 'react';                
import './App.css';
import ViewList from "@material-ui/icons/ViewList";
import TrendingUp from "@material-ui/icons/TrendingUp";
import Settings from "@material-ui/icons/Settings";

function App() {                //Nostan luokat appiin
  return (
    <div className="App">   
      <Header/>
      <div className="content">
        <Fishcard/>
        <Fishcard/>
        <Fishcard/>
        <Fishcard/>
        <Fishcard/>
        <Fishcard/>
        <Fishcard/>
        <Fishcard/>
        <Fishcard/>
        <Fishcard/>
        <Fishcard/>
        <Fishcard/>
      </div>
      <Menu />
    </div>
  );
}

function Header(props) {          //Tässä on otsikkorivi
  return(
    <div className="header">
      <h1>Fishing Friend</h1>
    </div>
  )
}

function Fishcard(props) {        //Kalakortin rivit
  return (
    <div className="fishcard">
      <div className="fishcard__line">
          <div className="fishcard__month">July</div>
          <div className="fishcard__date">12</div>
      </div>
      <div className="fishcard__line">
          <div className="fishcard__place">Whiteriver</div>
          <div className="fishcard__fish">Riversalmon</div>
          <div className="fishcard__amount">1</div>
      </div>
    </div>
  );
}

function Menu(props) {
  return (
    <div className="menu">
      <div className="menu__button"><ViewList htmlColor="#fff" /></div>
      <div className="menu__button"><TrendingUp htmlColor="#fff" /></div>
      <div className="menu__button"><Settings htmlColor="#fff" /></div>
    </div>
  );
}

export default App;
