# Normalization

Normalization is the process of structuring a database to eliminate redundancy and prevent data inconsistencies. It involves splitting large, repetitive tables into smaller, related tables — connected using keys.

---

## Why Normalize?

Unnormalized tables cause:
- **Redundancy** — same data repeated across many rows
- **Update anomaly** — changing one fact requires updating multiple rows
- **Insertion anomaly** — can't add certain data without unrelated data also being present
- **Deletion anomaly** — deleting one row accidentally removes other useful information

---

## Example: The Unnormalized Table

| student_id | student_name | course1 | course2 | teacher_name | teacher_subject |
|---|---|---|---|---|---|
| 1 | Aarav | Math | Science | Mr. Verma | Math |
| 2 | Priya | Math | — | Mr. Verma | Math |

Problems: repeating columns (`course1`, `course2`), redundant teacher info, and anomalies described above.

---

## 1. First Normal Form (1NF)

**Rule:** Every column must hold a single, atomic value — no repeating groups, no comma-separated lists.

| student_id | student_name | course | teacher_name | teacher_subject |
|---|---|---|---|---|
| 1 | Aarav | Math | Mr. Verma | Math |
| 1 | Aarav | Science | Ms. Rao | Science |
| 2 | Priya | Math | Mr. Verma | Math |

Each cell now has a single value, and each row represents one student-course combination.

---

## 2. Second Normal Form (2NF)

**Rule:** Must already be in 1NF, and every non-key column must depend on the **whole** primary key (relevant only when the key is composite).

The primary key here is `(student_id, course)`, but `student_name` depends only on `student_id` — a **partial dependency**. Split it out:

**students**

| student_id (PK) | student_name |
|---|---|
| 1 | Aarav |
| 2 | Priya |

**enrollments**

| student_id | course | teacher_name | teacher_subject |
|---|---|---|---|
| 1 | Math | Mr. Verma | Math |
| 1 | Science | Ms. Rao | Science |
| 2 | Math | Mr. Verma | Math |

---

## 3. Third Normal Form (3NF)

**Rule:** Must already be in 2NF, and no non-key column may depend on another non-key column (no **transitive dependency**).

`teacher_subject` depends on `teacher_name`, not directly on `(student_id, course)`. Split further:

**students**

| student_id (PK) | student_name |
|---|---|
| 1 | Aarav |
| 2 | Priya |

**courses**

| course (PK) | teacher_name |
|---|---|
| Math | Mr. Verma |
| Science | Ms. Rao |

**teachers**

| teacher_name (PK) | teacher_subject |
|---|---|
| Mr. Verma | Math |
| Ms. Rao | Science |

**enrollments**

| student_id (FK) | course (FK) |
|---|---|
| 1 | Math |
| 1 | Science |
| 2 | Math |

Most production databases target 3NF — it balances data integrity with practicality.

### SQL for the 3NF Schema

```sql
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50) NOT NULL
);

CREATE TABLE teachers (
    teacher_name VARCHAR(50) PRIMARY KEY,
    teacher_subject VARCHAR(50) NOT NULL
);

CREATE TABLE courses (
    course VARCHAR(50) PRIMARY KEY,
    teacher_name VARCHAR(50),
    FOREIGN KEY (teacher_name) REFERENCES teachers(teacher_name)
);

CREATE TABLE enrollments (
    student_id INT,
    course VARCHAR(50),
    PRIMARY KEY (student_id, course),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course) REFERENCES courses(course)
);

-- Sample inserts
INSERT INTO students VALUES (1, 'Aarav'), (2, 'Priya');
INSERT INTO teachers VALUES ('Mr. Verma', 'Math'), ('Ms. Rao', 'Science');
INSERT INTO courses VALUES ('Math', 'Mr. Verma'), ('Science', 'Ms. Rao');
INSERT INTO enrollments VALUES (1, 'Math'), (1, 'Science'), (2, 'Math');

-- Query: which students study which subject, taught by whom
SELECT s.student_name, c.course, t.teacher_subject
FROM enrollments e
JOIN students s ON s.student_id = e.student_id
JOIN courses c ON c.course = e.course
JOIN teachers t ON t.teacher_name = c.teacher_name;
```

---

## 4. Boyce-Codd Normal Form (BCNF)

**Rule:** A stricter version of 3NF. For every dependency `A → B`, `A` must be a candidate key.

**Example where 3NF passes but BCNF fails:**

| student_id | course | teacher |
|---|---|---|
| 1 | Math | Mr. Verma |
| 2 | Math | Mr. Verma |
| 3 | Science | Ms. Rao |

If each course has exactly one teacher, `course → teacher`. But `course` alone isn't a candidate key here (the key is `student_id + course`) — this satisfies 3NF but violates BCNF.

**Fix:** Same technique — split into `courses(course PK, teacher)` and `enrollments(student_id, course)`.

---

## Summary Table

| Form | Fixes | Rule in one line |
|---|---|---|
| 1NF | Repeating groups | Atomic values only |
| 2NF | Partial dependency | Non-key columns depend on the *whole* key |
| 3NF | Transitive dependency | Non-key columns depend *only* on the key |
| BCNF | Remaining anomalies | Every determinant must be a candidate key |

---

## Normalization vs. Denormalization

| | Normalization | Denormalization |
|---|---|---|
| Goal | Reduce redundancy | Improve read performance |
| Trade-off | More joins needed | More storage, some redundancy |
| Common in | OLTP (transactional systems) | OLAP (reporting/analytics/data warehouses) |

Use full normalization for transactional systems where data integrity matters most. Selectively denormalize in reporting/analytics systems where read speed matters more than storage efficiency.