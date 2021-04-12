import React, { Component } from 'react';
import { connect } from "react-redux";
import ProductInCart from './prodInCart';

class Cart extends Component {
    state = {};

    render() {
        return (
        <div>
            <h1>Your Cart</h1>

            {this.props.cart.map((item) => (
                <ProductInCart key={item.product.id} data= {item}></ProductInCart>
            ))}

            <div><h2>Total: <b>{this.getTotal()}</b></h2></div>

        </div>

        );
    }

    getTotal = () => {
        //calculate the total
        let grandTotal = 0;
        for(let i = 0; i < this.props.cart.length; i++) {
            let item = this.props.cart[i];
            let itemTotal = item.quantity * item.product.price;
            grandTotal += itemTotal;
        }

        return "$" + grandTotal.toFixed(2);
    };
}

var mapStateToProps = (state) => {
   return {
              cart: state,
   };
};

export default connect(mapStateToProps, null)(Cart);

