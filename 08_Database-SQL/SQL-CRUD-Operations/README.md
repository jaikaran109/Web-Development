# SQL CRUD Operations

CRUD stands for **Create, Read, Update, Delete** — the four basic operations used to manage data in any database.

| Operation | SQL Command | Purpose |
|---|---|---|
| Create | `INSERT` | Add new records |
| Read | `SELECT` | Retrieve existing records |
| Update | `UPDATE` | Modify existing records |
| Delete | `DELETE` | Remove records |

---

## Sample Table Used in Examples

```sql
CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    age INT,
    grade CHAR(1),
    email VARCHAR(100) UNIQUE
);
```

---

## 1. Create — `INSERT`

Adds new rows into a table.

```sql
-- Insert a single row
INSERT INTO students (name, age, grade, email)
VALUES ('Aarav', 16, 'A', 'aarav@example.com');

-- Insert multiple rows at once
INSERT INTO students (name, age, grade, email) VALUES
    ('Priya', 17, 'B', 'priya@example.com'),
    ('Karan', 15, 'A', 'karan@example.com');
```

**Notes:**
- Column names should be specified explicitly (safer than relying on column order).
- Values must match the data types and constraints defined in the table.

---

## 2. Read — `SELECT`

Retrieves data from one or more tables.

```sql
-- Get all columns, all rows
SELECT * FROM students;

-- Get specific columns
SELECT name, grade FROM students;

-- Filter rows
SELECT * FROM students WHERE age > 15;

-- Sort results
SELECT * FROM students ORDER BY age DESC;

-- Limit number of rows returned
SELECT * FROM students LIMIT 5;
```

**Notes:**
- `SELECT` never modifies data — it's read-only.
- Combine with `WHERE`, `ORDER BY`, `GROUP BY`, and `JOIN` for more advanced retrieval.

---

## 3. Update — `UPDATE`

Modifies existing rows.

```sql
-- Update a single row
UPDATE students
SET grade = 'A'
WHERE student_id = 2;

-- Update multiple columns at once
UPDATE students
SET age = 18, grade = 'A'
WHERE student_id = 1;
```

**⚠️ Important:** Always use a `WHERE` clause with `UPDATE`. Omitting it updates **every row** in the table.

```sql
-- Dangerous: updates ALL rows
UPDATE students SET grade = 'A';
```

---

## 4. Delete — `DELETE`

Removes rows from a table.

```sql
-- Delete a specific row
DELETE FROM students WHERE student_id = 3;

-- Delete rows matching a condition
DELETE FROM students WHERE age < 15;
```

**⚠️ Important:** Always use a `WHERE` clause with `DELETE`. Omitting it deletes **every row** in the table (structure remains).

```sql
-- Dangerous: deletes ALL rows
DELETE FROM students;
```

**Difference between DELETE and TRUNCATE:**

| Command | Removes | Resets auto-increment | Can use WHERE | Can rollback |
|---|---|---|---|---|
| `DELETE` | Selected rows | No (usually) | Yes | Yes (within transaction) |
| `TRUNCATE` | All rows | Yes | No | Depends on DB |

---

## Full Example Flow

```sql
-- CREATE
INSERT INTO students (name, age, grade, email)
VALUES ('Sneha', 16, 'B', 'sneha@example.com');

-- READ
SELECT * FROM students WHERE name = 'Sneha';

-- UPDATE
UPDATE students SET grade = 'A' WHERE name = 'Sneha';

-- DELETE
DELETE FROM students WHERE name = 'Sneha';
```

---

## Best Practices

- Always test `UPDATE`/`DELETE` statements first with a `SELECT` using the same `WHERE` clause, to confirm which rows will be affected.
- Wrap critical changes in a transaction so you can `ROLLBACK` if something goes wrong:

```sql
START TRANSACTION;

UPDATE students SET grade = 'A' WHERE student_id = 5;

-- Check the result, then either:
COMMIT;
-- or
ROLLBACK;
```

- Use parameterized queries in application code to prevent SQL injection when inserting or filtering based on user input.