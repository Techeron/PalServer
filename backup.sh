#!/bin/bash

# Navigate to the repository directory
cd /home/cmkrist/PalServer

# Add all changes
git add --all

# Commit with the message "backup"
git commit -m "backup"

# Push to the repository
git push