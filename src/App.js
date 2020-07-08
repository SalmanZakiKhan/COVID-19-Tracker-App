import React, { useState,useEffect } from 'react';
import Header from "./components/Header"
import Cards from "./components/Cards"
import Chart from "./components/Chart"
import SearchBar from "./components/SearchBar"
import { fetchData,fetchCountriesData } from "./components/api"
import "./App.css"


const App = () => {

  const [currentNumbers,setCurrentNumbers] = useState({});         
  const [countries,setCountries] = useState([]);
  const [mulk,setMulk] = useState('World');
  

   useEffect(() => {
   
    const fetchCountries = async () => {
      const result = await fetchCountriesData();
      setCountries(result.map(country => country.name));
    }
    
    fetchStats(mulk);

    fetchCountries();
    
   },[])
  

   
 const fetchStats = async (country) => {
 
  const {confirmed,recovered,deaths,lastUpdate} = await fetchData(country);
  setCurrentNumbers({confirmed,recovered,deaths,lastUpdate});
 
}
  const onCountryChange = newCountry => {

    fetchStats(newCountry);
    setMulk(newCountry);
  } 
  
  return (
    <div className="container"> 
      <Header />
      <Cards currentNumbers={currentNumbers}/> 
      <SearchBar countries={countries} onCountryChange={onCountryChange}/>
      <div className="bars">
        <Chart currentNumbers={currentNumbers}  mulk={mulk} />
      </div>
    </div> 
  )
  
}

export default App

