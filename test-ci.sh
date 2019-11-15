#!/bin/bash
set -xe

which google-chrome-unstable

yarn start-storybook -p 9009 -s public &
STORYBOOK_PROCESS=$!
yarn wait-port http://localhost:9009 && yarn storybook-jest
kill -15 $STORYBOOK_PROCESS

lsof -ti:9009 | xargs kill