#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

# Netlify lambda functions
# need to npm install for each function's package.json otherwise functions won't build

cd functions/src/
for f in *; do
  if [ -d ${f} ]; then
    echo "Running npm install for package: $f"
    cd "$f"
    npm install
    cd ..
  fi
done

cd ../..

# remove old functions/build directory
rm -rf functions/build
