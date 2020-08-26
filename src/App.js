import React from 'react';                
import './App.css';

import Header from "./components/Header/Header";  //Nostetaan Header komponentti Appiin
import Menu from "./components/Menu/Menu";    //Nostetaan menu Appiin
import Fishcard from "./components/Fishcard/Fishcard";  //Nostetaan kalakortti Appiin

function App() {               
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

export default App;
