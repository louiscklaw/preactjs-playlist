import './style';
import { Component, createContext } from 'preact';
import {useContext} from 'preact/hooks';

const Theme = createContext('light');

function ThemedButton(props) {
	var test = useContext(Theme);
	console.log(test);
  return (
    <Theme.Consumer>
			{theme => {
				return <div>123321</div>
			}}
    </Theme.Consumer>
  );
}



export default class App extends Component {
	render() {
		return (
			<Theme.Provider value="dark">
			<div>
				<h1>Hello, World!</h1>
				<ThemedButton />
			</div>
			</Theme.Provider>

		);
	}
}
