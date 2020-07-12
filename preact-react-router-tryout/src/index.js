import './style';
import { Component } from 'preact';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Topics from './Topics';

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/about" component={About}/>
						<Route path="/topics" component={Topics}/>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}
