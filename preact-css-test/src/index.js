import './style';
import { Component } from 'preact';

import Page1 from './page1';

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
				<Page1></Page1>
			</div>
		);
	}
}
