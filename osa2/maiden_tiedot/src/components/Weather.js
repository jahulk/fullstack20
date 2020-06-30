import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ city }) => {
  const [weather, setWeather] = useState({})

  const api_key = process.env.REACT_APP_API_KEY
  const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
         const { temperature, wind_speed, wind_dir } = response.data.current
         const weatherObject = {
            temperature,
            wind_speed,
            wind_dir
         }
         setWeather(weatherObject)
      })
  }, [url])

  return (
    <div>
      <h2>Weather in {city}</h2>
      <p>
        <b>temperature: </b>
        {weather.temperature} Celsius
      </p>
      <p>
        <b>wind: </b>
        {weather.wind_speed} kph direction {weather.wind_dir}
      </p>
    </div>
  )
}

export default Weather
