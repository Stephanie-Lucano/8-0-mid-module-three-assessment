import { Component } from "react";

class Checkout extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            creditCard: "",
            zipCode: "",
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert("Purchase complete")
    }

    render() {
        return (
            <>
                <h2>Checkout</h2>
                <form id="checkout" onSubmit={this.handleSubmit}>

                    <div>
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        value={this.state.firstName} 
                        onChange={this.handleChange}
                        required
                    />
                    </div>

                    <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        value={this.state.lastName} 
                        onChange={this.handleChange}
                        required
                    />
                    </div>

                    <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        value={this.state.email} 
                        onChange={this.handleChange}
                        required
                    />
                    </div>

                    <div>
                    <label htmlFor="creditCard">Credit Card</label>
                    <input 
                        type="text" 
                        id="creditCard" 
                        name="creditCard" 
                        value={this.state.creditCard} 
                        onChange={this.handleChange}
                        required
                    />
                    </div>

                    <div>
                    <label htmlFor="zipCode">Zip Code</label>
                    <input 
                        type="text" 
                        id="zipCode" 
                        name="zipCode" 
                        value={this.state.zipCode} 
                        onChange={this.handleChange}
                        required
                    />
                    </div>

                    <button>Buy Now</button>
                </form>
            </>
        )
    }
}

export default Checkout;