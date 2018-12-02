SSH_KEY_FINGERPRINT=$1
BEARER_TOKEN=$2

DROPLET_DETAILS=$(curl -X POST "https://api.digitalocean.com/v2/droplets" \
    -d '{"name":"langgame-dev","region":"fra1","size":"s-1vcpu-1gb","image":"docker-18-04","ssh_keys":['"$SSH_KEY_FINGERPRINT"']}' \
    -H "Authorization: Bearer $BEARER_TOKEN" \
    -H "Content-Type: application/json")

NEW_DROPLET_ID=echo $DROPLET_DETAILS | python -c "import sys, json; print(json.load(sys.stdin)['droplet']['id'])

for i in {1..6}
do
    DROPLET_DETAILS=(curl -X POST "https://api.digitalocean.com/v2/droplets/$NEW_DROPLET_ID")
    echo $DROPLET_DETAILS
    sleep 30s
done

