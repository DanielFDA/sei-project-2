import React from 'react'
import { getAllQuotes } from '../../lib/api'
import QuizCard from './QuizCard'

function GetAQuote() {
  const [quote, setQuote] = React.useState(null)
  const [quotes, setQuotes] = React.useState(null)

  const handleClick = (e) => {
    e.preventDefault()
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length)
      const item = quotes[randomIndex]
      setQuote(item)
    }
    getRandomQuote()
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

  return (
    <>
      <section className="sectionGetAQuote get-a-quote ">
        <div className="container">
          <div className="card-div">
            <button id="bStyle" className="button is-center"
              onClick={handleClick}>Get inspiration
            </button>
            {quote && <QuizCard {...quote} />}
          </div>
        </div>
      </section>
    </>
  )
}

export default GetAQuote