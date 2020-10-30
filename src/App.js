import './App.css';
import HomePage from './Components/HomePage/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllProjects from './Components/AllProjects/AllProjects';
function App() {
  return (
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
            <Route path="/seeAll">
                <AllProjects></AllProjects>
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
