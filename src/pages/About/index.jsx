import React, {Component} from 'react';
import './style.module.css';

export default class About extends Component {
  render() {
    return (
      <article className="lesson">
        <h1>What is a11y-workflow?</h1>
        <p>The <a href="https://github.com/nelilly/a11y-workflow">a11y workflow repository on github</a> is a Code and NPM packages to help you build accessibility testing into your workflow.</p>

        <ol>
          <li>Test early.</li>
          <li>Test often.</li>
          <li>Make it painless to remember.</li>
          <li>Make it painful to forget.</li>
        </ol>

        <p>Additional information is available in the <a href="https://docs.google.com/presentation/d/1aENJvDoKtUL0n1fpzoSs-KxlNNVuggwvhi85dg6IkR8/edit?usp=sharing">Building Accessibility Into Your Workflow presentation</a></p>
      </article>
    );
  }
}
