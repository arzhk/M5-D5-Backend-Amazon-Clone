import React from "react";
import { Col, Button, Spinner } from "react-bootstrap";
import ErrorAlert from "./ErrorAlert";

function AddProduct(props) {
  const [inputData, setInputData] = React.useState({
    name: "",
    description: "",
    brand: "",
    category: "",
    price: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [validationError, setValidationError] = React.useState(false);
  const [submitError, setSubmitError] = React.useState([]);

  const postDataHandler = async () => {
    setIsLoading(true);
    try {
      let response = await fetch(`http://localhost:3001/products`, {
        method: "POST",
        body: JSON.stringify(inputData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        setTimeout(() => {
          setIsLoading(false);
          props.fetchAllProductsHandler();
          setInputData({
            name: "",
            description: "",
            brand: "",
            category: "",
            price: "",
          });
        }, 1000);
      } else {
        setSubmitError([...data.message.errors]);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateInputHandler = (event) => {
    const currentData = { ...inputData };
    currentData[event.target.id] = event.target.value;
    setInputData(currentData);
  };

  const validationHandler = () => {
    if (
      inputData.name.length > 0 &&
      inputData.description.length > 0 &&
      inputData.brand.length > 0 &&
      inputData.category.length > 0 &&
      inputData.price.length > 0
    ) {
      postDataHandler();
      setValidationError(false);
    } else {
      setValidationError(true);
    }
  };

  return (
    <Col xs={4}>
      {submitError.map((error) => (
        <ErrorAlert error={error} />
      ))}
      <div className="admin-panel">
        <h4 className="mb-0">Add new product</h4>
        {validationError && <small className="mb-0 text-danger">Error with input, please complete all fields.</small>}
        {isLoading ? (
          <Spinner animation="border" role="status" className="mt-2">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <div className="d-flex flex-column mt-2">
            <input
              id="name"
              type="text"
              placeholder="Product name..."
              value={inputData.name}
              onChange={updateInputHandler}
              required
            />
            <input
              id="description"
              type="text"
              placeholder="Description..."
              value={inputData.description}
              onChange={updateInputHandler}
              required
            />
            <input
              id="brand"
              type="text"
              placeholder="Brand..."
              value={inputData.brand}
              onChange={updateInputHandler}
              required
            />
            <input
              id="category"
              type="text"
              placeholder="Category..."
              value={inputData.category}
              onChange={updateInputHandler}
              required
            />
            <input
              id="price"
              type="number"
              placeholder="Price..."
              value={inputData.price}
              onChange={updateInputHandler}
              required
            />
            <Button variant="success" className="w-50 mt-3" onClick={validationHandler}>
              Submit
            </Button>
          </div>
        )}
      </div>
    </Col>
  );
}

export default AddProduct;
