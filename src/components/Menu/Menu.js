import React from "react";    //Tämä komponentti sisältää menun buttonit
import { Link } from "react-router-dom";

import "./Menu.css";              //Tuodaan Menun tyylimääritteet
import ViewList from "@material-ui/icons/ViewList";   //Tuodaan ikonit
import TrendingUp from "@material-ui/icons/TrendingUp";
import Settings from "@material-ui/icons/Settings";

function Menu(props) {              //Menun napit
    return (
      <div className="menu">
        <Link to="/"><div className="menu__button"><ViewList htmlColor="#fff" /></div></Link>
        <Link to="/stats"><div className="menu__button"><TrendingUp htmlColor="#fff" /></div></Link>
        <Link to="/settings"><div className="menu__button"><Settings htmlColor="#fff" /></div></Link>
      </div>
    );
}

export default Menu;
