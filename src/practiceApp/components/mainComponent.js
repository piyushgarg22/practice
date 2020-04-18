import React, { Component } from "react";
import { Menu } from "./menuComponent";
import { DishDetail } from "./dishdetailComponent";
import Header from "./headerComponent";
import { Footer } from "./footerComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Home from "./homeComponent";
import Contact from "./contactComponent";
import { About } from "./aboutComponent";
import { connect } from "react-redux";

const mapStateToProps = state =>{
  return {
    dishes : state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  }
}


class Main extends Component {
  constructor(props) {
    super(props);
  }


  render = () => {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };

    const AboutPage = ({}) => {
      return <About leaders={this.props.leaders} />;
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => (
              <Menu
                dishes={this.props.dishes}
              />
            )}
          />
          <Route path="/contactus" component={Contact} />
          <Route path="/aboutus" component={AboutPage} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  };
}


export default withRouter(connect(mapStateToProps)(Main));