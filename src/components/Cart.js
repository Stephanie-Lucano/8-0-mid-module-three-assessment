import { Component } from "react";
import formatPrice from "../helpers/formatPrice";

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            subtotal: 0,
        }
    }

    // handleSubtotal = (props) => {

    //     const arrOfPrices = props.selectedItems.map((item) => {

    //         const sum = arrOfPrices.reduce((previousValue, currentValue) => {
    //             return previousValue + currentValue
    //         })
    //         return item.price
    //     })

    //     this.setState({
    //         subtotal: sum
    //     })
    // }

    render() {
        const listOfItems = this.props.selectedItems.map((item) => {
            return (
                <ul  overscroll-behavior="auto">
                    <li>{item.name}: {formatPrice(item.price)}
                    </li>
                </ul>
            )
        })

        return (
            <div>
                <h2>Cart</h2>
                <div>
                    {listOfItems}
                </div>
                <div>
                    <h3>Subtotal: {this.state.subtotal}</h3>
                </div>
                <div>
                    <h3>Tax: </h3>
                </div>
                <div>
                    <h3>Total: </h3>
                </div>
            </div>
        )
    }
}

export default Cart;