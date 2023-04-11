import React, { Component } from "react";

import NavBar from "./navBar";
import ShoppingCart from "./shopingCart";

class App extends Component {
  state = {
    products: [
      { id: 1, name: "Burger", count: 2 },
      { id: 2, name: "Fries", count: 3 },
      { id: 3, name: "Cola", count: 1 },
    ],
  };

  handleDelete = (product) => {
    // Clone
    // Edit
    const newProducts = this.state.products.filter((p) => p.id !== product.id);
    // Set state
    this.setState({ products: newProducts });
  };

  handleReset = (_) => {
    let products = [...this.state.products];
    products = products.map((p) => {
      p.count = 0;
      return p;
    });
    this.setState({ products });
  };

  incrementHandler = (product) => {
    let products = [...this.state.products];
    let index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].count++;
    this.setState({ products });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar productsCount={this.state.products.filter(p => p.count > 0).length}/>
        <main className="container">
          <ShoppingCart
            onDelete={this.handleDelete}
            onIncrement={this.incrementHandler}
            onReset={this.handleReset}
            products={this.state.products}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
