import React from 'react'

function SearchBar({countryNames,onCountryChange}){

    if(!countryNames[0]){
        console.log(countryNames[0]);
        return <h1>Loading...</h1>
    }

    return (
            <form>
                <select name="countries" onChange={(e) => onCountryChange(e.target.value)}>
                <option key={0} value="World">World</option>
                {
                   countryNames.map((country,i) => (
                      <option key={i+1} value={country}>{country}</option>
                    ))
                }
                </select>
            </form> 
    )
}

export default SearchBar
