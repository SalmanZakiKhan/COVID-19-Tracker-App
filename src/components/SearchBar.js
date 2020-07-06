import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const SearchBar = ({countries,onCountryChange}) => {


    if(!countries[0]){                        

        return null;
    }
   
    return (
            <FormControl>
                <NativeSelect name="countries" className="searchcountry" onChange={(e) => onCountryChange(e.target.value)}>
                  <option key={0} value="World">World</option>
                  {
                      countries.map((country,i) => (
                        <option key={i+1} value={country}>{country}</option>
                      ))
                  }
                  
                </NativeSelect>
            </FormControl> 
    )
}

export default SearchBar
