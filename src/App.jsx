import './App.css'
import { Routes, Route } from 'react-router-dom'

// components
import Header from './components/Header'
import StarshipList from './components/StarshipList'
import StarshipDetails from './pages/StarshipDetails'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<StarshipList />} />
        <Route path='/starship' element={<StarshipDetails />} />
      </Routes>
    </>
  )
}

export default App
