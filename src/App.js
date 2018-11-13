import React, { Component } from 'react';
import Login from './components/Login/Login';
import {Route, Switch} from 'react-router-dom'
import './App.css';


class App extends Component {
	render() {
		return (
		<Login />
		);
	}

}

export default App;