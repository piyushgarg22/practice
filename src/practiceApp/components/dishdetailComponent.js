import React from "react";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-lg-12 col-md-5 m-1">
      <div className="card mb-3">
        <img
          className="card-img-top"
          src={dish.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{dish.name}</h5>
          <p className="card-text">{dish.description}</p>
        </div>
      </div>
    </div>
  );
}

function RenderComments({ comments }) {
  return (
    <div className="col-12 col-lg-12 col-md-5 m-1">
      <h1>Comments</h1>
      {comments.map((comment) => (
        <ul className="list-unstyled" key={comment.id}>
          <li>{comment.comment}</li>
          <li>
            --{comment.author} ,{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(comment.date)))}
          </li>
        </ul>
      ))}
    </div>
  );
}

export const DishDetail = (props) => {
  if(props.dish){
  return (
    <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                </div>
  );}else return null
};
