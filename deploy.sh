# abort on errors
set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git branch -M main
git remote add origin git@github.com:AliMousa27/AliMousa27.github.io.git
git push -u -f origin main

cd -