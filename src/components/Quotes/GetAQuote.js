import React from 'react'
import { getAllQuotes } from '../../lib/api'
import QuizCard from './QuizCard'

function GetAQuote() {

  const [quotes, setQuotes] = React.useState(null)

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

  return (
    <section className="hero is-fullheight-with-navbar is-info">
      <div className="container">
        <h1 className="title">Guess who Said the Quote!</h1>
        <p>Who said:</p>
      </div>
      <div>{quotes ?
        quotes.map((quote, i) => (
          <QuizCard key={i.toString()} {...quote} />
        ))
        :
        <p>...loading</p>
      }
      </div>
    </section>
  )
}   
export default GetAQuote
