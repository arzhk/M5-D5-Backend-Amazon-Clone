import React from "react";
import { Container, Button } from "react-bootstrap";

function ProductPage(props) {
  const [productID, setProductID] = React.useState(props.match.params.id);
  const [productData, setProductData] = React.useState({});

  const fetchProductData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/products/${productID}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);
      setProductData(data[0]);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <Container>
      <div className="product-page-container d-flex align-items-start justify-content-center mt-5 pt-5">
        <div className="product-page-imagewrap">
          <div className="product-page-image" style={{ background: `url("${productData.image}")` }}></div>
        </div>
        <div>
          <h1>{productData.name}</h1>
          <p>{productData.description}</p>
          <p>{productData.brand}</p>
          <p>{productData.category}</p>
          <p className="price">£{productData.price}</p>
          <Button variant="warning" className="d-block mb-2" style={{ width: 160 }}>
            <i class="fas fa-cart-plus mr-2"></i> Add to Basket
          </Button>
          <Button variant="warning" style={{ width: 160 }}>
            <i class="fas fa-play mr-2"></i> Buy Now
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default ProductPage;
