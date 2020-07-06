import axios from "axios";

export const fetchData = async (country) => {

  var API_KEY = "https://covid19.mathdro.id/api";
  
   if(country !== 'World'){
     API_KEY = `https://covid19.mathdro.id/api/countries/${country}`
   }

  try {
  const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(API_KEY);
  return {confirmed,recovered,deaths,lastUpdate}
  } catch(error){
    console.log(error);
  }
}


 export const fetchCountriesData = async () => {
  
  var API_KEY = "https://covid19.mathdro.id/api/countries";
   try {
     const {data : {countries}} = await axios.get(API_KEY);
     return countries;
   } catch (error) {
     console.log(error);
   
   }

 }


 export const fetchDailyData = async () => {
   
  var API_KEY = "https://covid19.mathdro.id/api/daily"
     try {
       const {data} = await axios.get(API_KEY);
       return {data}
     }
    catch (error) {
      console.log(error);
    }
   }
