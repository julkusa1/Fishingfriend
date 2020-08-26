import React from "react";

import "./Menu.css";              //Tuodaan Menun tyylimääritteet
import ViewList from "@material-ui/icons/ViewList";   //Tuodaan ikonit
import TrendingUp from "@material-ui/icons/TrendingUp";
import Settings from "@material-ui/icons/Settings";

function Menu(props) {              //Menun napit
    return (
      <div className="menu">
        <div className="menu__button"><ViewList htmlColor="#fff" /></div>
        <div className="menu__button"><TrendingUp htmlColor="#fff" /></div>
        <div className="menu__button"><Settings htmlColor="#fff" /></div>
      </div>
    );
}

export default Menu;
