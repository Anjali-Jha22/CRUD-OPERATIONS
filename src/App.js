import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import Delete from './components/delete';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className='main'>
      <div>
        <h3>React crud operations</h3>
      </div>

      <div>
      <Switch>
      <Route exact path='/'>
        <Create/>
      </Route>
      </Switch>
      </div>

      <div style={{marginTop: 20}}>
      <Switch>
      <Route exact path='/read'>
        <Read/>
      </Route>
      </Switch>
      </div>
      
      <div>
      <Switch>
      <Route exact path='/update'>
        <Update/>
      </Route>
      </Switch>
      </div>

      <div>
      <Switch>
      <Route exact path='/delete'>
        <Delete/>
      </Route>
      </Switch>
      </div>
      

      
    </div>
    </Router>
  );
}

export default App;
