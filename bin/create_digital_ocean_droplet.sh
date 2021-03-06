#!/bin/sh

SSH_KEY_FINGERPRINT=$1
BEARER_TOKEN=$2

CREATE_DROPLET_JSON='{"name":"langgame-dev","region":"fra1","size":"s-1vcpu-1gb","image":"docker-18-04","ssh_keys":["'"$SSH_KEY_FINGERPRINT"'"]}'
echo "JSON to create a droplet: $CREATE_DROPLET_JSON"


DROPLET_DETAILS=$(curl -X POST "https://api.digitalocean.com/v2/droplets" \
    -d $CREATE_DROPLET_JSON \
    -H "Authorization: Bearer $BEARER_TOKEN" \
    -H "Content-Type: application/json")

NEW_DROPLET_ID=$(echo $DROPLET_DETAILS | python -c 'import sys, json; print(json.load(sys.stdin)["droplet"]["id"])')
export NEW_DROPLET_ID=$NEW_DROPLET_ID
echo "DROPLET ID: $NEW_DROPLET_ID"

while :
do
    DROPLET_DETAILS=$(curl -X GET "https://api.digitalocean.com/v2/droplets/$NEW_DROPLET_ID" \
       -H "Authorization: Bearer $BEARER_TOKEN" \
       -H "Content-Type: application/json")

    echo "Waiting for ip address: $DROPLET_DETAILS"
    DROPLET_STATUS=$(echo $DROPLET_DETAILS | python -c "import sys, json; print(json.load(sys.stdin)['droplet']['status'])")

    echo "Current status: $DROPLET_STATUS"

    if [ $DROPLET_STATUS == "active" ]
    then
        DEPLOYMENT_DEV_SERVER_IP=$(echo $DROPLET_DETAILS | python -c "import sys, json; print(json.load(sys.stdin)['droplet']['networks']['v4'][0]['ip_address'])")
        echo "Deployment dev server ip address: $DEPLOYMENT_DEV_SERVER_IP"
        export DEPLOYMENT_DEV_SERVER_IP=$DEPLOYMENT_DEV_SERVER_IP
        break
    fi
    sleep 30s
done

