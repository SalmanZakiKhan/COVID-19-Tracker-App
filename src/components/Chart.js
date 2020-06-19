import React from "react";
import { Line } from "react-chartjs-2";

const Chart = ({totalNumber,totalRecovered,totalDeaths,currentCountry}) => {
    
    const data = {
      labels: ["totalNumber","totalRecovered","totalDeaths"],
      datasets: [{
        label: "Total number of cases of COVID-19",
        data: [totalNumber]
      },{
        label: "Number of recovered people from COVID-19",
        data: [totalRecovered,totalRecovered,totalRecovered]
      }]
    }
    
    return(
        <div>
          <Line className="chart" data={data} />   
        </div>
    );
}

export default Chart

