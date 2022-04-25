import "./App.css";
import { SignUp } from "./components/sign up/signUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/HOME/Home";
import { LogInForm } from "./components/sign up/sign up form/LogIn";

function App() {
  return (
    <div className='App'>
      {" "}
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/SignUp' component={SignUp} />{" "}
          <Route path='/LogInForm' component={LogInForm} />{" "}
        </Switch>{" "}
      </Router>
    </div>
  );
}

export default App;
