import { useState, useEffect } from 'react'
import { getDetails } from "../services/api-calls"
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'


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
        {starshipDetails.length ? 
          <section className='starship-details--container'>
            <Link to={'/'}>Return to List</Link>
            <h3>model: {starshipDetails.model}</h3>
            <h3>manufacturer: {starshipDetails.manufacturer}</h3>
            <h3>cost: {starshipDetails.cost_in_credits} Credits</h3>
            <h3>max speed: {starshipDetails.max_atmosphering_speed}</h3>
          </section>
        : <h2>Loading....</h2>}
      </main>
    </>
  )
}

export default StarshipDetails