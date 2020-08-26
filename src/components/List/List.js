import React from "react";

import Fishcard from "../Fishcard/Fishcard"; //Nostetaan kalakortti komponenteista
import Content from "../Content/Content";

function List(props) {
    return (
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
    );
  }

  export default List;