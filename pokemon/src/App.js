import './App.css';
import Pokemons from './Pokemons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Pokemons />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
