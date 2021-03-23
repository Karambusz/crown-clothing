import React from 'react';
import CollectionItem from '../collection-item';

import {CollectionPreviewContainer, TitleContainer, PreviewContainer} from './collection-preview.styles';

const CollectionPreview = ({title, items}) => {
    return (
        <CollectionPreviewContainer>
            <TitleContainer>{title}</TitleContainer>
            <PreviewContainer>
            {
                items.filter((item, idx) => idx < 4).map((item) => {
                    return <CollectionItem key={item.id} item={item}/>
                })
            }
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
}

export default CollectionPreview;
