# Dataset Explanation & SQL JOINs

## Dataset Overview

### 1. students
- Contains basic student details.
- **Key column:** `student_id`
- **Purpose:** Identifies each student uniquely.

### 2. courses
- Contains course-related information.
- **Key column:** `course_id`
- **Purpose:** Identifies each course uniquely.

### 3. enrollments
- Connects students and courses.
- **Key columns:** `student_id`, `course_id`
- **Purpose:** Stores which student enrolled in which course.

---

## Relationship Between Tables

- One student can enroll in many courses.
- One course can have many students.
- This creates a **many-to-many relationship**.
- The `enrollments` table resolves this relationship (a junction/bridge table).

```
students (1) ────< enrollments >──── (1) courses
```

### Logical Links
```
students.student_id  = enrollments.student_id
courses.course_id     = enrollments.course_id
```

---

## Why JOINs Are Used

- Data is stored across multiple tables to avoid redundancy.
- JOINs combine related rows using common columns.
- JOINs work by **matching values**, not by constraints — foreign keys don't have to exist for a JOIN to work; they just help enforce data integrity.

---

## Types of JOINs

### 1. INNER JOIN
Returns only rows where matching values exist in both tables. Non-matching rows are excluded from the result.

```sql
SELECT s.student_id, s.name, c.course_name
FROM students s
INNER JOIN enrollments e ON s.student_id = e.student_id
INNER JOIN courses c ON e.course_id = c.course_id;
```

### 2. LEFT JOIN
Returns all rows from the left table and matching rows from the right table. If no match is found, `NULL` values appear for right-table columns.

```sql
SELECT s.name, e.course_id
FROM students s
LEFT JOIN enrollments e ON s.student_id = e.student_id;
```
*Use case: find all students, including those not enrolled in any course.*

### 3. RIGHT JOIN
Returns all rows from the right table and matching rows from the left table. If no match is found, `NULL` values appear for left-table columns.

```sql
SELECT c.course_name, e.student_id
FROM enrollments e
RIGHT JOIN courses c ON e.course_id = c.course_id;
```
*Use case: find all courses, including those with no students enrolled.*

### 4. FULL JOIN
Returns all rows from both tables. Rows without matches show `NULL` values on the missing side.

```sql
SELECT s.name, c.course_name
FROM students s
FULL JOIN enrollments e ON s.student_id = e.student_id
FULL JOIN courses c ON e.course_id = c.course_id;
```
*Note: MySQL doesn't support `FULL JOIN` directly — it's emulated with `LEFT JOIN UNION RIGHT JOIN`.*

### 5. CROSS JOIN
Returns every possible combination of rows from both tables. Result size = rows in table A × rows in table B.

```sql
SELECT s.name, c.course_name
FROM students s
CROSS JOIN courses c;
```
*Use case: rare in practice — useful for generating combinations, like a schedule grid.*

### 6. SELF JOIN
A table is joined with itself using a condition. Used to compare rows within the same table.

```sql
-- Example: find students in the same course
SELECT a.student_id AS student_1, b.student_id AS student_2, a.course_id
FROM enrollments a
JOIN enrollments b
  ON a.course_id = b.course_id
  AND a.student_id < b.student_id;
```

---

## Quick Reference Table

| JOIN Type | Keeps unmatched rows from... |
|---|---|
| INNER JOIN | Neither table |
| LEFT JOIN | Left table only |
| RIGHT JOIN | Right table only |
| FULL JOIN | Both tables |
| CROSS JOIN | N/A (all combinations) |
| SELF JOIN | Depends on join condition |