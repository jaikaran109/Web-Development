CREATE TABLE students (
student_id INT,
student_name VARCHAR(50),
age INT,
city VARCHAR(50)
);

CREATE TABLE courses (
course_id INT,
course_name VARCHAR(50),
department VARCHAR(50),
credits INT
);

CREATE TABLE enrollments (
enrollment_id INT,
student_id INT,
course_id INT,
semester VARCHAR(20)
);



-- 1. Display all students along with the courses they are enrolled in.
SELECT s.student_name, c.course_name
FROM students s
INNER JOIN enrollments e
ON s.student_id = e.student_id
INNER JOIN courses c
ON e.course_id = c.course_id;


-- 2. Display all students even if they are not enrolled in any course.
SELECT s.student_name, e.course_id
FROM students s
LEFT JOIN enrollments e
ON s.student_id = e.student_id;


-- 3. Display all courses even if no student has enrolled in them.
SELECT c.course_name, e.student_id
FROM courses c
LEFT JOIN enrollments e
ON c.course_id = e.course_id;


-- 4. Show student name and course name for all enrollments.
SELECT s.student_name, c.course_name
FROM enrollments e
JOIN students s
ON e.student_id = s.student_id
JOIN courses c
ON e.course_id = c.course_id;


-- 5. Display student name, course name, and semester information.
SELECT s.student_name, c.course_name, e.semester
FROM enrollments e
JOIN students s
ON e.student_id = s.student_id
JOIN courses c
ON e.course_id = c.course_id;


-- 6. Find all students who are enrolled in more than one course.
SELECT s.student_name
FROM students s
JOIN enrollments e
ON s.student_id = e.student_id
GROUP BY s.student_name
HAVING COUNT(e.course_id) > 1;


-- 7. Display all students from a specific city along with their enrolled courses.
SELECT s.student_name, c.course_name
FROM students s
JOIN enrollments e
ON s.student_id = e.student_id
JOIN courses c
ON e.course_id = c.course_id
WHERE s.city = 'Delhi';


-- 8. Find courses that have no students enrolled.
SELECT c.course_name
FROM courses c
LEFT JOIN enrollments e
ON c.course_id = e.course_id
WHERE e.course_id IS NULL;


-- 9. Display course name and total number of students enrolled in each course.
SELECT c.course_name, COUNT(e.student_id) AS total_students
FROM courses c
LEFT JOIN enrollments e
ON c.course_id = e.course_id
GROUP BY c.course_name;


-- 10. Display all students and all courses using a FULL JOIN.
SELECT s.student_name, c.course_name
FROM students s
FULL JOIN enrollments e
ON s.student_id = e.student_id
FULL JOIN courses c
ON e.course_id = c.course_id;
