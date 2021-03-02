import './App.css';
import { 
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} 
from 'react-router-dom';

import Header from './components/Header';
import Album from './pages/Album';
import Envelopes from './pages/Envelopes';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Album}/>
          <Route exact path="/envelopes" component={Envelopes}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
