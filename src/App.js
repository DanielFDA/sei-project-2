import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/common/Nav'
import Home from './components/common/Home'
import Quiz from './components/Quotes/Quiz'
import GetAQuote from './components/Quotes/GetAQuote'

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/getaquote" component={GetAQuote} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
