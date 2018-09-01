#Delete

docker rm h5r-server-container
docker rmi h5r-server

# Build image
docker build -t h5r-server .

# --build-arg SPRING_CONFIG_LOCATION=*** \

# H5R_PATH=$(pwd)/node_modules/h5recorder
H5R_PATH=$(pwd)/h5recorder

# Run
# -v $H5R_PATH:/app/node_modules/h5recorder \
docker run \
-p 5000:5000 \
--name h5r-server-container \
h5r-server
