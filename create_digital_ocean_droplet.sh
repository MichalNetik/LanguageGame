SSH_KEY_FINGERPRINT=$1
BEARER_TOKEN=$2

DROPLET_DETAILS=$(curl -X POST "https://api.digitalocean.com/v2/droplets" \
    -d '{"name":"langgame-dev","region":"fra1","size":"s-1vcpu-1gb","image":"docker-18-04","ssh_keys":["66:6a:d7:d4:52:7b:49:0b:49:8c:fb:c7:d2:7c:ce:9d"]}' \
    -H "Authorization: Bearer $BEARER_TOKEN" \
    -H "Content-Type: application/json")

echo $DROPLET_DETAILS

