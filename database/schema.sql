CREATE TABLE tasks (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  description TEXT,
  status VARCHAR(50),
  user_id INT
);

SELECT * FROM tasks;