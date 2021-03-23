import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemCount} from '../../redux/cart/cart.selectors';


import {CartIconContainer, ShoppingIconContainer, ItemCountContainer} from './cart-icon.styles';

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <CartIconContainer  onClick={toggleCartHidden}>
            <ShoppingIconContainer />
            <ItemCountContainer>{itemCount}</ItemCountContainer>
        </CartIconContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})

const mapDispatchToProps = {
    toggleCartHidden
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);