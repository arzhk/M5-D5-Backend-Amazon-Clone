import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard(props) {
  console.log(props);
  return (
    <Col xs={3} className="mb-3">
      <Card className="product-card">
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
