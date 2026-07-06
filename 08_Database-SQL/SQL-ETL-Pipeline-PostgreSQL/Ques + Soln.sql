
-- Create Table 
CREATE TABLE sales_data(
	order_id INT,
	product VARCHAR(50),
	price INT,
	quantity INT,
	city VARCHAR(50)
);


-- ETL Operations
-- STEP 1: Extract Data
-- Verify Data
SELECT * FROM sales_data;


-- STEP 2: Transform Data

-- 2.1 Remove Duplicate Records
SELECT DISTINCT * FROM sales_data;


-- 2.2 Create New Column (Total Sales)
SELECT *,
       price * quantity AS total_sales
FROM sales_data;


-- 2.3 Create Transformed Table
CREATE TABLE transformed_sales AS
SELECT DISTINCT *,
       price * quantity AS total_sales
FROM sales_data;


SELECT * FROM transformed_sales;


-- 2.4 Aggregate Data (City-wise Sales)
SELECT city,
       SUM(total_sales) AS total_sales
FROM transformed_sales
GROUP BY city;


-- STEP 3: Load Data
-- 3.1 Create Summary Table
CREATE TABLE city_sales_summary AS
SELECT city,
       SUM(total_sales) AS total_sales
FROM transformed_sales
GROUP BY city;


-- 3.2 Verify Loaded Data
SELECT * FROM city_sales_summary 



-- Exercise Set 1: Easy Level
-- 1.	Display all records from sales_data. 
-- 2.	Count total number of records. 
-- 3.	Display product and city columns. 
-- 4.	Find total sales for each record (price × quantity). 
-- 5.	Display unique products. 

-- 1
SELECT * FROM sales_data;

-- 2
SELECT COUNT(*) FROM sales_data;

-- 3
SELECT product, city FROM sales_data;

-- 4
SELECT price * quantity AS total_sales FROM sales_data;

-- 5
SELECT DISTINCT product FROM sales_data;



-- Exercise Set 2: Moderate Level
-- 1.	Calculate total sales for each city. 
-- 2.	Find total quantity sold for each product. 
-- 3.	Display average price of products. 
-- 4.	Find highest and lowest priced products. 
-- 5.	Count number of orders per city. 

-- 1
SELECT city, SUM(price * quantity) FROM sales_data GROUP BY city;

-- 2
SELECT product, SUM(quantity) FROM sales_data GROUP BY product;

-- 3
SELECT AVG(price) FROM sales_data;

-- 4
SELECT MAX(price), MIN(price) FROM sales_data;

-- 5
SELECT city, COUNT(*) FROM sales_data GROUP BY city;



-- Exercise Set 3: Hard Level
-- 1.	Find the most popular product (highest quantity sold). 
-- 2.	Find total revenue generated per product. 
-- 3.	Display city with highest sales. 
-- 4.	Find average order value per city. 
-- 5.	Display top 3 highest sales records. 

-- 1 Most popular product
SELECT product, SUM(quantity) AS total_qty
FROM sales_data
GROUP BY product
ORDER BY total_qty DESC
LIMIT 1;

-- 2 Revenue per product
SELECT product, SUM(price * quantity)
FROM sales_data
GROUP BY product;

-- 3 City with highest sales
SELECT city, SUM(price * quantity) AS total_sales
FROM sales_data
GROUP BY city
ORDER BY total_sales DESC
LIMIT 1;

-- 4 Avg order value per city
SELECT city, AVG(price * quantity)
FROM sales_data
GROUP BY city;

-- 5 Top 3 sales
SELECT *, price * quantity AS total_sales
FROM sales_data
ORDER BY total_sales DESC
LIMIT 3;
