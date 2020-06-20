import React, { Component,useState,useEffect } from 'react';
import Cards from "./components/Cards"
import Chart from "./components/Chart"
import SearchBar from "./components/SearchBar"
//import { fetchCountriesData,fetchWorldWideData,fetchCountryData } from "./components/api"
import "./App.css"


const App = () => {

  const [currentNumbers,setCurrentNumbers] = useState({}); 
  const [countries,setCurrentCountries] = useState([]);
  const [country,setCountry] = useState('');

  // useEffect(() => {
  //    fetchWorldWideData();
  //    fetchCountriesData();
  // },[])


  const fetchWorldWideData = async () => {
     await fetch("https://covid19.mathdro.id/api")
    .then(res => res.json())
    .then(({confirmed, recovered, deaths}) => setCurrentNumbers({
      confirmed,
      recovered,
      deaths
    }))
    .catch(err => console.log(err)); 
  }

  const fetchCountriesData = async () => {
    await fetch("https://covid19.mathdro.id/api/countries")
    .then(res => res.json())
    .then(({countries}) => setCurrentCountries(countries.map(country => country)))
    .catch(err => console.log(err));
  }
  
  const fetchCountryData = async (country) => {
     await fetch(`https://covid19.mathdro.id/api/countries/${country}`)
     .then(res => res.json())
     .then(data => {
       setCountry(country);
       setCurrentNumbers({
       confirmed: data.confirmed.value,
       recovered: data.recovered.value,
       deaths: data.deaths.value,
     });
  })
     .catch(err => console.log(err));
  }
  
  const onCountryChange = async (country) => {
    
     if (country === "World") {
       setCountry(country);
       return await fetchWorldWideData();
     }
     return await fetchCountryData(country);
  }
  
    return (
      <div className="container"> 
          <h1>COVID-19 TRACKER APP</h1>
          <Cards currentNumbers={currentNumbers}/> 
          <SearchBar countries={countries} onCountryChange={onCountryChange}/>
          <Chart currentNumbers={currentNumbers} country={country}/>
      </div>
    )
  
}

export default App

