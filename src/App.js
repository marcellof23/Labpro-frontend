import "./App.css";

import { BrowserRouter as Router, Switch } from "react-router-dom";

import { route } from "./config/route";

import Route from "./routes/Route";

//import NotFound from "./pages/NotFound";
function App() {
  const generateRoute = () => {
    return route.map((entry, idx) => (
      <Route
        key={idx}
        path={entry.path}
        component={entry.component}
        exact={entry.exact}
      />
    ));
  };

  return (
    <div className="App">
      <Router>
        <Switch>{generateRoute()}</Switch>
      </Router>
    </div>
  );
}

export default App;
