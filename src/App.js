import React, {Component} from 'react';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up';
import Header from './components/header';
import {Route, Switch} from 'react-router-dom';
import {auth} from './firebase/firebase';
import './App.css';



export default class App extends Component {
	state = {
		currentUser: null
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({currentUser: user});
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	

	render() {
		return (
			<div className="App">
				<Header currentUser={this.state.currentUser}/>
				<Switch>
					<Route exact path='/' component={HomePage}/>
					<Route path='/shop' component={ShopPage}/>
					<Route path='/signin' component={SignInAndSignUp}/>
				</Switch>
			</div>
		  );
	}
}

