import React, { useState } from 'react'
import axios from 'axios';


const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'ce59e198cc9433fe5cd877900b96ce66';


const Content = () => {
  const [data,setData] = useState()
  const [location,setLocation] = useState('')

  let query =`${url}weather?q=${location}&appid=${key}&units=metric`;


  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(query).then((response) => {
        setData(response.data)
        console.log(response.data)    
    })
    searchLocation('')
   }
  }
  return (
    <div className='weather-content'>
      <div className="search-box">
      <input className='search-input'
     value={location} 
     onChange={(event) => {setLocation(event.target.value) }}
     onKeyPress={searchLocation}
     type="text" placeholder='Enter Location'/>
      </div>
    { data &&
            <div className='city-container'>
            <div className='city'>{data.name},<span className='country'>{data.sys.country}</span></div>
            {data.main ? <div className='temp'>{data.main.temp.toFixed()}°C</div> : null}
            {data.weather ? <div className='desc'>{data.weather[0].description}</div> : null}
            {data.main ? <div className='min-max'>{data.main.temp_min.toFixed()}<span>°C</span> / {data.main.temp_max.toFixed()}°C</div> : null}      
     </div>  
    }        
    </div>
  )  
}
export default Content


