# single-spa-esm
A sample single-spa project that utilizes SystemJS 3.0 with modern ESM compatibility

## Setup

1. Run `yarn`
2. Run `yarn build-all`
3. Run `yarn start`
4. Navigate to http://localhost:8080


## Overrides
Override a module by setting `localStorage` flags:

```js
localStorage.setItem("package-override:react": "https://some-url")
```
