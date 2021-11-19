import { Component } from "react";
import "./App.css";
import data from "./data/productData";
import ItemCard from "./components/ItemCard";

class App extends Component {
  constructor(){
    super();
    this.state = {
      products: data
    }
  }

  render(){
    const {products} = this.state
    const garageSaleItems = products.map((item) => {
      return (
        <ItemCard key={item.id} item={item} />
      )
    })
    return (
      <>
        <h1>My Garage Sale</h1>
        <div className="products">{garageSaleItems}</div>
      </>
    )
  };
};

export default App;
