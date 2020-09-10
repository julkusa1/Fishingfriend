import React from "react";

import Content from "../Content/Content";

import { Line } from "react-chartjs-2"; //Importataan taulukko chart.js:stä

import "./Stats.css";

function Stats(props) {

  let linedata = props.data.map( item => ({x: item.date, y: item.weight}) ); //Määritellään mitä tietoa x ja y akseli käyttää

  let data = {
    datasets: [
      {
        label: "weights",
        data: linedata,
        fill: false,
        backgroundColor: "rgba(0,200,800)",
        borderColor: "rgba(0,156,204)"
      }
    ]
  }

  let options = {   //Määritellään miten x akseli näkyy
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            displayFormats: {
              day: "D.M.Y",
              month: "M.Y"
            }
          }
        }
      ]
    }
  }

    return (      //Nostetaan kaaviot Stats sivulle
      <Content>
        <div className="stats">
            <h2>~~~~~~~~Stats~~~~~~~~</h2>
            <div className="stats__graph">
              <Line data={data} options={options} />
            </div>
        </div>     
      </Content>
    );
  }

  export default Stats;