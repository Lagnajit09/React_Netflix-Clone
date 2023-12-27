import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import Movies from "./Movies";
import Login from "./Login";

function App() {
  const [showMovies, setShowMovies] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);
  const [showHome, setShowHome] = useState(true);

  useEffect(() => {
    console.log("first time");
    const signInPageInformation = localStorage.getItem("btnClicked");
    const storedUserLoggedInInformation = localStorage.getItem("showMovies");

    if (signInPageInformation === "1") {
      setBtnClicked(true);
      setShowHome(false);
    }

    if (storedUserLoggedInInformation === "1") {
      setShowMovies(true);
      setShowHome(false);
      setBtnClicked(false);
    }
  }, []);

  const moviesHandler = () => {
    setShowMovies(true);
    setShowHome(false);
    setBtnClicked(false);
    localStorage.setItem("showMovies", "1");
  };

  const signInHandler = () => {
    setShowHome(false);
    setBtnClicked(true);
    localStorage.setItem("btnClicked", "1");
  };

  const showHomeHandler = () => {
    setShowHome(true);
    setBtnClicked(false);
    setShowMovies(false);
    localStorage.removeItem("btnClicked");
    localStorage.removeItem("showMovies");
  };

  return (
    <div className="app">
      {showHome && <Home checkEmail={moviesHandler} clicked={signInHandler} />}
      {btnClicked && <Login signUp={showHomeHandler} signIn={moviesHandler} />}
      {showMovies && <Movies signOut={showHomeHandler} />}
    </div>
  );
}

export default App;
