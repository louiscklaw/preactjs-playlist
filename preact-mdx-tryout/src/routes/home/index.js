import { h } from 'preact';
import style from './style';

import { importMDX } from 'mdx.macro';
const Content = importMDX('./Content.mdx');

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<Content />
	</div>
);

export default Home;
