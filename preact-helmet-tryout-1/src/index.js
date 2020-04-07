import './style';
import { Component } from 'preact';

import Helmet from 'preact-helmet';

import SubPage from './sub_index';

export default class App extends Component {
	render() {
		return (
			<div>
				<Helmet
					title="My Title"

				/>
				<SubPage />
			</div>
		);
	}
}
