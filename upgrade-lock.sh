#!/bin/bash

set -eux

original_owner=$(stat --format=%u /source)
original_group=$(stat --format=%g /source)

cp -a /source /build
cd /build
yarnpkg install
yarnpkg upgrade
mv /build/yarn.lock /source/
chown -R ${original_owner}:${original_group} /source/yarn.lock
