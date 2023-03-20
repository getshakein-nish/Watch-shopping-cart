import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products:[
            {
                title:"watch",
                price:99,
                qty:2,
                img:'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80',
                id:1
            },
            {
                title:"Phone",
                price:999,
                qty:12,
                img:'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
                id:2
            },
            {
                title:"Laptop",
                price:599,
                qty:5,
                img:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
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

 getCartCount = () => {
      const { products } = this.state;
      let count =0;
      products.forEach((product) => {
        count += product.qty;
      })

      return count;
 }

 getCartTotal = () => {
   const { products } = this.state;
   let cartTotal = 0;
   products.map((product) => {
    cartTotal = cartTotal + product.qty * product.price
   })

   return cartTotal;
 }

  render(){
    const { products } = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()} />
      <Cart 
      products = {products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct ={this.handleDeleteProduct}
      />
      <div style={{padding:10,fontSize:20}} >TOTAL: {this.getCartTotal()}</div>
    </div>
  );
}
}

export default App;
