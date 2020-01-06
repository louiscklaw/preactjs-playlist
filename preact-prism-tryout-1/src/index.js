import './style';
import { Component } from 'preact';

import PrismTest from './components/prism-test/index'

export default class App extends Component {
	render() {


		return (
			<div>
				<h1>Hello, World! prism</h1>
				<PrismTest></PrismTest>
			</div>
		);
	}
}
