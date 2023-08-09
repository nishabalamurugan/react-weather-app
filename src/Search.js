import React, { useEffect } from "react";
import { useState } from "react";
import './Search.css';
import axios from 'axios';
function Search()
{
    //const [data,setdata]=useState([]);
    const [data,setdata]=useState({

        temperature:0,
        temperature_min:0,
        temperature_max:0,
        humidity:0,
        name:'Enter name of the city '
    });
    const [location,setlocation]=useState("");
 
    const search=()=>{
        if (location !== "") {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7d48128a69491b8e516905ec540f34b0`;
            axios.get(url)
                .then(res => {
                    setdata({
                        ...data,
                        temperature: res.data.main.temp,
                        temperature_min: res.data.main.temp_min,
                        temperature_max: res.data.main.temp_max,
                        humidity:res.data.main.humidity,
                        name: res.data.name
                    });
                })
                .catch(err => console.log(err));
        }
    }
    return(
        <div class="container">
            <h1>Your trusted weather source for accurate forecasts and reliable updates. Stay informed, stay prepared.</h1><br></br>
            <p>Type in your city name and click the 'Search' button to get the latest weather information.</p><br></br>
           <input type="text" placeholder="Enter City" onChange={e=>setlocation(e.target.value)} ></input>
           <button   onClick={search} >SEARCH</button>
           <div class="content">
            <img src="location.png" height="200px"></img>
            <h3>LOCATION: {data.name}</h3>



            <div class="row">
            <div class="col">
            <img src="temp.png" height="100px"></img>
           <h4>Temperature(In Kelvin) : {data.temperature}</h4>
           </div>
           <div class="col">
           <img src="humidity.png" height="100px"></img>
           <h4>Humidity(In Kelvin) : {data.humidity}</h4>
           </div>
           </div>


           
           <div class="row">
            <div class="col">
            <img src="min_temp.png" height="100px"></img>
           <h4>Minimum Temperature : {data.temperature_min}</h4>
           </div>
           <div class="col">
           <img src="max_temp.png" height="100px"></img>
           <h4>Maximum Temperature:{data.temperature_max}</h4>
           </div>
           </div>
           
           
           </div>
           

        </div>
    );
}
export default Search;