# !/bin/bash

echo "Enter Commit Message -> "
read msg

git add .
git commit -m"$msg"
git push 
 
