import React from 'react';
import {withRouter} from 'react-router-dom';
import CollectionItem from '../collection-item';

import {CollectionPreviewContainer, TitleContainer, PreviewContainer} from './collection-preview.styles';

const CollectionPreview = ({title, items, history, match, routeName }) => {
    return (
        <CollectionPreviewContainer>
            <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>{title}</TitleContainer>
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

export default withRouter(CollectionPreview);
