import { Component } from "react";
import "./App.css";
import data from "./data/productData";

class App extends Component {
  render(){
    return (
      <>
        <h1>My Garage Sale</h1>
        <div className="products"></div>
      </>
    )
  };
};

export default App;
