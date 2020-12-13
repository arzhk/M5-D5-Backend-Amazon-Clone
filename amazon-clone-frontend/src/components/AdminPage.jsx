import React, { useState, useEffect } from "react";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import { Table, Container, Col, Spinner } from "react-bootstrap";
import ProductTableItem from "./ProductTableItem";

function AdminPage() {
  const [allProducts, setAllProducts] = useState([]);
  const [tableIsLoading, setTableIsLoading] = useState(false);

  const fetchAllProductsHandler = async () => {
    try {
      const response = await fetch("http://localhost:3001/products");
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const tableLoadingHandler = (state) => {
    setTableIsLoading(state);
  };

  useEffect(() => {
    fetchAllProductsHandler();
  }, []);

  return (
    <>
      <Container className="mt-5">
        <AddProduct fetchAllProductsHandler={fetchAllProductsHandler} />
        <EditProduct fetchAllProductsHandler={fetchAllProductsHandler} />
        <Col xs={12}>
          <div className="mt-3">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Description</th>
                  <th>ID</th>
                  <th>Price</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              {tableIsLoading ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : (
                <tbody>
                  {allProducts.length > 0 &&
                    allProducts.map((product, index) => (
                      <ProductTableItem
                        key={index}
                        index={index}
                        product={product}
                        fetchAllProductsHandler={fetchAllProductsHandler}
                        tableLoadingHandler={tableLoadingHandler}
                      />
                    ))}
                </tbody>
              )}
            </Table>
          </div>
        </Col>
      </Container>
    </>
  );
}

export default AdminPage;
