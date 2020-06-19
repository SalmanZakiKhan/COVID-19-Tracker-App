import axios from "axios";

const API_KEY = "https://covid19.mathdro.id/api";

export const fetchWorldWideData = async () => {

    try {
      const response = await axios.get(API_KEY);
      console.log(response);
    } catch (error) {
      console.log(error);
      return error;
    }
 }

 export const fetchCountriesData = async () => {

   try {
     const response = await axios.get(`${API_KEY}/countries`);
     console.log(response);
   } catch (error) {
     console.log(error);
   }

 }

 export const fetchCountryData = async (country) => {
  
  try {
    const response = await axios.get(`${API_KEY}/${country}`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
  
 }