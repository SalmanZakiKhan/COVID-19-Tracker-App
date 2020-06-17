
export const fetchWorldWideData = async () => {
   return await fetch("https://covid19.mathdro.id/api")
   .then(res => res.json())
   .catch(err => console.log(err));
 }

 export const fetchCountriesData = async () => {
   return await fetch("https://covid19.mathdro.id/api/countries")
        .then(res => res.json())
        .then(({countries}) => this.setState(countries.map((country) => country.name)))
        .catch(err => console.log(err));

 }
 

 export const fetchCountryData = async () => {
   return await fetch(`https://covid19.mathdro.id/api/countries/Pakistan`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
 }