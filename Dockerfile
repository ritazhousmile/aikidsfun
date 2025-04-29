FROM ruby:3.1.5

# Install dependencies
RUN apt-get update -qq && \
    apt-get install -y nodejs postgresql-client npm && \
    npm install -g yarn && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install correct bundler version
RUN gem install bundler -v 2.0.2

# Copy dependency definition files
COPY Gemfile Gemfile.lock package.json yarn.lock ./

# Install dependencies - use --ignore-scripts to skip PhantomJS on ARM64
RUN bundle install && \
    yarn install --ignore-scripts

# Copy the rest of the application
COPY . .

# Precompile assets (if running in production)
RUN if [ "${RAILS_ENV}" = "production" ]; then \
        SECRET_KEY_BASE=placeholder bundle exec rake assets:precompile; \
    fi

# Make the entrypoint script executable
RUN chmod +x /app/bin/docker-entrypoint.sh

# Expose port 3000
EXPOSE 3000

# Set the entrypoint
ENTRYPOINT ["/app/bin/docker-entrypoint.sh"]

# Start the Rails server
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"] 