import React, { useEffect, useState } from 'react'



const Content = () => {

    const url = 'https://api.openweathermap.org/data/2.5/';
    const key = 'ce59e198cc9433fe5cd877900b96ce66';
//State
    let [search,setSearch] = useState('ankara');
    const [data,setData] = useState();


useEffect(() => {
    
    async function getData() {
        let query =`${url}weather?q=${search}&appid=${key}&units=metric&lang=tr`;

        const response = await fetch(query);
        const data = await response.json()
        setData(data);
}
getData();
},[])
  return (
    <div>
        {
            search === 'ankara' ? <input  className='search-input' type="text" placeholder='Şehir giriniz..' onChange={(e) => {setSearch(e.target.value)}}/>
            : null

        }
      
       
         { data ?
            <div className='city-content'>
        <div>{data.name},{data.sys.country}</div>
        <div>{Math.floor(data.main.temp)}°C</div>
        <div>{data.weather[0].description}</div>
        <div>{Math.floor(data.main.temp_min)}°C , {Math.floor(data.main.temp_max)}°C</div>
            </div>
             : null}   
          
    </div>
  )

  
}
export default Content