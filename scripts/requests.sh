HOST=http://localhost:3000

# Hello world
echo -e '\nHello world:'
curl --silent $HOST | jq

# Get all users
echo -e '\nGet all users:'
curl --silent $HOST/user | jq

# Get by id
echo -e '\nGet by id - Joao:'
curl --silent $HOST/user/1 | jq

echo -e '\nGet by id - Maria:'
curl --silent $HOST/user/2 | jq

# Token
echo -e '\nToken:'
curl --silent -X POST \
  -H 'Content-Type: application/json' \
  -d '{"login": "joao.s", "password": "pwdJoao"}' \
  $HOST/token | jq
