namespace :db do
  desc 'Check if database exists'
  task exists: :environment do
    begin
      ActiveRecord::Base.connection
      puts "Database exists"
      exit 0
    rescue ActiveRecord::NoDatabaseError
      puts "Database does not exist"
      exit 1
    end
  end
end 