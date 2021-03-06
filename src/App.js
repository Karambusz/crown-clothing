import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';


import HomePage from './pages/homepage';
import ShopPage from './pages/shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up';
import CheckoutPage from './pages/checkout';


import Header from './components/header';
import {auth, createUserProfileDocument} from './firebase/firebase';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector';

import {GlobalStyle} from './global.styles';



class App extends Component {

	unsubscribeFromAuth = null;

	componentDidMount() {
		const {setCurrentUser} = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					setCurrentUser({
							id: snapShot.id,
							...snapShot.data()
					});
				})
			} 				
			setCurrentUser(userAuth);		
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	

	render() {
		return (
			<div>
				<GlobalStyle/>
				<Header/>
				<Switch>
					<Route exact path='/' component={HomePage}/>
					<Route path='/shop' component={ShopPage}/>
					<Route exact path='/checkout' component={CheckoutPage}/>
					<Route exact path='/signin' render={()=> this.props.currentUser ?  (<Redirect to='/'/>) : (<SignInAndSignUp/>)}/>
				</Switch>
			</div>
		  );
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
})

const mapDispatchToProps = {
	setCurrentUser
} 

export default connect(mapStateToProps, mapDispatchToProps)(App);

