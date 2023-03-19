import React from "react";

class CartItem extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             price:999,
//             title:'Phone',
//             qty:1,
//             img:''
//         }
//        // this.increaseQuantity = this.increaseQuantity.bind(this)
//     }
// increaseQuantity = () => {
//         //setState form 1
//         // this.setState({
//         //     qty: this.state.qty + 1
//         // });

//         //setState form 2
//         this.setState((prevState) => {
//            return{
//             qty: prevState.qty + 1
//            }
//         });
//     }

// decreaseQuantity = () => {
//     //setState form 2
//     const {qty} = this.state
//     if(qty === 0){
//         return;
//     }

//     this.setState((prevState) => {
//            return{
//             qty: prevState.qty - 1
//            }
//         });
//     }



    render(){
        const {price,title,qty} = this.props.product;
        return (
            <div className="cart-item">
                {this.props.jsx} 
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty :{qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                        <img 
                        onClick={() => this.props.onIncreaseQuantity(this.props.product) } 
                        alt="Increase" className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                        />
                        <img 
                        onClick={() => this.props.onDecreaseQuantity(this.props.product)} 
                        alt="Decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        />
                        <img 
                        alt="Delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                        />
                    </div>
                </div>
            </div>
        );
    }
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