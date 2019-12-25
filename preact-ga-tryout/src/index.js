import './style';
import { Component } from 'preact';

import DevConfig from './config/dev.config'
import ProdConfig from './config/prod.config'

import ReactGA from 'react-ga';

const CHECK_DEV_ENV = () => {
  let check_result = process.env.NODE_ENV === 'development';
  if(check_result){
    console.warn("check running environment.")
  }
  return check_result;
}

const ACTIVE_CONFIG = (CHECK_DEV_ENV() === 'development' ? DevConfig: ProdConfig)

ReactGA.initialize(ACTIVE_CONFIG.GAKey);
ReactGA.pageview(window.location.pathname + window.location.search);

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
			</div>
		);
	}
}
