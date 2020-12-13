import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard(props) {
  console.log(props);
  return (
    <Col xs={3} className="mb-3">
      <Card className="product-card">
        {props.product.name === "DJ Siii Duck" && (
          <small
            className="font-weight-bold text-right"
            style={{
              color: "#febd69",
              position: "absolute",
              left: 15,
              top: "-10px",
              backgroundColor: "#3e4959",
              padding: "5px 10px",
              borderRadius: "0.6rem",
            }}
          >
            Most popular*
          </small>
        )}
        <div className="img-wrap">
          <div
            className="img-img"
            style={{
              background: `url("${props.product.image}")`,
            }}
          />
        </div>
        <Card.Body>
          <Link to={`/product/${props.product._id}`}>
            <Card.Title className="item-name">{props.product.name}</Card.Title>
          </Link>
          <div className="d-flex mb-2">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <Link to={`/product/${props.product._id}`}>
            <Card.Text className="price">£{props.product.price.toFixed(2)}</Card.Text>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;
