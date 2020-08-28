import React from "react";

import Content from "../Content/Content";
import Button from "../buttons";

import "./AddItem.css";

function AddItem(props) {       //Tehdään lomake
    return (
      <Content>

        <div className="additem">

        <h2>Add new</h2>

        <form>

            <div className="itemform">
                <div className="itemform__row">
                    <div>
                        <label for="date">Date</label>
                        <input type="text" name="date" size="10" />
                    </div>
                    <div>
                        <label for="place">Location</label>
                        <input type="text" name="place" />
                    </div>
                 </div>

                 <div className="itemform__row">                
                    <div>
                        <label for="fishtype">Species</label>
                        <input type="text" name="fishtype" />
                    </div>
                    <div>
                        <label for="weight">Weight</label>
                        <input type="text" name="weight" />
                    </div>
                </div>

                <div className="itemform__row">
                    <div>
                        <button>CANCEL</button>
                    </div>
                    <div>
                        <button primary>ADD</button>
                    </div>
                </div>

             </div>

        </form>
        </div>
      </Content>
    );
}

export default AddItem;