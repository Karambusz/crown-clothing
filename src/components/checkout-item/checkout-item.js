import React from 'react';
import {connect} from 'react-redux';

import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions';

import {CheckoutItemContainer, ImageContainer, TextContainer, QuantityContainer, RemoveButtonContainer} from './checkout-item.styles';

const CheckoutItem = ({cartItem, clearItemFromCart, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item"/>
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div 
                    onClick={() => removeItem(cartItem)}>
                        &#10094;
                </div>
                <span>{quantity}</span>
                <div 
                    onClick={() => addItem(cartItem)}>
                        &#10095;
                </div>
            </QuantityContainer>
            <TextContainer >{price}</TextContainer>
            <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)}>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = ({
    clearItemFromCart,
    addItem,
    removeItem
})

export default connect(null, mapDispatchToProps)(CheckoutItem);