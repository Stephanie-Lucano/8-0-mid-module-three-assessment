import { Component } from "react";
import "./App.css";
import data from "./data/productData";
import ItemCard from "./components/ItemCard";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout"

class App extends Component {
  constructor(){
    super();
    this.state = {
      products: data,
      selectedItems: [],
    }
  }

  handleAddToCartClick = (item) => {
    this.setState({
      selectedItems: [item, ...this.state.selectedItems]
    })
  }

  render(){
    const {products, selectedItems} = this.state
    const itemsToSell = products.map((item) => {
      return (
        <ItemCard 
          key={item.id} 
          item={item} 
          handleAddToCartClick={this.handleAddToCartClick} 
        />
      )
    })

    return (
      <div className="app">
        <div className="title"><h1>My Garage Sale</h1></div>
        <div className="cart">
          <Cart selectedItems={selectedItems} />
        </div>
        <div className="products">{itemsToSell}</div>
        <div className="checkout">
          <Checkout />
        </div>
      </div>
    )
  };
};

export default App;
