import React from 'react'
import { getAllQuotes } from '../../lib/api'

function Quiz() {

  const [quotes, setQuotes] = React.useState(null)
  const [newQuote, setNewQuote] = React.useState({
    text: '',
    author: '',
  })

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllQuotes()
        setQuotes(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  console.log(quotes)

  let item

  React.useEffect(()=> {
    const getRandomQuote = async () => {  
      // get random index value
      try {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        // get random item
        item = quotes[randomIndex]  
        setNewQuote(item)
      } catch (err) {
        console.log(err)
      }
    }
    getRandomQuote()
  }, [quotes])
  
  // console.log(getRandomQuote)

  return (
    <>
      {/* <section className="hero is-fullheight-with-navbar is-info">
        
      </section> */}
      <section className="hero is-fullheight-with-navbar is-info">
        <div className="container">
          <h1 className="title">Guess who Said the Quote!</h1>
          <p>Who said:</p>
          <div className="hero-body">
            <div className="container">
              <div><h4>{newQuote.text}</h4></div>
              <div><h2>{newQuote.author}</h2></div>
            </div>
          </div>
        </div>
        <div className="container">
          <button>{newQuote.author}</button>
          <button>Random option 2</button>
          <button>Random option 3</button>
          <button>Random option 4</button>
        </div>
      </section>
    </>
  )
}

export default Quiz
