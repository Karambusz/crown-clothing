import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
import CollectionPageContainer from '../collection/collectionpage.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';



class ShopPage extends Component {
    componentDidMount() {
		const {fetchCollectionsStartAsync} = this.props;
		fetchCollectionsStartAsync();
    }


    render() {
        const {match} = this.props;
        return (
            <div>
				<Route
					exact
					path={`${match.path}`}
					component={CollectionsOverviewContainer}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPageContainer}
				/>
            </div>            
        )
    }

}


const mapDispatchToProps = {
	fetchCollectionsStartAsync
}
    


export default connect(null, mapDispatchToProps)(ShopPage);