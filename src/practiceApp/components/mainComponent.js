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
import { addComment, fetchDishes ,fetchPromos,fetchComments} from "../redux/ActionCreators";
import { actions } from "react-redux-form";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  fetchComments: () => {
    dispatch(fetchComments());
  },
  fetchPromos: () => {
    dispatch(fetchPromos());
  },
  resetFeedbackForm:()=>{dispatch(actions.reset('feedback'))}
});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  render = () => {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errMess}
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          commentsErrMess={this.props.comments.errMess}
          comments={this.props.comments.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          addComment={this.props.addComment}
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
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route path="/contactus" component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} />
          <Route path="/aboutus" component={AboutPage} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
