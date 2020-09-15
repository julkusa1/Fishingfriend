import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";                
import './App.css';
import testdata from "./testdata";    //Tuodaan testidata
import firebase, { provider, auth } from "./firebase";  //Tuodaan firebase olio

import Header from "./components/Header/Header";  //Nostetaan Header komponentti Appiin
import List from "./components/List/List";  //Nostetaan lista Appiin
import Stats from "./components/Stats/Stats"; //Nostetaan tilasto Appiin
import Settings from "./components/Settings/Settings";  //Nostetaan asetukset Appiin
import Menu from "./components/Menu/Menu";    //Nostetaan menu Appiin
import AddItem from "./components/AddItem/AddItem"; //Nostetaan lomake Appiin
import EditItem from "./components/EditItem/EditItem"; //Nostetaan EditItem Appiin
import Content from "./components/Content/Content"; //Nostetaan content Appiin
import Button from "./components/buttons";    //Nostetaan buttonit Appiin


class App extends Component {                    //Nostetaan komponentit App funktioon reitittimellä
  
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectList: ["Rabbit river", "White river", "Big river"],
      user: null,
      error: null
    }
    this.dbRef = firebase.firestore();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSelectListForm = this.handleSelectListForm.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {                   //Tämä käy läpi firebasen datan

    auth.onAuthStateChanged((user) => {
      if(user) {
        this.setState({
          user: user
        });
          this.refData = this.dbRef.collection("users").doc(user.uid).collection("data");

          this.refData.orderBy("date","desc").onSnapshot((docs) => {
            let data = [];
            docs.forEach((doc) => {
              let docdata = doc.data();
              data.push(docdata);
            });
            this.setState({
              data: data
            });
          });
        }
    });
  }

  handleFormSubmit(newdata) {                   //Lomakkeen käsittelijä, joka lisää uudet tiedot taulukkoon
    this.refData.doc(newdata.id).set(newdata);
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
    this.refData.doc(id).delete().then().catch(error => {console.error("Error while deleting data:", error)});
  }

  login() {                             //Tässä luodaan kirjautumisikkuna
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      this.setState({
        user: user,
        error: null
      });
    }).catch((error) => {
      const errorMessage = error.message;
      this.setState({
        error: errorMessage
      });
    });
  }

  logout() {
     auth.signOut().then(() => {
        this.setState({
          user: null
        });
        this.refData = null;
     });
  }
  
  render() {      //Tässä ensin aloitusivu, josta kirjaudutaan sisään

    if (!this.state.user) {
      return (
        <Router>
          <div className="App">
            <Header />
            <Content>
              <div className="App__welcome">
                <div>You are not signed in yet. </div>
                <div><Button onClick={this.login}>Sign in</Button></div>
                <div>{this.state.error?<p>{this.state.error}</p>:null}</div>
              </div>
            </Content>
            <Menu />
          </div>
        </Router>
      )                    //Jos ei olla kirjautuneena sisään niin palautetaan
    }

    return (                //Nostetaan data käyttöön
      <Router> 
        <div className="App">   
          <Header/>
          <Route path="/" exact render={() => <List data={this.state.data}/> }/>
          <Route path="/stats" render={() => <Stats data={this.state.data} /> }/>
          <Route path="/settings" render={() => <Settings selectList={this.state.selectList}
                                                                onFormSubmit={this.handleSelectListForm}
                                                                onLogout={this.logout}
                                                                user={this.state.user} /> } />
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
