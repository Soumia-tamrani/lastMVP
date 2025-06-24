#!/bin/bash

cd /app

# Wait for PostgreSQL and Redis to be ready
echo "Waiting for PostgreSQL..."
until pg_isready -h $POSTGRES_HOST -p $POSTGRES_PORT -U $POSTGRES_USER
do
    echo "PostgreSQL is unavailable - sleeping"
    sleep 2
done
echo "PostgreSQL is up - continuing..."

echo "Waiting for Redis..."
until nc -z $REDIS_HOST $REDIS_PORT
do
    echo "Redis is unavailable - sleeping"
    sleep 2
done
echo "Redis is up - continuing..."

export CHOKIDAR_USEPOLLING=true

# Start the NestJS application in development mode
echo "Starting NestJS application..."
npm run start:dev