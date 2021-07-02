# 确保脚本抛出遇到的错误
set -e

# 打包生成静态文件
yarn build

# 进入打包好的文件夹
cd docs/.vuepress/dist

# 创建git的本地仓库，提交修改
# git init
git add -A
git commit -m 'deploy'

cd ..