import React, { useState, useEffect } from "react"
import axios from "axios"
import "./cyborg_bootstrap.css"

function App() {
  const [pokes, setPokes] = useState(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1200")
      .then((response) => {
        setPokes(response.data.results)
      })
  }, [])

  const handleClick = (e) => {
    setShow(!show)
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <button onClick={handleClick} className="btn btn-primary">
            Get Pokémon
          </button>
          <div className="row row-cols-6 g-3">
            {show &&
              pokes.map((poke, index) => {
                return (
                  <div className="col btn btn-info me-3" key={index}>
                    {poke.name}
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
