import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

function getOverride() {
  const match = /module:[^=]+=([^;]+)/g.exec(document.cookie);
  return match && match[1];
}

function setOverride(name, value) {
  document.cookie = `module:${name}=${value}`;
}

class RootComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overrideOn: getOverride(),
    };
  }
  render() {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}>
        <a href="#app-1">App 1</a>
        <a href="#app-2">App 2</a>
        <label title="This will override app-2 to point to a new module that represents app-3">
          <input
            type="checkbox"
            onChange={this.toggleOverride.bind(this)}
            checked={this.state.overrideOn}
          />{' '}
          Override on
        </label>
      </div>
    );
  }
  toggleOverride() {
    if (this.state.overrideOn) {
      setOverride('app-2', '');
    } else {
      setOverride('app-2', 'http://localhost:8080/app-3.js');
    }
    window.location.reload();
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

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];
