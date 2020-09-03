import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";                
import './App.css';
import testdata from "./testdata";    //Tuodaan testidata

import Header from "./components/Header/Header";  //Nostetaan Header komponentti Appiin
import List from "./components/List/List";  //Nostetaan lista Appiin
import Stats from "./components/Stats/Stats"; //Nostetaan tilasto Appiin
import Settings from "./components/Settings/Settings";  //Nostetaan asetukset Appiin
import Menu from "./components/Menu/Menu";    //Nostetaan menu Appiin
import AddItem from "./components/AddItem/AddItem"; //Nostetaan lomake Appiin
import EditItem from "./components/EditItem/EditItem"; //Nostetaan EditItem Appiin

class App extends Component {                    //Nostetaan komponentit App funktioon reitittimellä
  
  constructor(props) {
    super(props);
    this.state = {
      data: testdata,
      selectList: ["Big River", "Rabbit River", "White River", "Cold River"]
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSelectListForm = this.handleSelectListForm.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  handleFormSubmit(newdata) {                   //Lomakkeen käsittelijä, joka lisää uudet tiedot taulukkoon
    let storeddata = this.state.data.slice();
    const index = storeddata.findIndex(item => item.id === newdata.id);
    if (index >= 0) {
      storeddata[index] = newdata;
    } else {
      storeddata.push(newdata);
    }
    storeddata.sort((a,b) => {
      const aDate = new Date(a.date);           //Tässä sortataan tulokset aikajärjestykseen
      const bDate = new Date(b.date);
      return bDate.getTime() - aDate.getTime();
    } );
    this.setState({
      data: storeddata
    });
  }

  handleSelectListForm(newitem) {           //Lomakeen käsittelijä, joka lisää uuden rivin ja sorttaa
    let selectList = this.state.selectList.slice();
    selectList.push(newitem);
    selectList.sort();
    this.setState({
      selectList: selectList
    });
  }

  handleDeleteItem(id) {                  //Lomakeen käsittelijä, joka poistaa tietyllä idllä olevan tietueen
    let storeddata = this.state.data.slice();
    storeddata = storeddata.filter(item => item.id !== id);
    this.setState({
      data: storeddata
    });
  }
  
  render() {
    return (
      <Router> 
        <div className="App">   
          <Header/>
          <Route path="/" exact render={() => <List data={this.state.data}/> }/>
          <Route path="/stats" component= {Stats}/>
          <Route path="/settings" render={() => <Settings selectList={this.state.selectList} onFormSubmit={this.handleSelectListForm} /> } />
          <Route path="/add" render={() => <AddItem onFormSubmit={this.handleFormSubmit} selectList={this.state.selectList} />} />
          <Route path="/edit/:id" render={(props) => <EditItem data={this.state.data}
                                                                selectList={this.state.selectList}
                                                                onFormSubmit={this.handleFormSubmit}
                                                                onDeleteItem={this.handleDeleteItem}
                                                                {...props} /> } />
          <Menu/>
        </div>
      </Router>
    );
  }
}

export default App;
