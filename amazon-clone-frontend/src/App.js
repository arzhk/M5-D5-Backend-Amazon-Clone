import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Jumbo from "./components/Jumbo";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";
import AdminPage from "./components/AdminPage";

function App() {
  return (
    <Router>
      <Route path="/" component={NavBar} />
      <Route path="/" exact component={Jumbo} />
      <Route path="/" exact component={Products} />
      <Route path="/product/:id" exact component={ProductPage} />
      <Route path="/admin" exact component={AdminPage} />
    </Router>
  );
}

export default App;
