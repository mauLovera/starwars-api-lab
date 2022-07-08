import { useState, useEffect } from 'react'
import { getDetails } from "../services/api-calls"
import { useLocation } from 'react-router-dom'

const StarshipDetails = (props) => {
  const [starshipDetails, setStarshipDetails] = useState([])
  const location = useLocation()

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchStarshipDetails()
  }, [])

  return (
    <>
      <main className="starship-details">
        <hr className="starship-details--divider"/>
        <h2 className="starship-details--title">{starshipDetails.name}</h2>
        <section className='starship-details--container'>
          <h3></h3>
        </section>
      </main>
    </>
  )
}

export default StarshipDetails