-- Create the algo-helper database
-- CREATE DATABASE "algohelper";

-- Connect to the algo-helper database
\c "algohelper";

-- Create the algo_user table
CREATE TABLE algo_user (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    settings JSONB
);

-- Create the exercise table
CREATE TABLE exercise (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    exercisedata JSONB
);

-- Create the USER_exercise table to map users to exercises
CREATE TABLE user_exercise (    
    user_id INT NOT NULL,
    exercise_id INT NOT NULL,
    PRIMARY KEY (user_id, exercise_id),
    FOREIGN KEY (user_id) REFERENCES algo_user(id) ON DELETE CASCADE,
    FOREIGN KEY (exercise_id) REFERENCES exercise(id) ON DELETE CASCADE
);

-- Insert some example data into algo_user table
INSERT INTO algo_user (username, email, settings) VALUES
('john_doe', 'john@example.com', '{"theme": "dark", "notifications": true}'),
('jane_smith', 'jane@example.com', '{"theme": "light", "notifications": false}');

-- Insert some example data into exercise table
INSERT INTO exercise (name, exercisedata) VALUES
('Reverse linked list', '{
      "title": "Reverse linked list",
      "description":
        "Given a pointer to the head node of a linked list, the task is to reverse the linked list. We need to reverse the list by changing the links between nodes."
    }'),
('Bubble Sort', '{
      "title": "Bubble Sort",
      "description":
        "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high."
    }');

-- Insert some example data into USER_exercise table
INSERT INTO user_exercise (user_id, exercise_id) VALUES
(1, 1),
(1, 2),
(2, 1);
