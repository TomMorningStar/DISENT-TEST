import React from 'react'
import { CountryData } from '../constants/types'
import { useParams } from 'react-router'

export const Detail = () => {
  const [country, setCountry] = React.useState<CountryData | null>(null)
  const [error, setError] = React.useState<string | null>(null)
  const { countryName } = useParams()

  React.useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .then((data) => {
        setCountry(data[0])
      })
      .catch((error: Error) => {
        setError(error.message)
      })
  }, [countryName])

  if(error) {
    return <div className="alert alert-danger">{error}</div>
  }

  if (!country) {
    return <div className="alert alert-info">Loading...</div>
  }

  return (
    <div>
      <h2>{country.name.common}</h2>
      <div className="mb-3">
        <strong>Capital:</strong> {country.capital}
      </div>
      <img src={country.flags.png} alt="Flag" width="100" className="mb-3" />

      <div className="mb-3">
        <h4>Additional Information:</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Population:</strong> {country.population.toLocaleString()}
          </li>
          <li className="list-group-item">
            <strong>Region:</strong> {country.region}
          </li>
          <li className="list-group-item">
            <strong>Subregion:</strong> {country.subregion}
          </li>
          <li className="list-group-item">
            <strong>Languages:</strong> {Object.keys(country.languages).join(', ')}
          </li>
          <li className="list-group-item">
            <strong>Currencies:</strong> {Object.keys(country.currencies).join(', ')}
          </li>
        </ul>
      </div>

      <div className="mb-3">
        <h4>Timezones:</h4>
        <ul className="list-group">
          {country.timezones.map((timezone, index) => (
            <li key={index} className="list-group-item">
              {timezone}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
