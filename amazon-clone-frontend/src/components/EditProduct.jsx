import React from "react";
import { Button, Spinner } from "react-bootstrap";

function EditProduct(props) {
  const [productInfo, setProductInfo] = React.useState(props.editProductInfo);
  const [isLoading, setIsLoading] = React.useState(false);

  const postDataHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3001/products/${productInfo._id}`, {
        method: "PUT",
        body: JSON.stringify(productInfo),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setTimeout(() => {
        setIsLoading(false);
        props.toggleModalHandler();
        props.fetchAllProductsHandler();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const updateInfoHandler = (event) => {
    const currentData = { ...productInfo };
    currentData[event.target.id] = event.target.value;
    setProductInfo(currentData);
  };

  return (
    <div className="edit-product-modal">
      <div className="edit-product-modal-container swing-in-top-fwd mt-5">
        <h4 className="text-left">Edit Product</h4>
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <div className="d-flex flex-column mt-2">
            <input
              id="name"
              type="text"
              placeholder="Product name..."
              onChange={updateInfoHandler}
              value={productInfo.name}
              required
            />
            <input
              id="description"
              type="text"
              placeholder="Description..."
              onChange={updateInfoHandler}
              value={productInfo.description}
              required
            />
            <input
              id="brand"
              type="text"
              placeholder="Brand..."
              onChange={updateInfoHandler}
              value={productInfo.brand}
              required
            />
            <input
              id="category"
              type="text"
              placeholder="Category..."
              onChange={updateInfoHandler}
              value={productInfo.category}
              required
            />
            <input
              id="price"
              type="number"
              placeholder="Price..."
              onChange={updateInfoHandler}
              value={productInfo.price}
              required
            />
            <div className="d-flex">
              <Button variant="secondary" className="w-25 mt-3 mr-2" onClick={props.toggleModalHandler}>
                Cancel
              </Button>
              <Button variant="success" className="w-50 mt-3" onClick={postDataHandler}>
                Submit
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditProduct;
