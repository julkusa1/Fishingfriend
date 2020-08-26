import React from "react";

import "./Fishcard.css";      //Tuodaan kalakortin tyylimääritteet

function Fishcard(props) {        //Kalakortin rivit
    return (
      <div className="fishcard">
        <div className="fishcard__line">
            <div className="fishcard__date">12.8.2020</div>
            <div className="fishcard__fish">River salmon</div>
        </div>
        <div className="fishcard__line">
            <div className="fishcard__place">White river</div>
            <div className="fishcard__weight">1,2</div>
        </div>
      </div>
    );
}

export default Fishcard;
