import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductTable from "./ProductTable.jsx";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    PRODUCTS: [
      {
        category: "Sporting Goods",
        price: "$49.99",
        stocked: true,
        name: "Football"
      },
      {
        category: "Sporting Goods",
        price: "$9.99",
        stocked: true,
        name: "Baseball"
      },
      {
        category: "Sporting Goods",
        price: "$29.99",
        stocked: false,
        name: "Basketball"
      },
      {
        category: "Electronics",
        price: "$99.99",
        stocked: true,
        name: "iPod Touch"
      },
      {
        category: "Electronics",
        price: "$399.99",
        stocked: false,
        name: "iPhone 5"
      },
      {
        category: "Electronics",
        price: "$199.99",
        stocked: true,
        name: "Nexus 7"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SearchBar />
        <ProductTable product={this.state.PRODUCTS} />
      </div>
    );
  }
}

export default App;
