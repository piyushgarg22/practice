import React, { Component } from "react";
import { Menu } from "./menuComponent";
import { DishDetail } from "./dishdetailComponent";
import { Dishes } from "../shared/dishes";
import Header from "./headerComponent";
import { Footer } from "./footerComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./homePageComponent";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: Dishes,
      selectedDish: null,
    };
  }

  onDishSelect = (dishId) => this.setState({ selectedDish: dishId });

  render = () => {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => 
              <Menu
                dishes={this.state.dishes}
                onClick={(dishId) => this.onDishSelect(dishId)}
              />
            }
          />
          {/* <Redirect to="/home"/> */}
        </Switch>

        {/* <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        /> */}
        <Footer />
      </div>
    );
  };
}
