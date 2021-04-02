import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
import {selectCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner';
import CollectionsOverview from '../../components/collections-overview';
import CollectionPage from '../collection';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    componentDidMount() {
		const {fetchCollectionsStartAsync} = this.props;
		fetchCollectionsStartAsync();
    }


    render() {
        const {match, isCollectionsFetching, isCollectionsLoaded} = this.props;
        return (
            <div>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={isCollectionsFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
          )}
        />
            </div>            
        )
    }

}

const mapStateToProps = createStructuredSelector({
    isCollectionsFetching: selectCollectionFetching, 
	isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = {
	fetchCollectionsStartAsync
}
    


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);