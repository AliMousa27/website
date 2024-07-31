#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git branch -M main
git remote add origin git@github.com:AliMousa27/AliMousa27.github.io.git
git push -u origin main

cd -