
#!/bin/bash

# in case any command fails the shell interpreter will stop
set -e
chmod +x ./docker-build.sh
./docker-build.sh

# check if container is running
CONTAINER_NAME=quiz-master-app

if [[ "$( docker container inspect -f '{{.State.Running}}' $CONTAINER_NAME 2>/dev/null)" == "true" ]]; then
    printf "\n\nContainer quiz-master-app...\n\n"
else
    printf "\nRunning $CONTAINER_NAME...\n\n"
    docker run --detach --name quiz-master-app --publish 5432:5432 quiz-master-app
fi