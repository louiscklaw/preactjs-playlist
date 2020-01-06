
import Prism from 'prismjs';
import Helmet from "preact-helmet";


// import './prism.css';
import { render } from 'preact';

const code = `var data = 1;`;
const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');

var test_html = `<span class="token keyword">var</span> data<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>`

var test_html1 = `<div>hello world test_html1</div>`

export default () => {

  return(
    <div>
      <Helmet
        link={[
          {rel:"stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/themes/prism.css"}
        ]}
      />

      test import prism
      <pre>
        <code class="language-js">
          <div dangerouslySetInnerHTML={{__html:test_html}}>
          </div>
        </code>
      </pre>

    </div>
  )
}