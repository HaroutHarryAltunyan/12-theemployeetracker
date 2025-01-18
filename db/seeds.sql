-- seeds.sql

-- Insert into department table
INSERT INTO department (name) VALUES
    ('Engineering'),
    ('Finance'),
    ('Sales');

-- Insert into role table
INSERT INTO role (title, salary, department_id) VALUES
    ('Software Engineer', 10000, 1),
    ('Accountant', 20000, 2),
    ('Sales Representative', 30000, 3);

-- Insert into employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('John', 'Doe', 1, NULL),
    ('Jane', 'Smith', 2, 1),
    ('Mark', 'Johnson', 3, 1);