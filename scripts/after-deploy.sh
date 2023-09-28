#!/bin/bash
REPOSITORY=/home/ubuntu/build

cd $REPOSITORY

sudo npx pm2 kill
sudo npm install
# npm yarn

# sudo /usr/bin/yarn db:pull # when use prisma
# sudo /usr/bin/yarn generate # when use prisma
# sudo /usr/bin/pm2 start build

# npx pm2 start npm -- start
# sudo pm2 start server.js
sudo mv .env build
sudo /usr/bin/pm2 start build/index.html