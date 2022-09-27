import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom' 
import Moviedetails from './components/Moviedetails';
import Addmovie from './components/Addmovie';
import Searchpage from './components/Searchpage';
import Wishlist from './components/Wishlist';
import Update from './components/Update';
import Notfound from './components/Notfound';

function App() {

  return (
    <Router>
      <div>  
      
      <Navbar />
      
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/moviedetails:id">
            <Moviedetails />
          </Route>
            
          <Route path="/create">
            <Addmovie />
          </Route>

          <Route path="/search:searchVal">
            <Searchpage/>
          </Route>

          <Route path="/wish">
            <Wishlist/>
          </Route>

          <Route path="/update:id">
            <Update/>
          </Route>

          <Route path="*">
            <Notfound/>
          </Route>


      </Switch>
      
      
    </div>
    </Router>
    
  );
}

export default App;
