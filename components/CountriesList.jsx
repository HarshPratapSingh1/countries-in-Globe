import React, { useEffect, useState } from 'react'
// import countriesData from '../countriesData'
import CountryCard from './CountryCard'
import ShimmerEffect_outer from './ShimmerEffect_outer'

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data)
    })


    // return () => {
    //   clearInterval(intervalId)
    // }
  }, [])



  return (
    <>
    {countriesData.length==0?(<ShimmerEffect_outer/>):(
      <div className="countries-container">
        {countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(query)||country.region.toLowerCase().includes(query)
          )
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
                data={country}
              />
            )
          })}
      </div>)}
    </>
  )
}