import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow.jsx";
import ProductRow from "./ProductRow";
class ProductTable extends Component {
  state = {};
  render() {
    const { product } = this.props;
    const rows = [];
    let lastCategory = null;
    product.map(product => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            key={product.category}
            category={product.category}
          />
        );
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
      return lastCategory;
    });
    return (
      <React.Fragment>
        <table className="table table-sm">
          <thead>
            <tr>
              <th style={{ textAlign: "left" }} scope="col">
                Name
              </th>
              <th style={{ textAlign: "left" }} scope="col">
                Price
              </th>
            </tr>
          </thead>
        </table>
        <div className="table-responsive-sm   ">
          <table className="table">
            <thead>{rows}</thead>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductTable;
