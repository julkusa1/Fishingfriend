import React from "react";    //Tässä komponentissa on headeri
import "./Header.css";              //Tuodaan tyylimääritteet Header.css

function Header(props) {          //Tässä on otsikkorivi
    return(
      <div className="header">
        <h1>~~ Fishing Friend ~~~~~~~</h1>      
      </div>
    )
}

export default Header;