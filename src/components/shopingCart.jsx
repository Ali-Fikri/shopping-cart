import React, { Component } from "react";
import Product from "./product";

class ShoppingCart extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Shopping Cart</h1>
        <button
          onClick={this.props.onReset}
          className="btn btn-secondary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.products.map((product) => (
          <Product
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            key={product.id}
            product={product}
          />
        ))}
      </React.Fragment>
    );
  }
}
export default ShoppingCart;
