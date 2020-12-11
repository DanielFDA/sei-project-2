import React from 'react'
import { getAllQuotes } from '../../lib/api'

function Quiz() {

  const [quotes, setQuotes] = React.useState(null)
  const [quizQuote, setQuizQuote] = React.useState({
    text: '',
    author: '',
  })

  const [options, setOptions] = React.useState(null)
  const [game, setGame] = React.useState(null)
  const [correctOption, setCorrectOption] = React.useState(null)

  // function sleep(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms))
  // }

  const handleGame = (e) => {
    e.preventDefault()
    // await sleep(500)
    const timer = setTimeout(() => {
      if (e.target.value === quizQuote.author) {
        setCorrectOption(correctOption + 1)
        alert('correct')
      } else {
        alert('incorrect')
      }
      setGame(game + 1)
      console.log(correctOption)
    }, 1000)
    return () => clearTimeout(timer)
  }

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log('This will run after 1 second!')
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);


  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllQuotes()
        setQuotes(data)
        setGame(1)
        setCorrectOption(1)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  let item

  React.useEffect(()=> {
    const getRandomQuote = async () => {  
      // get random index value
      try {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        // get random item
        item = quotes[randomIndex]  
        setQuizQuote(item)
      } catch (err) {
        console.log(err)
      }
    }
    getRandomQuote()
  }, [game])


  React.useEffect(() => {
    const randomOptionsNumber = Math.floor(Math.random() * 4)
    const creatingOptions = async () => {
      try {
        const optionsArray = []
        if (randomOptionsNumber === 0) {
          optionsArray.push(quizQuote)
          for (let I = 0; I < 3; I++) {
            const randomIndex = Math.floor(Math.random() * quotes.length)
            optionsArray.push(quotes[randomIndex])
          }
        } else if (randomOptionsNumber === 1) {
          for (let I = 0; I < 3; I++) {
            const randomIndex = Math.floor(Math.random() * quotes.length)
            optionsArray.push(quotes[randomIndex])
          }
          optionsArray.push(quizQuote)
        } else if (randomOptionsNumber === 2) {
          for (let I = 0; I < 2; I++) {
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
          for (let I = 0; I < 2; I++) {
            const randomIndex = Math.floor(Math.random() * quotes.length)
            optionsArray.push(quotes[randomIndex])
          }
        }
        setOptions(optionsArray)
      } catch (err) {
        console.log(err)
      }
    }
    creatingOptions()
  }, [quizQuote])


  // const randomOptionsNumber = Math.floor(Math.random() * 4)
  // console.log(optionsArray)

  // React.useEffect(()=> {
  //   const getRandomQuotes = async () => {  
  //     // get random index value
  //     try {
  //       const randomQuoteOne = quotes[Math.floor(Math.random() * quotes.length)]
  //       // console.log(randomQuoteOne.author)
  //       const randomQuoteTwo = quotes[Math.floor(Math.random() * quotes.length)]
  //       // console.log(randomQuoteTwo.author)
  //       const randomQuoteThree = quotes[Math.floor(Math.random() * quotes.length)]
  //       // console.log(randomQuoteThree.author)
  //       if (randomOptionsNumber === 0) {
  //         return optionsArray = [randomQuoteOne.author, randomQuoteTwo.author, randomQuoteThree.author, quizQuote.author]
  //       } else if (randomOptionsNumber === 1){
  //         return optionsArray = [randomQuoteOne.author, quizQuote.author, randomQuoteThree.author, randomQuoteTwo.author]
  //       } else if (randomOptionsNumber === 2) {
  //         optionsArray = [randomQuoteOne.author, randomQuoteTwo.author, quizQuote.author, randomQuoteThree.author]
  //       } else if (randomOptionsNumber === 3) {
  //         return optionsArray = [quizQuote.author, randomQuoteTwo.author, randomQuoteThree.author, randomQuoteOne.author]
  //       }
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getRandomQuotes()
  // }, [quizQuote])
  
  // console.log(getRandomQuote)

  return (
    <>
      <section className="hero is-fullheight-with-navbar is-info">
        <div className="container">
          <h1 className="title is-center q-title">Guess who Said the Quote!</h1>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-content">{quizQuote.text}{quizQuote.author}</div>
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
      </section>
    </>
  )
}

export default Quiz

// onClick={() => {
//   funcOne();
//   funcTwo();
// }}>