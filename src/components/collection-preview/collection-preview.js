import React from 'react';
import CollectionItem from '../collection-item';
import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
            {
                items.filter((item, idx) => idx < 4).map(({id, ...otherItemsProps}) => {
                    return <CollectionItem key={id} {...otherItemsProps}/>
                })
            }
            </div>
        </div>
    )
}

export default CollectionPreview;
