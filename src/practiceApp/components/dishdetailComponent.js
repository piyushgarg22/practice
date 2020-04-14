import React from "react";

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
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
    <div className="col-12 col-md-5 m-1">
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
        <RenderDish dish={props.dish}/>
        <RenderComments comments={props.dish.comments}/>
      </div>
    </div>
  );}else return null
};
