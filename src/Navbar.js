import React from "react";

const Navbar = (props) => {
        return (
            <div style={styles.nav}>
                <h1 style={styles.title}>Rado Switzerland</h1>
                <div style={styles.CartIconContainer}>
                    <img style={styles.CartIcon} src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="cart-icon" />
                    <span style={styles.CartCount}>{props.count}</span>
                </div>
            </div>
        );
}

const styles = {
    CartIcon :{
        height:32,
        marginRight:20
    },
    title :{
        marginLeft:30,
        color:'white'
    },
    nav:{
        height:70,
        background:'red',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    CartIconContainer:{
        position:'relative'
    },
    CartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        right:0,
        top:-9
    }
}

export default Navbar;