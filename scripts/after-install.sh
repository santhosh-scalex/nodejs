#! /bin/bash
echo " running custom script..."
su ubuntu
cd ~
## sudo su
cd nodejs
git pull origin dev
npm install
pm2 restart nodejs
