const baseURL = 'https://swapi.dev/api/'

export async function getStarshipList () {
  const res = await fetch(`${baseURL}/starships/`)
  return res.json()
}

export async function getDetails (apiURL) {
  const res = await fetch (`${apiURL}`)
  return res.json()
}