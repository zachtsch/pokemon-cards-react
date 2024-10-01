import { useState, useEffect } from 'react'
import PokemonHand from './PokemonHand'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PokemonHand />
    </>
  )
}

export default App
