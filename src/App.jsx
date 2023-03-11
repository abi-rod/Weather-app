import './App.css'
import Weather from './components/Weather'
import axios from 'axios'
import { useEffect, useState } from 'react'

 function App() {
  const [coordenates  , setCoordenates  ] = useState()
  const [ weatherData, setWeatherData] = useState ( {} )

  useEffect(() => {
  navigator.geolocation.getCurrentPosition( possition => {
     let latitude = possition.coords.latitude; 
    let longitude = possition.coords.longitude;
    setCoordenates({latitude, longitude})
    })
}, [])


  useEffect(() => {

    
    if (coordenates!== undefined){
      axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${coordenates.latitude}&lon=${coordenates.longitude}&appid=aaa63f88bc53e50d9cf04691883a92c5&units=metric`)
      .then( resp =>  setWeatherData (resp.data) )
      .catch( error => console.log (error) )
    }
    
  }, [coordenates] )

  
console.log(weatherData)
    return (
      <div className="App">
        <input type="text" />
        <Weather
        data={weatherData}
        />
      </div>
    )
  }

export default App
