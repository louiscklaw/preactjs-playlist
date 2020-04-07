import './style';
import { Component } from 'preact';

import Helmet from 'preact-helmet';

export default class SubPage extends Component {
	render() {
		return (
			<div>
        <Helmet
          meta={[
            {property: "og:url", content: "suburl "}
          ]}
        />
        sub_index ??
			</div>
		);
	}
}
