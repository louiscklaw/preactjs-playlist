import './style';
import { Component } from 'preact';

import Helloworld from './helloworld1';

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
				<Helloworld />
			</div>
		);
	}
}
