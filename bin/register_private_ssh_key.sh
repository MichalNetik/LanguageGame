#!/bin/sh

PRIVATE_SSH_KEY=$1
DEPLOYMENT_SERVER_IP=$2

mkdir -p ~/.ssh
echo -e $PRIVATE_SSH_KEY | tr -d '\r' > ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
ssh-keyscan $DEPLOYMENT_SERVER_IP 2>&1 | tee -a $HOME/.ssh/known_hosts