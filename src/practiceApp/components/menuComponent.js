import React from "react";

function RenderMenuItem({ dish, onClick }) {
  return (
    <div className="card bg-dark text-white" onClick={() => onClick(dish.id)}>
      <img className="card-img" src={dish.image} alt="Card image" />
      <div className="card-img-overlay">
        <h5 className="card-title">{dish.name}</h5>
      </div>
    </div>
  );
}

export const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{menu}</div>
    </div>
  );
};
