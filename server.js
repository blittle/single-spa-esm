const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const ejs = require('ejs');

const app = express();
const port = 8080;

const MODULES = {
  react: 'https://unpkg.com/es-react@16.8.30/src/react.js',
  'react-dom': 'https://unpkg.com/es-react@16.8.30/src/react-dom.js',
  navbar: 'http://localhost:8080/navbar.js',
  'app-1': 'http://localhost:8080/app-1.js',
  'app-2': 'http://localhost:8080/app-2.js',
};

const PRELOAD = [ 'react', 'react-dom', 'navbar' ];

const OVERRIDE_KEY = 'module:';

app.use(express.static('dist'));
app.use(cookieParser());
app.get('/', (req, res, next) => {
  console.log('cookies', req.cookies);

  const mergedModules = mergeModuleOverrides(
    OVERRIDE_KEY,
    req.cookies,
    MODULES,
  );

  ejs.renderFile(
    path.resolve(__dirname, 'index.ejs'),
    { mergedModules, preload: PRELOAD },
    {},
    (err, str) => {
      if (err) {
        console.error(err);
        next(str);
      } else res.send(str);
    },
  );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function mergeModuleOverrides(overrideKey, cookies, modules) {
  const mergedModules = Object.keys(cookies).reduce(
    (overrides, cookie) => {
      if (cookie.includes(overrideKey) && cookies[cookie])
        overrides[cookie.substring(overrideKey.length)] = cookies[cookie];
      return overrides;
    },
    {...MODULES},
  );

  return Object.keys(mergedModules).map(mod => ({
    mod,
    url: mergedModules[mod],
  }));
}
