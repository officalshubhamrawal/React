import React, { Component } from "react";

import Dishdetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import Home from "./Home";
import Header from "./Header";
import Contact from './contactComp';
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./Footer";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { dishes: DISHES };
  }
  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Dishdetail dishes={this.state.dishes} />}
          />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;
