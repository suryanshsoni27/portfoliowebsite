import "./App.css";
import Portfolio from "./components/portfolio";
import Workex from "./components/Workex";
import SideNav from "./components/SideNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Workex" component={Workex} />
          <Route path="/" component={Portfolio} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
