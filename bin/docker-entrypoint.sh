#!/bin/bash
set -e

# Print message function
function msg() {
  echo -e "\n[Docker Entrypoint] $1\n"
}

# Check if DATABASE_URL is provided, otherwise use individual connection params
if [ -z "$DATABASE_URL" ]; then
  if [ -z "$DATABASE_HOST" ] || [ -z "$DATABASE_USERNAME" ] || [ -z "$DATABASE_PASSWORD" ]; then
    msg "Error: DATABASE_URL or all of DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD must be set"
    exit 1
  fi
  # Build connection string from separate params
  DB_HOST=$DATABASE_HOST
  DB_USER=$DATABASE_USERNAME
  DB_PASS=$DATABASE_PASSWORD
else
  # Parse DATABASE_URL
  DB_HOST=$(echo $DATABASE_URL | sed -E 's/^postgres:\/\/([^:]+):([^@]+)@([^:]+):([0-9]+)\/(.+)$/\3/')
  DB_USER=$(echo $DATABASE_URL | sed -E 's/^postgres:\/\/([^:]+):([^@]+)@([^:]+):([0-9]+)\/(.+)$/\1/')
  DB_PASS=$(echo $DATABASE_URL | sed -E 's/^postgres:\/\/([^:]+):([^@]+)@([^:]+):([0-9]+)\/(.+)$/\2/')
fi

# Wait for database
msg "Waiting for PostgreSQL to be ready..."
max_attempts=30
attempt_num=1

while [ $attempt_num -le $max_attempts ]; do
  if PGPASSWORD=$DB_PASS psql -h $DB_HOST -U $DB_USER -c '\q' > /dev/null 2>&1; then
    msg "PostgreSQL is up!"
    break
  else
    msg "PostgreSQL is unavailable - sleeping for 1 second (attempt $attempt_num/$max_attempts)"
    sleep 1
    attempt_num=$(( attempt_num + 1 ))
  fi
done

if [ $attempt_num -gt $max_attempts ]; then
  msg "PostgreSQL did not become available in time. Proceeding anyway..."
fi

# Check if this is the first run by looking for the database existence
if bundle exec rails db:exists 2>/dev/null; then
  msg "Database exists, running migrations"
  bundle exec rails db:migrate
else
  msg "Database does not exist, creating and seeding"
  bundle exec rails db:create db:migrate db:seed
fi

# For production environment
if [ "$RAILS_ENV" = "production" ]; then
  msg "Ensuring assets are compiled for production"
  if [ ! -d "public/assets" ] || [ -z "$(ls -A public/assets 2>/dev/null)" ]; then
    msg "Assets not found. Compiling assets..."
    bundle exec rake assets:precompile
  fi
fi

msg "Starting Rails server..."
# Then exec the container's main process (what's set as CMD in the Dockerfile)
exec "$@" 