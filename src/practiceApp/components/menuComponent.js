import React, { Component } from "react";
import DishDetail from './dishdetailComponent';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }

  toggleDishData = (selectedDish) =>
    this.setState({ selectedDish: selectedDish });

  renderDishData = (dish) => {
    if (dish !== null) {
      return <DishDetail selectedDish={dish}/>;
    } else {
      return null;
    }
  };

  render = () => {
    const dishMenu = this.props.dishes.map((item, index) => {
      return (
        <div class="col-12 col-md-5 m-1" key={item.id}>
          <div
            class="card bg-dark text-white"
            onClick={() => this.toggleDishData(item)}
          >
            <img class="card-img" src={item.image} alt="Card image" />
            <div class="card-img-overlay">
              <h5 class="card-title">{item.name}</h5>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {dishMenu}
          </div>  
          {this.renderDishData(this.state.selectedDish)}
        </div>
    );
  };
}
