#!/usr/bin/env bash
 
# This is a simple helper script used to start the Webpack watch process
# so that javascript files can be automatically reloaded when they are saved.
# The version of node must match what's in gradle.
 
NODE_VERSION="5.8.0"
NODE_LOC="/home/djwilliams/.nvm/versions/node/v6.9.1/bin/node"
 
# chmod u+x ${NODE_LOC}
${NODE_LOC} ./node_modules/.bin/webpack --watch --display-error-details 