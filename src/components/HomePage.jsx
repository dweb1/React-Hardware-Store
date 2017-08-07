import React, { Component } from 'react';

import AdminView from './AdminView'
import ShopView from './ShopView'
import CartView from './CartView'

class HomePage extends Component {
	
	constructor() {
		super();

		this.state = {
			itemCurrentlyOnSale: "A Hammer",
			editSaleItem: true,
			adminOrShop: true,
			productList: [
 				{
 		  			productName: 'Hammer',
 		  			description: 'Issa hammer',
 		 		 	price: 12.3,
 				},
 				{
					productName: 'Nail',
					description: 'Issa nail',
					price: 0.12,
 				},
 				{
					productName: 'Knife',
					description: 'Issa knife',
					price: 5.50,
 				}
			 ],
			cartList: [],
		};
	}

	_toggleAdminOrShop = () => {
		const adminOrShop = !this.state.adminOrShop;
		this.setState({adminOrShop});
	}

	_toggleEditSaleItem = () => {
		const editSaleItem = !this.state.editSaleItem;
		this.setState({editSaleItem});
   };

	_handleItemCurrentlyOnSaleChange = (event) => {
		const itemCurrentlyOnSale = event.target.value;
		this.setState({itemCurrentlyOnSale});
   }

	_addNewProductToProductList = (newProduct) => {
		const productList = [...this.state.productList];
		productList.push(newProduct);
		this.setState({productList});
	};

	_removeProductFromProductList = (index) => {
		const productList = [...this.state.productList];
		productList.splice(index, 1); 
		this.setState({productList});
	};

	_addItemToShoppingCart = (index) => {
		const product = {...this.state.productList[index]};
		const cartList = [...this.state.cartList];
		cartList.push(product);
		this.setState({cartList});
	};

	render () {
		return (
			<div>
				<h1>My Hardware Store</h1>
				<div>
					<span>Admin or Shop</span>
					<span><button onClick={this._toggleAdminOrShop}>Switch</button></span>
				</div>
				{this.state.adminOrShop ? 
					<div>
						<span>Currently On Sale: { this.state.itemCurrentlyOnSale }!</span>
						<span>
							<button onClick={this._toggleEditSaleItem}>
								{ this.state.editSaleItem ? 'Hide' : 'Edit Sale Item' }
							</button></span>
						
						{ 
							this.state.editSaleItem ? 
								<div>
									<input 
										onChange={this._handleItemCurrentlyOnSaleChange} 
										value={this.state.itemCurrentlyOnSale}
										type="text" 
									/>
								</div> 
							: null }
							<AdminView 
								productList={this.state.productList}
								addNewProductToProductList={this._addNewProductToProductList}
								removeProductFromProductList={this._removeProductFromProductList}
								adminOrShop={this.state.adminOrShop}/>
					</div>
					:
					<div>
						<span>Currently On Sale: {this.state.itemCurrentlyOnSale}!</span>
						<ShopView
						productList={this.state.productList}
						adminOrShop={this.state.adminOrShop}
						addItemToShoppingCart={this._addItemToShoppingCart}/>
 
					   <CartView 
					 	productList={this.state.cartList}/> 
					</div>
					}
			</div>
		);
	}
}

export default HomePage;