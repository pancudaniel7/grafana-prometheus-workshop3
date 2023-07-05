#!/bin/bash

#
# this should be called inside tmux
#

while [ true ]; do

    echo curl /health
    curl -s http://localhost:8000/health > /dev/null

    pause_time=$(( ${RANDOM} % 5 ))
    echo sleep ${pause_time}
    sleep ${pause_time}

    echo
done
