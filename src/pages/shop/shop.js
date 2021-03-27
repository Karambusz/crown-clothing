import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase';
import {updateCollections} from '../../redux/shop/shop.actions';

import CollectionOverview from '../../components/collections-overview';
import CollectionPage from '../collection';


class ShopPage extends Component {
    unsubscribeFromSnapshot = null;


    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');


        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
           const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
           updateCollections(collectionsMap);
        })
    }


    render() {
        const {match} = this.props;
        return (
            <div>
                <Route exact path={`${match.path}`} component={CollectionOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>            
        )
    }

}

const mapDispatchToProps = {
    updateCollections
}

export default connect(null, mapDispatchToProps)(ShopPage);