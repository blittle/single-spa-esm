import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

class RootComponent extends React.Component {
  render() {
    return <h1>App 1</h1>
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
