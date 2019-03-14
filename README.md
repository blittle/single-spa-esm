# single-spa-esm
A sample single-spa project with native ecmascript module support

## Requirements
Chrome 74 (currently Chrome Dev or Canary) with the experimental web platform features flag turned on (chrome://flags/#enable-experimental-web-platform-features).

## Setup

1. Run `yarn install`
2. Run `yarn build-all`
3. Run `yarn start`
4. Navigate to http://localhost:8080

## Features

1. Native ESM modules loaded via import maps
2. Multiple single-spa applications, each defined as it's own ESM module
   with optional internal code splits.
3. Pre-loaded modules via `<link rel="modulepreload" src="...">`
4. Client defined overrides via cookies. In the header, check the
   "Override on" checkbox to override app-2 to point to a new app-3
