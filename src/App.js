import "./App.css";
import Portfolio from "./components/portfolio";
import Workex from "./components/Workex";
import Projects from "./components/Projects";
import SideNav from "./components/SideNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import tictactoe from "./components/tictactoe";
import Chatroom from "./components/Chatroom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Workex" component={Workex} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Chat" component={Chatroom} />
          {/*<Route path="/tictactoe" component={tictactoe} />*/}
          <Route path="/" component={Portfolio} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
