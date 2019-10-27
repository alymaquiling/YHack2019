import React from "react";
import Chart from "react-google-charts";

export default function BarChart(props){

    const options = {
        legend: { position: "bottom" }
      };
      
    return (
        <Chart
          chartType="Bar"
          width="100%"
          height="450px"
          data={props.data}
          options={options}
        />
    );
}