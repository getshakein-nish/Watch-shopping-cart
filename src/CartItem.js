import React from "react";

const CartItem = (props) => {


        const {price,title,qty} = props.product;
        const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} = props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img} alt="productImage"/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty :{qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                        <img 
                        onClick={() =>onIncreaseQuantity(product) } 
                        alt="Increase" className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                        />
                        <img 
                        onClick={() =>onDecreaseQuantity(product)} 
                        alt="Decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        />
                        <img 
                        onClick={() => onDeleteProduct(product.id)}
                        alt="Delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                        />
                    </div>
                </div>
            </div>
        );
}

const styles = {
    image:{
      height:110,
      width:110,
      borderRadius:4,
      background: '#ccc'
    }
}

export default CartItem;