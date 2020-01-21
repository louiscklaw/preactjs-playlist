import './style';
import { Component } from 'preact';

import color from './color.css';

export default class App extends Component {
	bgColor="red";

	constructor(){
		super();
		this.state={
			test_state_var: false
		}
	}

	componentDidMount(){
		this.setState({
			...this.state,
			test_state_var: true
		})

		window.onscroll = this.testOnScroll
	}

	testOnScroll(){
		if (window.pageYOffset > 300){
			console.log('sticky')
			console.log(color)
			document.querySelector('.helloworld').style.backgroundColor="green"
		}else{
			console.log('not sticky');
			document.querySelector('.helloworld').style.backgroundColor="gold"
			// this.bgColor='gold';

		}
	}

	render() {
		console.log('state',this.state)
		return (
			<div>
				<h1 style={{height: '300vh'}} className="helloworld" >Hello, World!</h1>
			</div>
		);
	}
}
