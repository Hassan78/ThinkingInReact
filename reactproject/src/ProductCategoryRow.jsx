import React, { Component } from "react";

class ProductCategoryRow extends Component {
  state = {};
  render() {
    const category = this.props.category;
    return (
      <div className="table-responsive-sm text-primary table-dark">
        <table>
          <thead>
            <tr>
              <th>{category}</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default ProductCategoryRow;
