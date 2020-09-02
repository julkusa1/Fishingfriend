import React from "react";      //Tämä komponentti sisältää kalakorttirivit ja lisäysnapin ja nostaa testidatan
import { Link } from "react-router-dom";

import Fishcard from "../Fishcard/Fishcard"; //Nostetaan kalakortti komponenteista
import Content from "../Content/Content";
import {FloatingButton} from "../buttons";

function List(props) {

    let rows = props.data.map(fishinfo => {
      return (
        <Fishcard data={fishinfo} key={fishinfo.id}/> 
      );
    }
  );

    return (
      <Content>
        {rows}
        <Link to="/add"><FloatingButton primary>+</FloatingButton></Link>
      </Content>
    );
}

  export default List;