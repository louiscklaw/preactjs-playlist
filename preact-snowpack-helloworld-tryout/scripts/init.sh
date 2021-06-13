#!/usr/bin/env bash

set -ex

rm -rf preact-snowpack-helloworld-tryout

npx create-snowpack-app preact-snowpack-helloworld-tryout \
  --template @snowpack/app-template-preact \
  --use-yarn

pushd preact-snowpack-helloworld-tryout
  # rsync -avzh --progress ../customize/src/ src
  # rsync -avzh --progress ../customize/public/ public
  rsync -avzh --progress ../customize/scripts/ scripts

  yarn --dev

  yarn format
  yarn lint
  yarn test
  yarn build
  yarn start

popd
