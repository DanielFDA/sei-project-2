import React from 'react'
import { getAllQuotes } from '../../lib/api'
import { useHistory } from 'react-router-dom'

function Quiz() {
  const history = useHistory()
  const [playedAuthors, setPlayedAuthors] = React.useState([])
  const [quotes, setQuotes] = React.useState(null)
  const [quizQuote, setQuizQuote] = React.useState({
    text: '',
    author: '',
  })

  const [options, setOptions] = React.useState(null)
  const [game, setGame] = React.useState(1)
  const [correctOption, setCorrectOption] = React.useState(0)


  const handleGame = (e) => {
    if (game === 10) {
      alert(`You've scored ${correctOption} out of 10 answers right`)
      history.push('/')
    }
    if (e.target.value === quizQuote.author) {
      setCorrectOption(correctOption + 1)
    } else {
      console.log('wrong')
    }
    setGame(game + 1)
  }


  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllQuotes()
        const filteredData = data.filter(item => {
          return item.author
        })
        setQuotes(filteredData)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  React.useEffect(()=> {
    if (!quotes) return 

    let item = quotes[Math.floor(Math.random() * quotes.length)]
    while (playedAuthors.includes(item.author)) {
      item = { ...quotes[Math.floor(Math.random() * quotes.length)] }
    }
    const options = getOptions(quotes, item)z
    setOptions(options)
    setPlayedAuthors([...playedAuthors, item.author])
    setQuizQuote(item)
  }, [game])

  const getOptions = (quotes, quizQuote) => {
    if (!quotes) return []
    const randomOptionsNumber = Math.floor(Math.random() * 4)
    const optionsArray = []
    if (randomOptionsNumber === 0) {
      optionsArray.push(quizQuote)
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        optionsArray.push(quotes[randomIndex])
      }
    } else if (randomOptionsNumber === 1) {
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        optionsArray.push(quotes[randomIndex])
      }
      optionsArray.push(quizQuote)
    } else if (randomOptionsNumber === 2) {
      for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        optionsArray.push(quotes[randomIndex])
      }
      optionsArray.push(quizQuote)
      const randomIndex = Math.floor(Math.random() * quotes.length)
      optionsArray.push(quotes[randomIndex])
    } else if (randomOptionsNumber === 3) {
      const randomIndex = Math.floor(Math.random() * quotes.length)
      optionsArray.push(quotes[randomIndex])
      optionsArray.push(quizQuote)
      for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        optionsArray.push(quotes[randomIndex])
      }
    }
    return optionsArray
  }

  return (
    <>
      <section className="hero is-fullheight-with-navbar is-info">
        <div className="container quiz-title">
          <h1 className="title is-center q-title">Guess who said the Quote!</h1>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-content">{quizQuote.text}</div>
          </div>
        </div>
        <div className="container">
          {options ?
            options.map((option, index) => (
              <button 
                className='button'
                key={index.toString()}
                onClick={handleGame}
                value={option.author}
              >
                {option.author}
              </button>
            ))
            :
            '... loading'
          }
        </div>
        <div className="game-info">
          <p className="pStyles">Score: {correctOption}</p>
          <p className="pStyles">Question Humber: {game}</p>
        </div>
      </section>
    </>
  )
}

export default Quiz
