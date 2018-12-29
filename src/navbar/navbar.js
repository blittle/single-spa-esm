import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

class RootComponent extends React.Component {
  render() {
    return <div style={{position: 'fixed', top: 0, left: 0, width: '100%'}}>
      <a href="#app-1">App 1</a>
      <a href="#app-2">App 2</a>
    </div>
  }
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: RootComponent,
  domElementGetter: () => {
    let el = document.getElementById('navbar');

    if (!el) {
      el = document.createElement('div');
      el.id = 'navbar';
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
