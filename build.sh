#!/bin/sh
ng build ngelements --prod --output-hashing=none && cat dist/ngelements/runtime.js dist/ngelements/polyfills.js dist/ngelements/scripts.js dist/ngelements/main.js > demo-elements/ngelements.js
# cp dist/ngelements.js ./demo-elements
