import React from "react";    //Tässä komponentissa on kalakortin rivit
import moment from "moment";  //Tuodaan momentti
import ArrowRight from "@material-ui/icons/ArrowRight"  //Tässä tuodaan nuoli lomakkeen korjausta varten
import { Link } from "react-router-dom";

import "./Fishcard.css";      //Tuodaan kalakortin tyylimääritteet
import { formatMs } from "@material-ui/core";

function Fishcard(props) {        //Kalakortin rivit nostetaan propsilla testidatasta
   
  let date = moment(props.data.date);   //Otetaan moment käyttöön päivämäärän muokkausta varten
  
  return (
      <div className="fishcard">
        <div className= "fishcard__group">
          <div className="fishcard__line">
              <div className="fishcard__date">{date.format("LL")}</div>
              <div className="fishcard__fish">{props.data.fishtype}</div>
          </div>
          <div className="fishcard__line">
              <div className="fishcard__place">{props.data.place}</div>
              <div className="fishcard__weight">{props.data.weight.toFixed(1)} kg</div>
          </div>
        </div>
            <div className="fishcard__link">
              <Link to={"/edit/" + props.data.id}><ArrowRight/></Link>
            </div>
      </div>
    );
}

export default Fishcard;
