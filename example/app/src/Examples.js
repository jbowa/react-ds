import React from 'react';
import Example from './Example';

export default class Examples extends React.PureComponent {

  render() {
    return (
      <div>
        <h2>
          <a href="https://github.com/aurbano/react-ds/blob/master/example/app/src/Example.js" className="right">
            <code>&lt;Source&gt;</code>
          </a>
          Example
        </h2>

        <p>The box below is the <code>target</code> for the Selection component. You'll see that you can't initiate selections outside of it.</p>

        <Example />

        <h2 style={ { marginTop: '2em' } }>Custom styles</h2>

        <p>Here's an example using custom styles for the selection box. These are simply passed on the <code>style</code> prop of the <code>Selection</code> component.</p>

        <Example style={ { background: 'rgba(0,0,0,0.3)' } } />

        <h2 style={ { marginTop: '2em' } }>Ignore certain targets</h2>

        <p>You can also ignore certain targets from initiating selects. This is specially useful because <code>react-ds</code> uses native events which bypass React's synthetic event queue.</p>

        <p>In this example, events initiated over the item <b>"three"</b> are ignored.</p>

        <Example ignoreTargets={ ['.item-three'] }/>
      </div>
    );
  }
}