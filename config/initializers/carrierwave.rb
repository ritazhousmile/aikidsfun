CarrierWave.configure do |config|
  # Use file storage for development and test environments
  if Rails.env.development? || Rails.env.test?
    config.storage = :file
  # Use fog storage for production
  elsif Rails.env.production?
    # Require fog/aws only in production to avoid dependency on AWS
    require 'fog/aws'
    config.storage = :fog
    config.fog_credentials = {
      provider: "AWS",
      aws_access_key_id: ENV["AWS_ACCESS_KEY_ID"],
      aws_secret_access_key: ENV["AWS_SECRET_ACCESS_KEY"]
    }
    config.fog_directory = ENV["PRODUCTION_S3_BUCKET"]
  end
end
