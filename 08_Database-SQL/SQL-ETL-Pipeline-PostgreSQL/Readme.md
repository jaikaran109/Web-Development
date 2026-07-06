# Practical: Implementing an ETL Pipeline using PostgreSQL

## Aim

To simulate an ETL (Extract–Transform–Load) pipeline using PostgreSQL, including data extraction from CSV, data transformation using SQL, and loading processed data into database tables.

---

## Case Study

A retail company collects sales data in CSV format from different cities.

The company wants to:
- Store raw data in the database
- Clean and transform the data
- Generate analytical summaries

You are assigned the role of a **Data Engineer** to implement a basic ETL pipeline using PostgreSQL.

---

## Software / Tools Required

- PostgreSQL (pgAdmin / psql)
- CSV file (`sales_data.csv`)

---

## Part A — Dataset

Create a CSV file named:

```
sales_data.csv
```

### Dataset Content

```csv
order_id,product,price,quantity,city
101,Laptop,50000,1,Delhi
102,Phone,20000,2,Mumbai
103,Tablet,30000,1,Delhi
104,Headphones,2000,3,Bangalore
105,Phone,20000,1,Mumbai
106,Laptop,50000,1,Delhi
107,Tablet,30000,2,Bangalore
108,Phone,20000,1,Delhi
```

| order_id | product | price | quantity | city |
|---|---|---|---|---|
| 101 | Laptop | 50000 | 1 | Delhi |
| 102 | Phone | 20000 | 2 | Mumbai |
| 103 | Tablet | 30000 | 1 | Delhi |
| 104 | Headphones | 2000 | 3 | Bangalore |
| 105 | Phone | 20000 | 1 | Mumbai |
| 106 | Laptop | 50000 | 1 | Delhi |
| 107 | Tablet | 30000 | 2 | Bangalore |
| 108 | Phone | 20000 | 1 | Delhi |

---

*(Next parts — Part B: Extract, Part C: Transform, Part D: Load — to be added.)*