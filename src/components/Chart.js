import React,{useState,useEffect} from "react";
import {fetchDailyData} from './api'
import { Line,Bar } from "react-chartjs-2";


const Chart = ({currentNumbers:{confirmed,recovered,deaths},mulk}) => {
 

  if(!confirmed){
    return null
  }

  const [numbers,setNumbers] = useState([]);            
 
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await fetchDailyData();
      const result = data.map(({confirmed,deaths,reportDate:date}) => ({confirmed: confirmed.total,deaths:deaths.total,date}));
      setNumbers(result);
    }

    fetchData();

  },[])

   const dataForLine = {
       labels: numbers.map(({date}) => date),
       datasets: [{
         data: numbers.map(data => data.confirmed),
         label: 'Infected',
         borderColor: '#3333ff',
         fill: true,
       },{
        data: numbers.map(data => data.deaths),
        label: 'Deaths',
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        fill: true,
       }]
   
   };

  const dataForBar = {
    labels: ["confirmed","recovered","deaths"],
    datasets: [{
      label: "People",
      backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
      data: [confirmed.value,recovered.value,deaths.value]
    }],
  }

     if(mulk === 'World'){
      return <Line data={dataForLine} />
     }
     
     return <Bar data={dataForBar} />
        
}

export default Chart

