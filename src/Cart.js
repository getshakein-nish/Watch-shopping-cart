import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products:[
                {
                    title:"watch",
                    price:99,
                    qty:2,
                    img:'',
                    id:1
                },
                {
                    title:"Phone",
                    price:999,
                    qty:12,
                    img:'',
                    id:2
                },
                {
                    title:"Laptop",
                    price:599,
                    qty:5,
                    img:'',
                    id:3
                }
            ]
        }
    }
    handleIncreaseQuantity = (product) =>{
       console.log('heyy please inc the qty of ',product);
       const { products } = this.state;
       const index = products.indexOf(product);

       products[index].qty += 1;

       this.setState({
        products: products
       })
    }

    handleDecreaseQuantity = (product) =>{
        console.log('heyy please dec the qty of ',product);
        const { products } = this.state;
        const index = products.indexOf(product);

        if(products[index].qty === 0){
            return;
        }
 
        products[index].qty -= 1;
 
        this.setState({
         products: products
        })
     }

     handleDeleteProduct = (id) => {
        const { products } = this.state;
        const items = products.filter((item) => item.id !== id);

        this.setState({
            products : items
        })
     }

     render(){
        const { products } = this.state;
        return(
            <div className="cart">
                {products.map((product) => {
                  return  (
                  <CartItem
                   product={product}
                   key={product.id} 
                   onIncreaseQuantity={this.handleIncreaseQuantity}
                   onDecreaseQuantity={this.handleDecreaseQuantity}
                   onDeleteProduct ={this.handleDeleteProduct}
                 />)
                })}
            </div>
        )
     }
}

export default Cart