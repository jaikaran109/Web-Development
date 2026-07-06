# SQL Query Clauses

## 1. WHERE Clause

The `WHERE` clause is used to filter records based on specified conditions. It restricts the rows returned by a query to only those that satisfy the given condition.

Example conditions include:
- Equality (`=`)
- Inequality (`!=`, `<`, `>`, `<=`, `>=`)
- Range checks (`BETWEEN`)
- Pattern matching (`LIKE`)
- NULL checks (`IS NULL`, `IS NOT NULL`)

```sql
SELECT * FROM orders WHERE amount > 500;
```

---

## 2. Aggregate Functions

Aggregate functions perform calculations on a set of rows and return a single summarized value.

### COUNT()
Returns the number of rows or non-NULL values in a column.
- `COUNT(*)` counts all rows
- `COUNT(column)` counts only non-NULL values

### SUM()
Returns the total sum of values in a numeric column. Used to calculate totals such as revenue, total payments, or total charges.

### AVG()
Returns the average (mean) value of a numeric column. Commonly used to calculate average prices, weights, or payments.

### MIN()
Returns the smallest value in a column. Used to find minimum price, minimum payment, or lowest weight.

### MAX()
Returns the largest value in a column. Used to identify maximum payment, highest price, or maximum product weight.

```sql
SELECT COUNT(*), SUM(amount), AVG(amount), MIN(amount), MAX(amount)
FROM orders;
```

---

## 3. GROUP BY Clause

The `GROUP BY` clause groups rows that have the same values in specified columns, enabling the use of aggregate functions on each group.

It is commonly used to generate summaries such as counts per category or totals per state.

```sql
SELECT state, COUNT(*) AS total_orders
FROM orders
GROUP BY state;
```

---

## 4. HAVING Clause

The `HAVING` clause filters grouped results *after* aggregation. Unlike `WHERE`, it operates on aggregate values.

It is used when conditions involve aggregate functions like `COUNT`, `SUM`, or `AVG`.

```sql
SELECT state, COUNT(*) AS total_orders
FROM orders
GROUP BY state
HAVING COUNT(*) > 10;
```

---

## 5. ORDER BY Clause

The `ORDER BY` clause sorts the result set in ascending (`ASC`) or descending (`DESC`) order based on one or more columns.

It helps in ranking, ordering summaries, and identifying top or bottom values.

```sql
SELECT state, COUNT(*) AS total_orders
FROM orders
GROUP BY state
ORDER BY total_orders DESC;
```

---

## 6. Subqueries

A subquery is a query nested inside another query. It allows comparison of aggregated results with overall statistics.

Subqueries are often used with `HAVING` for advanced filtering.

```sql
SELECT state, COUNT(*) AS total_orders
FROM orders
GROUP BY state
HAVING COUNT(*) > (
    SELECT AVG(state_count)
    FROM (
        SELECT COUNT(*) AS state_count
        FROM orders
        GROUP BY state
    ) AS sub
);
```

---

### Clause Execution Order (for reference)

```
FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY
```