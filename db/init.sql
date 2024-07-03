-- Create the algo-helper database
-- CREATE DATABASE "algohelper";

-- Connect to the algo-helper database
\c "algohelper";

-- Create the ALGOUSER table
CREATE TABLE ALGOUSER (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    settings JSONB
);

-- Create the EXERCISE table
CREATE TABLE EXERCISE (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    exercisedata JSONB
);

-- Create the USER_EXERCISE table to map users to exercises
CREATE TABLE USER_EXERCISE (    
    user_id INT NOT NULL,
    exercise_id INT NOT NULL,
    PRIMARY KEY (user_id, exercise_id),
    FOREIGN KEY (user_id) REFERENCES ALGOUSER(id) ON DELETE CASCADE,
    FOREIGN KEY (exercise_id) REFERENCES EXERCISE(id) ON DELETE CASCADE
);

-- Insert some example data into ALGOUSER table
INSERT INTO ALGOUSER (username, email, settings) VALUES
('john_doe', 'john@example.com', '{"theme": "dark", "notifications": true}'),
('jane_smith', 'jane@example.com', '{"theme": "light", "notifications": false}');

-- Insert some example data into EXERCISE table
INSERT INTO EXERCISE (name, exercisedata) VALUES
('Push-ups', '{"title": 10, "description": 3}'),
('Squats', '{"title": 15, "description": 3}');

-- Insert some example data into USER_EXERCISE table
INSERT INTO USER_EXERCISE (user_id, exercise_id) VALUES
(1, 1),
(1, 2),
(2, 1);
