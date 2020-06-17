import React, { Component } from 'react';
import Cards from "./components/Cards"
import Chart from "./components/Chart"
import SearchBar from "./components/SearchBar"
import "./App.css"

 class App extends Component {

  state = {
    totalNumber: null,
    totalRecovered: null,
    totalDeaths: null,
    currentCountry: '',
    countryNames: []
  }

  fetchWorldWideData = async () => {
     await fetch("https://covid19.mathdro.id/api")
    .then(res => res.json())
    .then(({confirmed, recovered, deaths}) => this.setState({
      totalNumber: confirmed.value,
      totalRecovered: recovered.value,
      totalDeaths: deaths.value
    }))
    .catch(err => console.log(err)); 
  }

  fetchCountriesData = async () => {
    await fetch("https://covid19.mathdro.id/api/countries")
    .then(res => res.json())
    .then(({countries}) => this.setState({ 
      countryNames: countries.map((country) => country.name)
     }))
    .catch(err => console.log(err));
  }
  
  fetchCountryData = async (country) => {
     await fetch(`https://covid19.mathdro.id/api/countries/${country}`)
     .then(res => res.json())
     .then(data => this.setState({
       totalNumber: data.confirmed.value,
       totalRecovered: data.recovered.value,
       totalDeaths: data.deaths.value
     }))
     .catch(err => console.log(err));
  }
  
  onCountryChange = async (country) => {
     this.setState({currentCountry: country});
     if (country === "World") {
       return await this.fetchWorldWideData();
     }
     return await this.fetchCountryData(country);
  }

  async componentDidMount() {
    await this.fetchWorldWideData();
    await this.fetchCountriesData();
  }
  
  render() {
    const { totalNumber,totalRecovered,totalDeaths,countryNames,currentCountry } = this.state;
    return (
      <div className="container"> 
        <h1>COVID-19 TRACKER APP</h1>
        <Cards totalNumber={totalNumber} totalRecovered={totalRecovered} totalDeaths={totalDeaths}/> 
        <SearchBar countryNames={countryNames} onCountryChange={this.onCountryChange}/>
        <Chart totalNumber={totalNumber} totalRecovered={totalRecovered} totalDeaths={totalDeaths} currentCountry={currentCountry}/>
      </div>
    )
  }
}

export default App

