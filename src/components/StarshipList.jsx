import { useState, useEffect } from 'react'
import { getStarshipList } from "../services/api-calls"
import { Link } from 'react-router-dom'

const StarshipList = (props) => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return (
    <>
      <main className="starship-list">
        <hr className="starship-list--divider"/>
        <h2 className="starship-list--title">STARSHIP LIST</h2>
        <table className="starship-list--table">
          <thead>
            <tr className="thead-row">
              <td>Name</td>
              <td>Model</td>
              <td>Manufacturer</td>
              <td>Details</td>
            </tr>
          </thead>
          <tbody>
            {starshipList.map(starship =>
              <tr key={starship.name}>
                <td>{starship.name}</td>
                <td>{starship.model}</td>
                <td>{starship.manufacturer}</td>
                <td>
                  <Link to={"/starship"} state={{starship}}>
                    <button className="button">
                      See More
                    </button>
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
    </>
  )
}

export default StarshipList