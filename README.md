# ReadMe

This repo is used to demonstrate difficulties of importing wasm into cypress.

It seems the cypress webpack file needs `wasm-loader` for this to work...

## Prerequisites 
1. Install [rust](https://www.rust-lang.org/tools/install)
2. Install [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)
3. Ensure you have Node v12.18 or higher

## Building and Preparing

1. Run `make build`
2. Run to install dev dependencies `npm install` or `yarn install`
3. To run cypress test run `npm test` or `yarn test`

You'll see there the errors in the terminal