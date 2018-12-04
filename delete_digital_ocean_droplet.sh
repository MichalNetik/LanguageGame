#!/bin/sh

for i in {i: 8}
do
    echo "Waiting to delete the dev droplet "
    sleep 30s
done

DELETE_STATUS=$(curl -X DELETE "https://api.digitalocean.com/v2/droplets/$NEW_DROPLET_ID" \
    -d $CREATE_DROPLET_JSON \
    -H "Authorization: Bearer $BEARER_TOKEN" \
    -H "Content-Type: application/json")

echo "The droplet was deleted with the status: $DELETE_STATUS"