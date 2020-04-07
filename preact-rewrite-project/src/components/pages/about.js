import anotherstyle from './about_style.css';
import { Component } from 'preact';


export default class About extends Component {
  render() {
    console.log(anotherstyle);
    return (
			<div className={anotherstyle.page_about}>
				I am about
			</div>
		);
	}
}
