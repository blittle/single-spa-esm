import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

const App1Component = lazy(() => import('./app.component'))

function RootComponent() {
  return <Suspense fallback={<div>Loading...</div>}>
    <App1Component />
  </Suspense>
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
