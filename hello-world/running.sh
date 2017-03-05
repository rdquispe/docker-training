# Build
docker build -t nodeweb .

# Run
docker run --name hiworld -d -p 8080:8080 nodeweb

# Remove
docker rm -f hiworld
