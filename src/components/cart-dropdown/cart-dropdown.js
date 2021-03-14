import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';


import CustomButton from '../custom-button';
import CartItem from '../cart-item'
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, toggleCartHidden}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? 
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                    : (<span className="empty-message">Your cart is empty</span>)
                }
                
            </div>
                <CustomButton 
                onClick={() => {
                    history.push('/checkout');
                    toggleCartHidden();
                }}
                >GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

const mapDispatchToProps = ({
    toggleCartHidden
})



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));

