import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/material-kit-pro-react.scss?v=1.9.0";
import "assets/scss/material-dashboard-pro-react.scss?v=1.9.0";

// pages for this product
import AboutUsPage from "views/frontend/AboutUsPage/AboutUsPage.js";
import BlogPostPage from "views/frontend/BlogPostPage/BlogPostPage.js";
import BlogPostsPage from "views/frontend/BlogPostsPage/BlogPostsPage.js";
import ContactUsPage from "views/frontend/ContactUsPage/ContactUsPage.js";
import LoginPage from "views/frontend/LoginPage/LoginPage.js";
import SignupPage from "views/frontend/SignupPage/SignupPage.js";
import SectionsPage from "views/frontend/SectionsPage/SectionsPage.js";

import Chatbot from "views/frontend/Chatbot";

// import AuthLayout from "layouts/Auth.js";
// import RtlLayout from "layouts/RTL.js";
import AdminLayout from "layouts/Admin.js";
// import ComponentsPage from "views/ComponentsPage/ComponentsPage.js";
// import EcommercePage from "views/EcommercePage/EcommercePage.js";
// import LandingPage from "views/LandingPage/LandingPage.js";
// import PricingPage from "views/PricingPage/PricingPage.js";
// import ProfilePage from "views/ProfilePage/ProfilePage.js";
// import ProductPage from "views/ProductPage/ProductPage.js";
// import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.js";
// import SignupPage from "views/SignupPage/SignupPage.js";
// import ErrorPage from "views/ErrorPage/ErrorPage.js";
// import PresentationPage from "views/PresentationPage/PresentationPage.js";

import UserContextProvider from "store/contexts/UserContextProvider";

var hist = createBrowserHistory();

const rootElement = document.getElementById("root");

const App = () => {
  return (
    <Router history={hist}>
      <Switch>
        {/* Official Frontend URL */}
        <Route exact path="/" component={SectionsPage} />
        <Route exact path="/study-guides" component={BlogPostsPage} />
        <Route path="/study-guide/:slug" component={BlogPostPage} />
        {/* <UserContextProvider> */}
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={SignupPage} />
        {/* </UserContextProvider> */}
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/contact-us" component={ContactUsPage} />

        {/* Official Backend URL */}
        {/* <Route path="/rtl" component={RtlLayout} />
        <Route path="/auth" component={AuthLayout} /> */}
        <UserContextProvider>
          <Route path="/admin" component={AdminLayout} />
        </UserContextProvider>

        <Redirect from="/admin" to="/admin/dashboard" />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, rootElement);
