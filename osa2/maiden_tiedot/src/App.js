import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Country from './components/Country'

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleShowClick = (countryName) => () => {
    setFilter(countryName)
  }

  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

  const countryList = () => (
    filteredCountries.map(country => <div key={country.name}>{country.name} <button onClick={handleShowClick(country.name)}>show</button></div>)
  )

  return (
    <div>
      find countries <input value={filter} onChange={handleFilterChange} />
      {(filteredCountries.length > 10) 
        ? <p>Too many matches, specify another filter</p>
        : (filteredCountries.length === 1)
          ? <Country country={filteredCountries[0]} />
          : countryList()}
    </div>
  )
}

export default App;
