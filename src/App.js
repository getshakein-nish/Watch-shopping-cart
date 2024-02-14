import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import { db } from '.';


const App = () => {
  const [productArray, setProducts] = useState([]);
  const [loading,setLoading] = useState(true);
  const colRef = db.collection("products");

  useEffect(() => {
    colRef.orderBy('price','desc')
    .onSnapshot((snapshot) => {
            console.log(snapshot)
  
            snapshot.docs.map((doc) => {
              console.log(doc.data())
            })
  
            const products = snapshot.docs.map((doc) => {
  
              const data = doc.data();
              data['id'] = doc.id;
              return data;
            })
            setProducts(products);
            setLoading(false);
          })
  },[])

const  addProduct = () =>{
    colRef.add({
      img: '',
      price:1599,
      qty:5,
      title:'washing machine'
    })
    .then((docRef) => {
      console.log('Product has been added',docRef)
    }).catch((error)=>{
        console.log('Error',error)
    })
  }
  
const  handleIncreaseQuantity = (product) =>{
     console.log('heyy please inc the qty of ',product);
     const products = productArray;
     const index = products.indexOf(product);
  
    const docRef = colRef.doc(products[index].id);
    docRef.update({
      qty:products[index].qty +1
    }).then(() => {
      console.log('Updated Successfully')
    }).catch((error) => {
      console.log('Error ',error)
    })
  }
  
const  handleDecreaseQuantity = (product) =>{
      console.log('heyy please dec the qty of ',product);
      const products = productArray;
      const index = products.indexOf(product);
  
      if(products[index].qty === 0){
          return;
      }
      const docRef = colRef.doc(products[index].id);
    docRef.update({
      qty:products[index].qty - 1
    }).then(() => {
      console.log('Updated Successfully')
    }).catch((error) => {
      console.log('Error ',error)
    })
   }
  
const handleDeleteProduct = (id) => {
      const products = productArray;
      
      const docRef = colRef.doc(id);
  
      docRef.delete().then(() => {
        console.log('Deleted Successfully')
      }).catch((error) => {
        console.log('Error ',error)
      })
   }
  
  const getCartCount = () => {
        const products = productArray;
        let count =0;
        products.forEach((product) => {
          count += product.qty;
        })
  
        return count;
   }
  
  const getCartTotal = () => {
     const products = productArray;
     let cartTotal = 0;
     products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
     })
  
     return cartTotal;
   }

  return (
    <div className="App">
      <Navbar count={getCartCount()} />
      {/* <button onClick={addProduct} style={{ padding:20,fontSize:20}}>Add a Product</button> */}
      <Cart 
      products = {productArray}
      onIncreaseQuantity={handleIncreaseQuantity}
      onDecreaseQuantity={handleDecreaseQuantity}
      onDeleteProduct ={handleDeleteProduct}
      />
      {loading  && <h1>Loading Products...</h1>}
      <div style={{padding:10,fontSize:20,background:'yellow'}} ><span style={{fontWeight:700, color:'red'}}>TOTAL: </span> {getCartTotal()}</div>
    </div>
  )
}

export default App
