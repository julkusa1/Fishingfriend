import React from "react";

import Content from "../Content/Content";
import ItemForm from "../ItemForm/ItemForm";

import "./AddItem.css";

function AddItem(props) {               //Tämä komponentti sisältää lomakesivun otsikon ja sisällön
    return (
      <Content>

        <div className="additem">

        <h2>~~~ Add new catch ~~~</h2>

        <ItemForm onFormSubmit={props.onFormSubmit} selectList={props.selectList} />
 
        </div>
      </Content>
    );
}

export default AddItem;