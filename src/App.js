import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./contexts/PrivateRouth";
import { Login } from "./login/login";
import { SignUp } from "./components/sign up/SignUp";
import { Home } from "./components/HOME/Home";
import { auth } from "./firebase";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const unsubscribe = auth.onAuthStateChanged((user) => {
    setUser(user);
  });
  useEffect(() => {
    return unsubscribe;
  }, []);
  return (
    <div className='App'>
      {" "}
      <Router>
        <Routes>
          {user ? (
            <Route path='/' element={<Home />} />
          ) : (
            <Route path='/' element={<Login />} />
          )}
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
