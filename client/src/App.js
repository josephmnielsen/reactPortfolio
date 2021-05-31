import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/resume'>
            <Resume />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
