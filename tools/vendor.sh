#!/bin/bash

set -eu

rm -rf vendor
mkdir vendor

git clone https://github.com/google/closure-compiler.git vendor/closure-compiler
cd vendor/closure-compiler
git status
git checkout b1ea083b46121922e4de9b19316ebfee99c7ed8c
ant jar
cd ../..

git clone https://github.com/google/closure-library.git vendor/closure-library
cd vendor/closure-library
git checkout ae7603a41ad1b311e8430dfa3ed9c072ae1a6fe1

