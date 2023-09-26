#!/bin/bash
REPOSITORY=/home/ubuntu/build

cd $REPOSITORY

npx pm2 kill
npm install
# npm yarn

# sudo /usr/bin/yarn db:pull # when use prisma
# sudo /usr/bin/yarn generate # when use prisma
# sudo /usr/bin/pm2 start build

# npx pm2 start npm -- start
pm2 start server.js