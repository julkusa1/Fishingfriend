import React from "react";      //Tämä komponentti sisältää kalakortin lomaketiedot
import { withRouter } from "react-router";
import { v4 as uuidv4 } from "uuid";


import Button from "../buttons";

import "./ItemForm.css";

class ItemForm extends React.Component {    //Tässä lomake, jolla tietoja voi lisätä

    constructor(props) {                    //Konstruktori lomakkeen tiedoille
        super(props);
        const data = props.data ? props.data : {
            date: "",
            place: "Big River",
            fishtype: "Grayling",
            weight: 0
        }
        this.state = {
                data: data
            };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    handleInputChange(event) {                                      //Tällä toiminnolla voidaan käsitellä lomakkeelta saatavaa tietoa
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
            data: {
                ...this.state.data,
                [name]: value
            }
        });
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.goBack();
    }

    handleSubmit(event) {                   //Tässä käsitellään lomakkeen tietoja ja
        event.preventDefault();             //tehdään reititys Add napista etusivulle
        let data = Object.assign({}, this.state.data);
        data.weight = parseFloat(data.weight);
        data.id = data.id ? data.id : uuidv4();     //Tässä luodaan uusille kalakorteille id
        this.props.onFormSubmit(data);
        this.props.history.push("/");
    }

    handleDeleteItem(event) {
        event.preventDefault();
        this.props.onDeleteItem(this.state.data.id);
        this.props.history.push("/");
    }

    render() {                              //Tässä lomakkeen syöttökentät ja valikot
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="itemform">
                    <div className="itemform__row">
                        <div>
                            <label htmlFor="date">Date</label>
                            <input type="date" name="date" value={this.state.data.date} onChange={this.handleInputChange}/>
                        </div>
                        <div>
                            <label htmlFor="place">Location</label>
                            <select name="place" value={this.state.data.place} onChange={this.handleInputChange}>

                                {this.props.selectList.map(item => <option value={item} key={item}>{item}</option>)}

                            </select>
                        </div>
                    </div>

                    <div className="itemform__row">                
                        <div>
                            <label htmlFor="fishtype">Species</label>
                            <select name="fishtype" value={this.state.data.fishtype} onChange={this.handleInputChange}>
                                <option value="Grayling">Grayling</option>
                                <option value="Pike">Pike</option>
                                <option value="Salmon">River Salmon</option>
                                <option value="Trout">Trout</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="weight">Weight</label>
                            <input type="number" name="weight" step="0.1" value={this.state.data.weight} onChange={this.handleInputChange}/>
                        </div>
                    </div>

                    <div className="itemform__row">
                        <div>
                            <Button onClick={this.handleCancel}>CANCEL</Button>
                        </div>
                        <div>
                            <Button type="submit" primary>{this.state.data.id ? "SAVE" : "ADD"}</Button>    
                        </div>
                    </div>

                        { this.props.onDeleteItem ?
                            <div className="itemform__row">
                                <div>
                                    <Button onClick={this.handleDeleteItem}>DELETE</Button>
                                </div>
                                <div></div>
                            </div> : "" }
                </div>

            </form>
        );
    }
}

export default withRouter(ItemForm);