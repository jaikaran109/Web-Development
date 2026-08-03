# Banking Dataset: CTEs & Window Functions

## 1. Dataset Overview

### 1.1 customers
Contains demographic and KYC-related information of bank customers. This table is mainly used for grouping customers by city/state, filtering by KYC status, and joining with `accounts` and `loans`.

**Key columns:** `customer_id`, `full_name`, `city`, `state`, `kyc_status`, `created_date`

---

### 1.2 accounts
Stores account-level information such as account type, branch, balance, and status. Useful for partitioning, aggregations, and ranking customers by balances.

**Key columns:** `account_id`, `customer_id`, `branch_id`, `account_type`, `current_balance`, `account_status`

---

### 1.3 transactions
Transaction-level data used for time-based analysis, running totals, previous/next transaction comparison, and advanced window functions.

**Key columns:** `transaction_id`, `account_id`, `transaction_date`, `transaction_type`, `amount`, `running_balance`

---

### 1.4 loans
Contains loan-related information such as loan amount, interest rate, loan type, and status. Useful for ranking, cumulative distribution, and credit analysis.

**Key columns:** `loan_id`, `customer_id`, `loan_type`, `loan_amount`, `interest_rate`, `loan_status`

---

### Table Relationships

```
customers (1) ──< accounts (1) ──< transactions
customers (1) ──< loans
```

- One customer can have many accounts.
- One account can have many transactions.
- One customer can have many loans.

---

## 2. Common Table Expressions (CTEs)

### Concept
A Common Table Expression (CTE) is a temporary result set defined using the `WITH` clause. It improves query readability and allows complex logic to be broken into simple steps. CTEs are especially useful for intermediate aggregations and reusable subqueries.

### Syntax
```sql
WITH cte_name AS (
    SELECT ...
)
SELECT * FROM cte_name;
```

### Example
```sql
WITH high_balance_customers AS (
    SELECT customer_id, SUM(current_balance) AS total_balance
    FROM accounts
    GROUP BY customer_id
    HAVING SUM(current_balance) > 100000
)
SELECT c.full_name, h.total_balance
FROM high_balance_customers h
JOIN customers c ON c.customer_id = h.customer_id;
```

---

## 3. Window Functions

### Concept
Window functions perform calculations across a set of rows related to the current row **without collapsing the result set**. They are commonly used for ranking, running totals, comparisons, and analytical queries.

### Syntax
```sql
function_name() OVER (PARTITION BY column ORDER BY column)
```

### Common Window Functions

| Function | Purpose |
|---|---|
| `ROW_NUMBER()` | Assigns a unique sequential number to each row within a partition |
| `RANK()` | Assigns a rank, with gaps for ties |
| `DENSE_RANK()` | Assigns a rank, without gaps for ties |
| `SUM() OVER()` | Running/cumulative total |
| `AVG() OVER()` | Running average |
| `LAG()` | Value from the previous row |
| `LEAD()` | Value from the next row |
| `NTILE(n)` | Distributes rows into `n` buckets (cumulative distribution) |

### Example — Running Balance per Account
```sql
SELECT
    account_id,
    transaction_date,
    amount,
    SUM(amount) OVER (PARTITION BY account_id ORDER BY transaction_date) AS running_total
FROM transactions;
```

### Example — Rank Customers by Loan Amount
```sql
SELECT
    customer_id,
    loan_amount,
    RANK() OVER (ORDER BY loan_amount DESC) AS loan_rank
FROM loans;
```

### Example — Compare with Previous Transaction
```sql
SELECT
    account_id,
    transaction_date,
    amount,
    LAG(amount) OVER (PARTITION BY account_id ORDER BY transaction_date) AS previous_amount
FROM transactions; 
```
