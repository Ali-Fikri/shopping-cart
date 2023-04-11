import React, { Component } from "react";

class Product extends Component {

  getClasses() {
    return this.props.product.count === 0
      ? "badge text-bg-warning m-2"
      : "badge text-bg-primary m-2";
  }


  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span>{this.props.product.name}</span>
        </div>
        <div className="col">
          <span className={this.getClasses()}>{this.props.product.count}</span>
          <button
            onClick={_=> this.props.onIncrement(this.props.product)}
            className="btn btn-primary btn-sm"
          >
            +
          </button>
          <span onClick={() => this.props.onDelete(this.props.product)}>
            <i className="fa-solid fa-trash m-2"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default Product;
