import React, { Component } from "react";
import { Control, LocalForm, Errors } from "react-redux-form";
import { baseUrl } from "../shared/baseUrl";

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ModalHeader,
  Row,
  Label,
  Col,
  Modal,
  ModalBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./loadingComponent";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  handleSubmit = (values) => {
    // alert("Comment Data : " + JSON.stringify(values));
    this.toggleModal();
    this.props.addComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
  };

  render() {
    return (
      <React.Fragment>
        <Button outline onClick={this.toggleModal}>
          Submit Comment
        </Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={2}>
                  rating
                </Label>
                <Col md={10}>
                  <Control.select
                    model=".rating"
                    name="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="author" md={2}>
                  Your Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".author"
                    id="author"
                    name="author"
                    placeholder="author"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="comment" md={2}>
                  comment
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    rows="12"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-lg-12 m-1">
      <div className="card mb-3">
        <img className="card-img-top" src={baseUrl+ dish.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{dish.name}</h5>
          <p className="card-text">{dish.description}</p>
        </div>
      </div>
    </div>
  );
}

function RenderComments({ comments, addComment, dishId }) {
  return (
    <div className="col-12 col-lg-12 m-1">
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
      <CommentForm dishId={dishId} addComment={addComment} />
    </div>
  );
}

export const DishDetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div class="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div class="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
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
            <RenderComments
              comments={props.comments}
              addComment={props.addComment}
              dishId={props.dish.id}
            />
          </div>
        </div>
      </div>
    );
  } else return null;
};
