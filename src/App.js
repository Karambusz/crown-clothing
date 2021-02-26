import React from 'react';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop';
import Header from './components/header';
import {Route, Switch} from 'react-router-dom';
import './App.css';


function App() {
  return (
	<div className="App">
		<Header/>
		<Switch>
			<Route exact path='/' component={HomePage}/>
			<Route path='/shop' component={ShopPage}/>
		</Switch>
	</div>
  );
}

export default App;
