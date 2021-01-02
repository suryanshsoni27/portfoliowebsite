import "./App.css";
import Portfolio from "./components/portfolio";
import Workex from "./components/Workex";
import Projects from "./components/Projects";
import SideNav from "./components/SideNav";
import PathfindingVisualizer from "./components/PathfindingVisualizer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chatroom from "./components/Chatroom";
import PDF from "./assets/sam.pdf";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Workex" component={Workex} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Chat" component={Chatroom} />
          <Route
            path="/Path_finding_Visualizer"
            component={PathfindingVisualizer}
          />

          <Route
            path="/resume"
            component={() =>
              window.open(`${PDF}`, "_blank").then((window.location = "/"))
            }
          />
          {/*<Route path="/tictactoe" component={tictactoe} />*/}
          <Route path="/" component={Portfolio} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
