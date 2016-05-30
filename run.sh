#!/usr/bin/env bash

unset SERVER_HOST
unset SERVER_PORT

# Enable all debug statements
export DEBUG=*

export SERVER_HOST="127.0.0.1"
export SERVER_PORT=45213

node ./index.js

unset DEBUG

# Pause the parser upon ending
read -p "Press [Enter] key to end parser..."
