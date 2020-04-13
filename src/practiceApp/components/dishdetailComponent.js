import React, { Component } from "react";

export default class Dishdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var { selectedDish } = this.props;

    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <div class="card mb-3">
            <img
              class="card-img-top"
              src={selectedDish.image}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{selectedDish.name}</h5>
              <p class="card-text">{selectedDish.description}</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 m-1">
          <h1>Comments</h1>
          {selectedDish.comments.map((comment) => (
            <ul class="list-unstyled" key={comment.id}>
              <li>{comment.comment}</li>
              <li>
                --{comment.author} , {new Intl.DateTimeFormat('en-US', {year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}
