-- Title: Performing Basic CRUD Operations in PostgreSQL
-- Objective:
-- To learn how to Create, Read, Update, and Delete records in PostgreSQL using SQL commands.
-- Software/Tools Required-
-- pgAdmin4


-- Part A — Database Setup
-- 1) Create The Student Table

CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,        -- Auto-increment unique ID for each student
    roll_no VARCHAR(20) UNIQUE NOT NULL,   -- Unique roll number, cannot be empty
    full_name VARCHAR(100) NOT NULL,       -- Student’s full name
    email VARCHAR(120) UNIQUE,              -- Unique email ID (optional)
    department VARCHAR(50) NOT NULL,       -- Department name of the student
    semester INT NOT NULL CHECK (semester BETWEEN 1 AND 8), -- Semester number (1 to 8 only)
    cgpa NUMERIC(3,2) CHECK (cgpa BETWEEN 0.00 AND 10.00),  -- CGPA with 2 decimals, range 0–10
    created_at TIMESTAMP NOT NULL DEFAULT NOW() -- Record creation date and time
);
-- Expected Outcome: 
-- A table named students is created with constraints like PRIMARY KEY, UNIQUE, NOT NULL, and CHECK.


-- 2. Inserting data into the students table- 
INSERT INTO students (roll_no, full_name, email, department, semester, cgpa)
VALUES
('AIML24-001', 'Piyush Sharma', 'piyush.sharma@uni.edu', 'CSE-AIML', 2, 8.45),
('AIML24-002', 'Ananya Sharma', 'ananya.sharma@uni.edu', 'CSE-AIML', 2, 9.10),
('AIML24-003', 'Rohit Verma', 'rohit.verma@uni.edu', 'CSE-AIML', 2, 7.85),
('DS24-004', 'Ishita Gupta', 'ishita.gupta@uni.edu', 'CSE-DS', 2, 8.90),
('AI24-005', 'Kunal Singh', 'kunal.singh@uni.edu', 'CSE-AI', 1, 7.20);

-- Verify Insert:
SELECT * FROM students;


-- Part B — CRUD Operations 
-- C — Create (Insert)
-- Example 1: Insert a single new record
INSERT INTO students (roll_no, full_name, email, department, semester, cgpa)
VALUES ('AIML24-006', 'Meera Joshi', 'meera.joshi@uni.edu', 'CSE-AIML', 2, 8.05);

-- Example 2: Insert and return the generated ID
INSERT INTO students (roll_no, full_name, email, department, semester, cgpa)
VALUES ('AIML24-007', 'Arjun Mehta', 'arjun.mehta@uni.edu', 'CSE-AIML', 2, 8.70)
RETURNING student_id;


-- R — Read (Select)
-- Example 1: View all records
SELECT * FROM students;


-- Example 2: View selected columns
SELECT roll_no, full_name, department, cgpa
FROM students;

-- Example 3: Filter records (WHERE clause)
SELECT *
FROM students
WHERE department = 'CSE-AIML';

-- Example 4: Sort records (ORDER BY)
SELECT roll_no, full_name, cgpa
FROM students
ORDER BY cgpa DESC;

-- Example 5: Search by pattern (LIKE / ILIKE)
SELECT roll_no, full_name
FROM students
WHERE full_name ILIKE '%sharma%';

-- Example 6: Aggregate (COUNT, AVG)
SELECT department, COUNT(*) AS total_students, AVG(cgpa) AS avg_cgpa
FROM students
GROUP BY department
ORDER BY total_students DESC;


-- U — Update
-- Example 1: Update CGPA for a student
UPDATE students
SET cgpa = 8.95
WHERE roll_no = 'AIML24-003';

-- Example 2: Update multiple columns
UPDATE students
SET semester = 3, cgpa = 8.55
WHERE roll_no = 'AIML24-001';

-- Example 3: Update and return updated row
UPDATE students
SET cgpa = cgpa + 0.10
WHERE department = 'CSE-AIML'
RETURNING roll_no, full_name, cgpa;

-- Verify Update:
SELECT roll_no, full_name, semester, cgpa
FROM students
WHERE roll_no IN ('AIML24-003', 'AIML24-001')
ORDER BY roll_no;

-- D — Delete
-- Example 1: Delete one student
DELETE FROM students
WHERE roll_no = 'AI24-005';

-- Example 2: Delete using a condition
DELETE FROM students
WHERE cgpa < 7.50;

-- Example 3: Delete and return deleted row (useful for audit)
DELETE FROM students
WHERE roll_no = 'DS24-004'
RETURNING student_id, roll_no, full_name;

-- Verify Delete:
SELECT * FROM students ORDER BY student_id;



-- Part C — Student Exercise
-- Note: This exercise will be considered as Lab Experiment 1. 
-- Exercise Set 1: Create & Insert
-- 1. Create a new table named courses with columns:
--  	course_id (auto-increment primary key)
--  	course_code (unique, not null)
--  	course_name (not null)
--  	cgpa ( NUMERIC(3,2))
--  	credits (between 1 and 5)
--  	semester(between 1 and 8)
-- 2. Insert at least 5 course records.

CREATE TABLE courses(
	course_id SERIAL PRIMARY KEY,
	course_code VARCHAR(20) UNIQUE NOT NULL,
	course_name VARCHAR(100) NOT NULL,
	cgpa NUMERIC(3,2) CHECK (cgpa BETWEEN 0.00 AND 10.00),
	credits INT NOT NULL CHECK(credits BETWEEN 1 AND 5),
	semester INT NOT NULL CHECK(semester BETWEEN 1 AND 8)
);

INSERT INTO courses(course_code,course_name,cgpa,credits,semester)
VALUES
('CSE101', 'Programming in C', 8.20, 4, 1),
('CSE102', 'Data Structures', 8.75, 4, 2),
('CSE201', 'Database Management Systems', 8.90, 4, 3),
('CSE202', 'Operating Systems', 8.10, 3, 4),
('CSE301', 'Machine Learning Basics', 9.00, 5, 5);

SELECT * FROM courses;


-- Exercise Set 2: Read Queries
-- Write SQL queries for the following:

-- 		1. Display all students with CGPA >= 8.50
			SELECT * FROM students WHERE cgpa >= 8.50;

--  	2. Display students of semester 2 from CSE-AIML
			SELECT * FROM students WHERE semester = 2 AND department = 'CSE-AIML';

--  	3. Show top 3 students by CGPA
			SELECT * FROM students ORDER BY cgpa DESC LIMIT  3;

--  	4. Count how many students exist in each department
			Select department , count(*) AS total_students FROM students GROUP BY department;



-- Exercise Set 3: Update Tasks
-- 		1. Increase CGPA of all CSE-AIML students by 0.20 (ensure it does not exceed 10.00).
			UPDATE students SET cgpa = LEAST(cgpa + 0.20,10.00) WHERE department = 'CSE-AIML' ;
			
-- 		2. Update semester from 2 to 3 for all students in CSE-AIML.
			UPDATE students SET semester = 3 WHERE semester = 2 AND department = 'CSE-AIML';



-- Exercise Set 4: Delete Tasks
--		1. Delete students whose CGPA is below 7.00
			DELETE FROM students WHERE cgpa < 7.00;

			
--		2. Delete a student using roll_no (choose any one inserted by you)
			DELETE FROM students WHERE roll_no = 'AIML24-001';

		
--		3. After deletion, display the remaining records.
			SELECT * FROM students ORDER BY student_id;
