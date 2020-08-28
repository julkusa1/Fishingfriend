import React from "react";

import Fishcard from "../Fishcard/Fishcard"; //Nostetaan kalakortti komponenteista
import Content from "../Content/Content";
import testdata from "../../testdata";    //Tuodaan testidata

function List(props) {

    let rows = testdata.map(fishinfo => {
      return (
        <Fishcard data={fishinfo}/>   //Tässä välitetään testidata kalakorteille
      );
    }
  );

    return (
      <Content>
        {rows}
      </Content>
    );
}

  export default List;