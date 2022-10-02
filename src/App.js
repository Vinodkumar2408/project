import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Addarticles from './components/Addarticle';
import Home from './components/Home';
import Searchpage from './components/SearchPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/add">
            <Addarticles/>
          </Route>

          <Route path="/search:searchVal">
            <Searchpage/>
          </Route>

        </Switch>
      
      </div>
    </Router>
  );
}

export default App;
