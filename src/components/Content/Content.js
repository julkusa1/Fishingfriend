import React from "react";    //Tämä komponentti sisältää scrollauspalkin

import "./Content.css";

function Content(props) {
    return (
      <div className="content">
        { props.children }
      </div>
    )
  }

  export default Content;