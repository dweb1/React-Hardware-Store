import React, {Component} from 'react';

class Product extends Component {

  _addItemToCart = () => {
    this.props.addItemToShoppingCart(this.props.index);
  }
 
  render() {
   const productName = this.props.productName;
   const description = this.props.description;
   const price = this.props.price;

   return (
       <div>
         <h3>{productName}</h3>
         <div><strong>Description: </strong>{description}</div>
         <div><strong>Price: </strong>{price}</div>
           {this.props.adminOrShop ?   
              <span>
                <button
                  onClick={() => this.props.removeProductFromProductList(this.props.id)}>
                  Delete This Product
                </button>
              </span>
              : <span>  
                  <button
                    onClick={this._addItemToCart}>
                    Add This Product to Shopping Cart
                  </button>
                </span>}
       </div>
   );

 }
}

export default Product;