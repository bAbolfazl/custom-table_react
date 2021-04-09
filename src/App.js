// import logo from "./logo.svg";
import "./App.css";
import Index from "./pages/index/index.component";
import { Redirect, Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/table" component={Index} />
        <Route path="*" >
          <Redirect to="/table" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
