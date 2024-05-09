import React from 'react'
import { CountryData } from '../constants/types'
import { Link } from 'react-router-dom'

import ListGroup from 'react-bootstrap/ListGroup'

export const Home = () => {
  const [countries, setCountries] = React.useState<CountryData[]>([])
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .then((data) => {
        setCountries(data)
      })
      .catch((error: Error) => {
        setError(error.message)
      })
  }, [])

  if (error) {
    return <div className="alert alert-danger">{error}</div>
  }

  if (!countries.length) {
    return <div className="alert alert-info">Loading...</div>
  }

  return (
    <div>
      <h1 className="mb-4">Countries</h1>
      <ListGroup>
        {countries.map((country, index) => (
          <ListGroup.Item key={index} className="list-group-item-action">
            <Link
              to={`/country/${country.name.common}`}
              className="text-decoration-none text-dark"
            >
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h2 className="mb-1">{country.name.common}</h2>
                  <p className="mb-1">
                    <strong>Capital:</strong> {country.capital}
                  </p>
                </div>
                <img src={country.flags.png} alt="Flag" width="100" className="ml-3" />
              </div>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}
