import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';



import HomePage from './pages/homepage';
import ShopPage from './pages/shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up';
import Header from './components/header';
import {auth, createUserProfileDocument} from './firebase/firebase';
import {setCurrentUser} from './redux/user/user.actions';

import './App.css';



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
			} else {
				setCurrentUser(userAuth);
			}
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	

	render() {
		return (
			<div className="App">
				<Header/>
				<Switch>
					<Route exact path='/' component={HomePage}/>
					<Route path='/shop' component={ShopPage}/>
					<Route exact path='/signin' render={()=> this.props.currentUser ?  (<Redirect to='/'/>) : (<SignInAndSignUp/>)}/>
				</Switch>
			</div>
		  );
	}
}

const mapStateToProps = ({user}) => ({
	currentUser: user.currentUser	
})

const mapDispatchToProps = {
	setCurrentUser
} 

export default connect(mapStateToProps, mapDispatchToProps)(App);

