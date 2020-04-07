import './style';
import { Component } from 'preact';

const { CSS, HTML, render } = require('vcom')
const html = require('preact-html')

const css = CSS(`
  .blue {
    background: blue;
  }
`)

const vnodes = html('<h2 class="blue"><strong>hi there!</strong></h2>', {
  h2 (props) {
    return HTML.h3.class(props.class)(props.children)
  }
})

const div = css(HTML.div(vnodes))

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
			</div>
		);
	}
}
