
#!/bin/bash

# in case any command fails the shell interpreter will stop
set -e

docker build --tag quiz-master-app .

printf "\n\nSuccess build\n\n"