import Header from "./components/header/header.js";
import Home from "./components/home/home.js";
import Footer from "./components/footer/footer.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route path="/markets">
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route>
          <div>404 Not Found</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
