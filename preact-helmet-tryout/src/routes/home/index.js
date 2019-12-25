import { h } from 'preact';
import style from './style';
import Helmet from "preact-helmet";

const Home = () => (
	<div class={style.home}>
		<Helmet title="test Title" />
		<h1>Home</h1>
		<p>This is the Home component.</p>
	</div>
);

export default Home;
