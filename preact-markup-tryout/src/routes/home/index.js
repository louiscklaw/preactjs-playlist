import { h } from 'preact';
import style from './style';
import Markup from 'preact-markup';

let html = `<h1>hello</h1> <p>Testing 1 2 3...</p>`;

const Home = () => (
	<div class={style.home}>
		<Markup markup={html} />
	</div>
);

export default Home;
