import React from 'react'

function QuizCard(quizQuote) {
  return (
    <div className= "column is-half-desktop is-one-third-tablet">
      <div className="card">
        <div className="card-content">
          <p>{quizQuote.text}</p>
        </div>
        <div className="card-footer">
          <div className="card-footer-title">{quizQuote.author}</div>
        </div>
      </div>
    </div>
  )
}

export default QuizCard