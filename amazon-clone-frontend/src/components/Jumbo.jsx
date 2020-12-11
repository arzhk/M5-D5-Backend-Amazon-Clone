import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";

function Jumbo() {
  return (
    <Container>
      <Jumbotron>
        <h1>Release the Quackin!</h1>
        <h4 className="mb-4">The Ducks are now on Sale!</h4>
        <p>
          <Button variant="warning">Shop Now</Button>
        </p>
      </Jumbotron>
    </Container>
  );
}

export default Jumbo;
