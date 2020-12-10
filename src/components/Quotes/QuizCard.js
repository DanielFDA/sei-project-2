import React from 'react'

function QuizCard({ text, author }) {
  return (
    <div className="column is-half-desktop is-one-third-tablet is-offset-one-quarter">
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">{author}</div>
        </div>
        <div className="card-content">
          <h5>{text}</h5>
        </div>
      </div>
    </div>
  )
}

export default QuizCard