import React from "react";
import Content from "../Content/Content";
import Button from "../buttons";
import "./Settings.css";

function Settings(props) {

    const handleSubmit = function(event) {    //Tässä on lomakkeen käsittelijä
      event.preventDefault();
      let place = event.target.elements.place.value;
      props.onFormSubmit(place);
      event.target.elements.place.value ="";
    }

    return (
      <Content>
        <div className="settings">
          <h2>~~~~~ Settings ~~~~~~</h2>
          <h3>Fishing locations</h3>
           <div className="settings__items">
              { props.selectList.map(item => <div key={item}>{item}</div>)}
              <form onSubmit={handleSubmit}>
                <div className="settingsForm">
                  <input type="text" name="place" />
                  <Button type="submit" primary>ADD</Button>
                </div>
              </form>
          </div>
        </div>
      </Content>
    );
  }

  export default Settings;