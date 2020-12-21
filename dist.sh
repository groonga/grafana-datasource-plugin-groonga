#!/bin/bash

set -eux

original_owner=$(stat --format=%u /source)
original_group=$(stat --format=%g /source)

cp -a /source /build
cd /build
yarnpkg install --frozen-lockfile
./node_modules/.bin/grafana-toolkit plugin:build
rm -rf /source/dist
mv /build/dist /source
chown -R ${original_owner}:${original_group} /source/dist
