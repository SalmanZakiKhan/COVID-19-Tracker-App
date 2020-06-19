import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

function SearchBar({countryNames,onCountryChange}){

    if(!countryNames[0]){                        

        return <h1>Loading...</h1>
    }
    
    return (
            <FormControl>
                <NativeSelect name="countries" onChange={(e) => onCountryChange(e.target.value)}>
                  <option key={0} value="World">World</option>
                  {
                     countryNames.map((country,i) => (
                       <option key={i+1} value={country}>{country}</option>
                    ))
                }
                </NativeSelect>
            </FormControl> 
    )
}

export default SearchBar
