import React from "react";

import Content from "../Content/Content";
import ItemForm from "../ItemForm/ItemForm";

import "./EditItem.css";

function EditItem(props) {               //Tämä komponentti sisältää lomakesivun otsikon ja sisällön
    
    const index = props.data.findIndex(item => item.id === props.match.params.id);    //Tässä ohjataan löytämään oikea data
    let itemData = props.data[index];

    return (
      <Content>

        <div className="edititem">

        <h2>~~~ Edit fishcard ~~~</h2>

        <ItemForm onFormSubmit={props.onFormSubmit} selectList={props.selectList} data={itemData} onDeleteItem={props.onDeleteItem} />
 
        </div>
      </Content>
    );
}

export default EditItem;