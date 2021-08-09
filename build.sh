# set -e
# read -p 'Commit message: ' message
# if [ -z "$message" ]; then
#     echo 'Commit message can not be null'
#     exit
# fi
 
 yarn build

 git add .

#  git commit -a -m '$message'
 git commit -a -m 'deploy'

 git push

 echo -e "\033[32m finish build and copy \033[0m"