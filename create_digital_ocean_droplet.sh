curl -X POST "https://api.digitalocean.com/v2/droplets" \
    -d '{"name":"langgame-dev","region":"fra1","size":"s-1vcpu-1gb","image":"docker-18-04","ssh_keys":["$PROD_SSH_PUBLIC_FINGERPRINT"]}' \
    -H "Authorization: Bearer $DIGITAL_OCEAN_TOKEN" \
    -H "Content-Type: application/json
