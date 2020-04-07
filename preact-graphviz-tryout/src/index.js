import './style';
import { Component } from 'preact';

import { Graphviz } from 'graphviz-react';



export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
					<Graphviz dot={`graph {
						grandparent -- "parent A";
						child;
						"parent B" -- child;
						grandparent --  "parent B";
					}`} />
			</div>
		);
	}
}
