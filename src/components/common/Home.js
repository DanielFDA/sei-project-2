import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="hero is-fullheight-with-navbar is-info">
      <div className="hero-body">
        <div className="container">
          <section className="section is-small">
            <h1 className="title is-1 has-text-centered">
            Motivational Maddening
            </h1>
            <hr />
          </section>
          <section className="is small level-item">
            <Link to="/quiz">
              <button className="button is-center">Play</button>
            </Link>
          </section>
          <section className="section is-medium is-center level-item">
            <img className="do-it" src='https://media4.giphy.com/media/CpgNjk2E54p7W/200w.webp?cid=ecf05e47cmm8ml4fl3fordaxcrfwmwv2w043t3cmpgjrm3me&rid=200w.webp' alt='Just Do It'/>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Home