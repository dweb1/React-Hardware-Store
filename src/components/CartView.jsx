import React, { Component } from 'react';

import ProductList from './ProductList';

class CartView extends Component {
    render() {
        return(
            <div>
                <h1>Shopping Cart</h1>
                <ProductList
                    productList={this.props.productList} 
                    addItemToShoppingCart = {this.props.addItemToShoppingCart}
                    productName = {this.props.productName}
                    description = {this.props.description}
                    price = {this.props.price}/>
            </div>
        )
    }
}

export default CartView;