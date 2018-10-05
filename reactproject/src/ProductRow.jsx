import React, { Component } from "react";
class ProductRow extends Component {
  state = {};
  render() {
    const product = this.props.product;
    const name = product.stocked ? (
      product.name
    ) : (
      <span className="bg-danger mx-auto">{product.name}</span>
    );
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
