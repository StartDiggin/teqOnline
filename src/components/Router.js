import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import About from "./About";
import Contact from "./Contact";
import OurMenu from "./OurMenu";
import LunchMenu from "./LunchMenu";
import DrinkMenu from "./DrinkMenu";
import OrderOnline from "./OrderOnline";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/orderOnline" component={OrderOnline} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/ourMenu" component={OurMenu} />
      <Route path="/lunchMenu" component={LunchMenu} />
      <Route path="/drinkMenu" component={DrinkMenu} />
    </Switch>
  </BrowserRouter>
);

export default Router;
