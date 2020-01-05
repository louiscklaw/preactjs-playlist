import './style';
import { Component } from 'preact';

const { HighLight, THEME } = require('preact-highlight');
const demo = {
  a: 1,
  b: [ 1, 2, 3 ],
};

class CodeArea extends Component {
  render() {
    return <HighLight className="cmp-high-light" code={demo} theme={THEME.monokaiSublime}/>;
  }
}
export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
				<CodeArea />
			</div>
		);
	}
}
