import React from 'react';

import {connect} from 'react-redux';


import {addItem} from '../../redux/cart/cart.actions';
import {CollectionItemContainer, AddButton, BackgroundImage, CollectionFooterContainer, NameContainer, PriceContainer} from './collection-item.styles';

const CollectionItem = ({item,  addItem}) => {
    const {name, price, imageUrl} = item;

    return (
        <CollectionItemContainer>
            <BackgroundImage 
            className='image'
            imageUrl={imageUrl}     
            />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}$</PriceContainer>
            </CollectionFooterContainer>
            <AddButton inverted onClick={() => addItem(item)}>Add to cart</AddButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = {
    addItem    
}

export default connect(null, mapDispatchToProps)(CollectionItem);