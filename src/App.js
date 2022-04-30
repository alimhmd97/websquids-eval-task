import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./contexts/PrivateRouth";
import { Login } from "./login/login";
import { SignUp } from "./components/sign up/SignUp";
import { Home } from "./components/HOME/Home";

function App() {
  return (
    <div className='App'>
      {" "}
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
