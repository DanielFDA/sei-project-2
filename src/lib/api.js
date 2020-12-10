import axios from 'axios'

const baseUrl = 'https://type.fit/api/quotes'

export function getAllQuotes() {
  return axios.get(`${baseUrl}`)
}



// <BrowserRouter>
//   {/* <Nav /> */}
//   <Switch>
//     {/* <Route exact path="/" component={Home} />
//     <Route path="/quiz" component={QuizMain} /> */}
//   </Switch>
// </BrowserRouter>
