import React from "react";
import { Link } from "react-router-dom";

import Fishcard from "../Fishcard/Fishcard"; //Nostetaan kalakortti komponenteista
import Content from "../Content/Content";
import {FloatingButton} from "../buttons";

function List(props) {

    let rows = props.data.map(fishinfo => {
      return (
        <Fishcard data={fishinfo}/>   //Tässä välitetään testidata kalakorteille
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