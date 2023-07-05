#!/bin/bash

#
# this should be called inside tmux
#

while [ true ]; do

    echo curl /histogram
    curl -s http://localhost:8000/histogram > /dev/null

    pause_time=$(( ${RANDOM} % 5 ))
    echo sleep ${pause_time}
    sleep ${pause_time}

    echo
done
