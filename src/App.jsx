import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Project from "./components/Project";
import BlogIndex from "./components/Blog/BlogIndex";
import BlogDetail from "./components/Blog/BlogDetail";
import AboutUs from "./components/AboutUs";
// import Hooks from "./components/tryingHooks"

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Project} />
          <Route exact path="/study-guides" component={BlogIndex} />
          <Route path="/study-guides/:slug" component={BlogDetail} />
          <Route path="/about-us" component={AboutUs} />
          <Footer />
        </div>
      </Router>
    );
  }
}
