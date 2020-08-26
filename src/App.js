import React from 'react';                
import './App.css';

import Header from "./components/Header/Header";  //Nostetaan Header komponentti Appiin
import Menu from "./components/Menu/Menu";    //Nostetaan menu Appiin
import Fishcard from "./components/Fishcard/Fishcard";  //Nostetaan kalakortti Appiin
import Content from "./components/Content/Content";   //Nostetaan content Appiin

function App() {               
  return (
    <div className="App">   
      <Header/>
      <Content>
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
      </Content>
      <Menu/>
    </div>
  );
}

export default App;
