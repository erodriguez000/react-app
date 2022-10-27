import React from 'react'

function Home() {
  return (
    <div className="container">
    <div className="column">
      <button onClick={() => alert("Are you waiting for something?")}>Hello, World!</button>
    </div>
  </div>
  )
}

export default Home