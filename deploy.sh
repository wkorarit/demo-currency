#!/bin/bash

# Exit on errors
set -e

# Build the project
npm run build

# Navigate to the dist directory (where the build files are located)
cd dist

# Initialize a git repository in the dist directory
git init

# Add all the files to the git staging area
git add -A

# Commit the changes
git commit -m "Deploy to GitHub Pages"

# Push the changes to the gh-pages branch of your repository
git push -f https://github.com/wkorarit/demo-currency.git master:gh-pages

# Go back to the root directory
cd -
