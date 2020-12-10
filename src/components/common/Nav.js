import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return  (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/getaquote" className="navbar-item">Get a Quote</Link>
          <Link to="/quiz" className="navbar-item">Quiz</Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav