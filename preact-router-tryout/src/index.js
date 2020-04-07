import './style';
import { Component } from 'preact';

import { Router } from 'preact-router';
import { Link } from 'preact-router/match';

class Home extends Component {
	render(){
		return(
			<h1>Home</h1>
		)
	}
}

class About extends Component {
	render(){
		return(
			<h1>About</h1>
		)
	}
}

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
				<nav>
					<Link activeClassName="active" href="/">Home</Link>
					<Link activeClassName="active" href="/about">About</Link>
				</nav>
				<Router>
					<Home path="/" />
					<About path="/about" />
				</Router>

			</div>
		);
	}
}
