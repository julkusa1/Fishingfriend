import React from "react";

import Content from "../Content/Content";

import { Line } from "react-chartjs-2"; //Importataan taulukko chart.js:stä
import { Doughnut } from "react-chartjs-2"; //Importataan donitsikaavio chart.js:stä

import "./Stats.css";

function Stats(props) {

  const reducer = (groupedData, currentItem) => {
    const index = groupedData.findIndex(item => item.fishtype === currentItem.fishtype);
    if (index >= 0) {
      groupedData[index].weight = groupedData[index].weight + currentItem.weight;
    } else {
      groupedData.push({fishtype: currentItem.fishtype, weight: currentItem.weight});
    }
    return groupedData;
  }

  let  groupedData = props.data.reduce(reducer, []);
  
  let doughnutData = {
    labels: groupedData.map(item => item.fishtype),
    datasets: [
      {
        data: groupedData.map(item => item.weight),
        backgroundColor: [
          "#009ccc",
          "#4dbeff",
          "#4dd5ff",
          "#e6f9ff"
        ],
      }
    ]
  }

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
            <h3>Weight of fish by fishing day</h3>
            <div className="stats__graph">
              <Line data={data} options={options} />
            </div>
            <h3>Weight of fish by fish type</h3>
            <div className="stats__graph">
              <Doughnut data={doughnutData} />
            </div>
        </div>     
      </Content>
    );
  }

  export default Stats;