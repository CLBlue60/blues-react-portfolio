import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  // State to manage loading status
  const [load, upadateLoad] = useState(true);

  // Effect to simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {load ? (
        // Display Preloader if still loading
        <Preloader load={load} />
      ) : (
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          {/* Navbar component */}
          <Navbar />
          {/* ScrollToTop component to handle scroll behavior */}
          <ScrollToTop />
          {/* Switch to handle routing */}
          <Switch>
            {/* Route for Home component */}
            <Route path="/" exact component={Home} />
            {/* Route for Projects component */}
            <Route path="/project" component={Projects} />
            {/* Route for About component */}
            <Route path="/about" component={About} />
            {/* Route for Resume component */}
            <Route path="/resume" component={Resume} />
          </Switch>
          {/* Footer component */}
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
