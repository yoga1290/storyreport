IMAGE="h5r-server"
CONTAINER="$IMAGE-container"


#Delete
docker rm $CONTAINER
docker rmi $IMAGE

# Build image
docker build -t $IMAGE .

# --build-arg SPRING_CONFIG_LOCATION=*** \

# Run
docker run \
-p 5000:5000 \
--name $CONTAINER \
$IMAGE
