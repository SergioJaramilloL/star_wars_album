import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
}  from 'react-router-dom';
import { 
  addFilms,
  addPeople, 
  addStarships,
} from './store/actions/Envelopes.action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Header from './components/Header';
import Album from './pages/Album';
import Envelopes from './pages/Envelopes';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addFilms());
    dispatch(addPeople());
    dispatch(addStarships());
  }, [dispatch]);

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
