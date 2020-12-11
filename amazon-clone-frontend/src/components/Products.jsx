import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

function Products() {
  const [allProducts, setAllProducts] = React.useState([]);

  const fetchAllProductsHandler = async () => {
    try {
      const response = await fetch("http://localhost:3001/products/", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setAllProducts(data);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    fetchAllProductsHandler();
  }, []);

  React.useEffect(() => {
    console.log(allProducts);
  }, [allProducts]);

  return (
    <Container className="container-smaller">
      <div id="products-main-container">
        <Row>
          {allProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default Products;
