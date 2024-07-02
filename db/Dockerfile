# Use the official PostgreSQL image from the Docker Hub
FROM postgres:latest

# Add a custom SQL script to initialize the database
COPY init.sql /docker-entrypoint-initdb.d/

# Expose the default PostgreSQL port
EXPOSE 5432
