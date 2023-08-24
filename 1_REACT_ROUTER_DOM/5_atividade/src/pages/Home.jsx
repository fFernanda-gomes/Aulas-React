import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
        <h1>Home</h1>
        <Link to={"/users"}>Usuarios</Link>
    </>
  )
}

export default Home