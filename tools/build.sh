#!/bin/bash

set -eu

rm -rf dist
mkdir dist

java -jar vendor/closure-compiler/build/compiler.jar \
    --js_output_file dist/scroll-floater.min.js \
    --only_closure_dependencies \
    --language_in ECMASCRIPT5_STRICT \
    --closure_entry_point altipla.ScrollFloater \
    --compilation_level ADVANCED \
    --warning_level VERBOSE \
    --generate_exports \
    --output_wrapper "(function() {%output%}).call(this);" \
    --jscomp_error checkTypes \
    --jscomp_error checkVars \
    --jscomp_error deprecated \
    --define "goog.DEBUG=false" \
    --define "goog.LOCALE='es'" \
    --define "goog.dom.ASSUME_STANDARDS_MODE=true" \
    --js src/** \
    --js vendor/closure-library/closure/**
