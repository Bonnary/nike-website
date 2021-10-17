import GreenPage from "./Pages/GreenPage";
import RedPage from "./Pages/RedPage";
import BlackPage from "./Pages/BlackPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" component={GreenPage} exact />
        <Route path="/RedShoes" component={RedPage} exact />
        <Route path="/BlackShoes" component={BlackPage} exact />
      </Switch>
    </Router>
  );
}

export default App;