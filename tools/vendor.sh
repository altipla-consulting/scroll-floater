#!/bin/bash

set -eu

rm -rf vendor
mkdir vendor

git clone https://github.com/google/closure-compiler.git vendor/closure-compiler
cd vendor/closure-compiler
git checkout 56aa496ea370f5101e5309e96685b82511278a28
mvn -DskipTests -pl externs/pom.xml,pom-main.xml,pom-main-shaded.xml
cd ../..

git clone https://github.com/google/closure-library.git vendor/closure-library
cd vendor/closure-library
git checkout 3589a5c7d0236c84d6f2c5d01b036e782af41acd

