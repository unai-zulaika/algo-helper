-- Create the algo-helper database
CREATE DATABASE "algo-helper";

-- Connect to the algo-helper database
\c "algo-helper";

-- Create the USER table
CREATE TABLE "USER" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    settings JSONB
);

-- Create the EXERCISE table
CREATE TABLE "EXERCISE" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    exercisedata JSONB
);

-- Create the USER_EXERCISE table to map users to exercises
CREATE TABLE "USER_EXERCISE" (
    user_id INT NOT NULL,
    exercise_id INT NOT NULL,
    PRIMARY KEY (user_id, exercise_id),
    FOREIGN KEY (user_id) REFERENCES "USER"(id) ON DELETE CASCADE,
    FOREIGN KEY (exercise_id) REFERENCES "EXERCISE"(id) ON DELETE CASCADE
);

-- Insert some example data into USER table
INSERT INTO "USER" (username, email, password, settings) VALUES
('john_doe', 'john@example.com', '{"theme": "dark", "notifications": true}'),
('jane_smith', 'jane@example.com', '{"theme": "light", "notifications": false}');

-- Insert some example data into EXERCISE table
INSERT INTO "EXERCISE" (name, description, exercisedata) VALUES
('Push-ups', 'A basic upper body exercise', '{"title": 10, "description": 3}'),
('Squats', 'A fundamental lower body exercise', '{"title": 15, "description": 3}');

-- Insert some example data into USER_EXERCISE table
INSERT INTO "USER_EXERCISE" (user_id, exercise_id) VALUES
(1, 1),
(1, 2),
(2, 1);
