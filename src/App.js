import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MuiStack from "./components/MuiStack";
import Crypto from "./components/Crypto";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Crypto} />
        <Route path="/stack" exact component={MuiStack} />
      </Switch>
    </Router>
  );
}

export default App;
