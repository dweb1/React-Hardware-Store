import React, { Component } from 'react';
import ProductList from './ProductList';

class ShopView extends Component {
	render() {
		return (
			<div>
				<h1>Shop View</h1>
 				<h2>Products</h2>
 					<ProductList
					 productList={this.props.productList}
					 adminOrShop={this.props.adminOrShop}
					 addItemToShoppingCart={this.props.addItemToShoppingCart}/>
			</div>
		);
	}
}

export default ShopView;