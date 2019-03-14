import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

class RootComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { app: null };
  }

  componentDidMount() {
    import('./app.component.js').then(load => this.setState({app: load.default}))
  }

  render() {
    return <div>
      <h1>App 3</h1>
      {this.state.app ? <this.state.app /> : null}
    </div>
  }
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: RootComponent,
  domElementGetter: () => {
    let el = document.getElementById('app-1');

    if (!el) {
      el = document.createElement('div');
      el.id = 'app-1';
      document.body.appendChild(el);
    }

    return el;
  },
});

export const bootstrap = [
  reactLifecycles.bootstrap,
];

export const mount = [
  reactLifecycles.mount,
];

export const unmount = [
  reactLifecycles.unmount,
];
