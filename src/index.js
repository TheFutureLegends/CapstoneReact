import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.9.0";

// pages for this product
import AboutUsPage from "views/frontend/AboutUsPage/AboutUsPage.js";
import BlogPostPage from "views/frontend/BlogPostPage/BlogPostPage.js";
import BlogPostsPage from "views/frontend/BlogPostsPage/BlogPostsPage.js";
import ContactUsPage from "views/frontend/ContactUsPage/ContactUsPage.js";
import LoginPage from "views/frontend/LoginPage/LoginPage.js";
import SectionsPage from "views/frontend/SectionsPage/SectionsPage.js";
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

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {/* <Route path="/blog-post" component={BlogPostPage} /> */}
      {/* <Route path="/blog-posts" component={BlogPostsPage} /> */}
      {/* <Route path="/components" component={ComponentsPage} /> */}

      {/* <Route path="/ecommerce-page" component={EcommercePage} /> */}
      {/* <Route path="/landing-page" component={LandingPage} /> */}

      {/* <Route path="/pricing" component={PricingPage} /> */}
      {/* <Route path="/profile-page" component={ProfilePage} /> */}
      {/* <Route path="/product-page" component={ProductPage} /> */}
      {/* <Route path="/sections" component={SectionsPage} /> */}
      {/* <Route path="/shopping-cart-page" component={ShoppingCartPage} /> */}
      {/* <Route path="/signup-page" component={SignupPage} /> */}
      {/* <Route path="/error-page" component={ErrorPage} /> */}

      {/* Official Frontend URL */}
      <Route exact path="/" component={SectionsPage} />
      <Route exact path="/study-guides" component={BlogPostsPage} />
      <Route path="/study-guide/:slug" component={BlogPostPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/contact-us" component={ContactUsPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
