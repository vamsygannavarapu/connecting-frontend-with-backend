import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    axios('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  

  return (
    <>
      <h1>Connecting front end with backend</h1>
      <h3>{`Jokes: ${jokes.length}`}</h3>
      {jokes.map((joke) => (
        <h4 key={joke.id}>{joke.content}</h4>
      ))}
    </>
  )
}

export default App
