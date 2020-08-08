#!/usr/bin/env bash

set -ex

rm -rf preactjs-helloworld-tryout

preact create default preactjs-helloworld-tryout

cd preactjs-helloworld-tryout

  yarn
  yarn build
  yarn dev

cd -
