import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Project from "./components/Project";
import BlogPage from "./components/Blog";
import AboutUs from "./components/AboutUs";
// import Hooks from "./components/tryingHooks"

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/home" component={Home} />
          <Route path="/projects" component={Project} />
          <Route path="/study-guides" component={BlogPage} />
          <Route path="/about-us" component={AboutUs} />
          <Footer />
        </div>
      </Router>
      
     
    );
  }
}
