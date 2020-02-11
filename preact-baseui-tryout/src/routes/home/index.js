import { h } from 'preact';
import style from './style';

import {styled} from 'baseui';
import { Button } from "baseui/button";

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<Centered>
			<Button onClick={() => alert("click")}>Hello</Button>
		</Centered>
	</div>
);

export default Home;
