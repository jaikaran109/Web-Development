CREATE TABLE customers(
	customer_id INT PRIMARY KEY,
	full_name VARCHAR(100),
	date_of_birth DATE,
	city VARCHAR(50),
	state VARCHAR(10),
	kyc_status VARCHAR(20),
	created_date DATE
);


CREATE TABLE accounts(
	account_id INT PRIMARY KEY,
	customer_id INT,
	branch_id INT,
	account_type VARCHAR(20),
	open_date DATE,
	current_balance DECIMAL(15,2), 
	account_status VARCHAR(20),
	FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE transactions(
	transaction_id INT PRIMARY KEY,
	account_id INT,
	transaction_date DATE,
	transaction_type VARCHAR(10),
	ammount DECIMAL(15,2),
	channel VARCHAR(20),
	running_balance DECIMAL(15,2),
	FOREIGN KEY (account_id) REFERENCES accounts(account_id)
);

CREATE TABLE loans(
	loan_id INT PRIMARY KEY,
	customer_id INT ,
	account_id INT,
	loan_type VARCHAR(30),
	loan_amount DECIMAL(15,2),
	interest_rate DECIMAL(5,2),
	loan_start_date DATE , 
	loan_status VARCHAR(20),
	FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
	FOREIGN KEY (account_id) REFERENCES accounts(account_id)
);


-- CTE Questions 
-- 1. Create a CTE to fetch all VERIFIED customers and display their customer_id and city.
	 WITH verified_customers AS(
		SELECT customer_id , city 
		FROM customers
		WHERE kyc_status = 'VERIFIED'
	 )
	 SELECT * FROM verified_customers;


-- 2. Create a CTE that calculates the total number of accounts per branch.
	WITH branch_customers AS(
		SELECT branch_id , COUNT(*) AS total_accounts
		FROM accounts
		GROUP BY branch_id
	)
	SELECT * FROM branch_accounts;
	

-- 3. Using a CTE, find customers who have more than one account.
	WITH customer_accounts AS (
		SELECT customer_id , COUNT(*) AS acc_count
		FROM accounts
		GROUP BY customer_id
	)
	SELECT * FROM customer_accounts
	WHERE acc_count > 1;


-- 4. Create a CTE to calculate average account balance per account_type.
	WITH avg_balance AS(
		SELECT account_type , AVG(current_balance) AS avg_balance 
		FROM accounts
		GROUP BY account_type
	)
	SELECT * FROM avg_balance;


-- 5. Using a CTE, list all ACTIVE loans with loan amount greater than 5,000,000.
	WITH high_value_loans AS(
		SELECT * FROM loans
		WHERE loan_status = 'ACTIVE'
		AND loan_amount > 5000000
	)
	SELECT * FROM high_value_loans;


-- 6. Create a CTE that calculates total loan amount per customer.
	WITH customer_loans AS (
	    SELECT customer_id, SUM(loan_amount) AS total_loan_amount
	    FROM loans
	    GROUP BY customer_id
	)
	SELECT * FROM customer_loans;


-- 7. Using a CTE, find branches where total account balance exceeds 50,000,000.
	WITH branch_balance AS(
		SELECT branch_id , SUM(current_balance) AS total_balance
		FROM accounts
		GROUP BY branch_id
	)
	SELECT * FROM branch_balance WHERE total_balance > 50000000;


-- 8. Create a CTE to find customers who have both an account and a loan.
	WITH acc_customers AS(
		SELECT DISTINCT customer_id FROM accounts
	), loan_customers AS(
	SELECT DISTINCT customer_id FROM loans
	)
	SELECT a.customer_id 
	FROM acc_customers a
	JOIN loan_customers I ON a.customer_id = I.customer_id;

-- 9. Using a CTE, calculate total debit and credit amount separately from transactions.
	WITH total_debt_and_credit AS(
		SELECT transaction_type , SUM(ammount) AS total_amount
		FROM transactions
		GROUP BY transaction_type
	)
	SELECT * FROM total_debt_and_credit;


-- 10. Create a CTE to find customers whose KYC is PENDING and have an ACTIVE account.
	WITH pending_kyc AS(
		SELECT customer_id FROM customers
		WHERE kyc_status = 'PENDING'
	)
	SELECT DISTINCT a.customer_id
	FROM accounts a
	JOIN pending_kyc p
	ON a.customer_id = p.customer_id
	WHERE a.account_status = 'ACTIVE';



-- Window Function Questions
-- 1. Ranking & Distribution Functions
	-- 1. Use ROW_NUMBER() to assign a unique transaction number for each account ordered by transaction_date.
			SELECT *, ROW_NUMBER() OVER (PARTITION BY account_id ORDER BY transaction_date) AS txn_no FROM transactions;

		
	-- 2. Rank customers based on their current_balance using RANK().
			SELECT customer_id,current_balance, RANK() OVER(ORDER BY current_balance DESC) AS balance_rank
			FROM accounts;

	
	-- 3. Rank customers based on current_balance using DENSE_RANK() and observe the difference from RANK().
			SELECT customer_id , current_balance , DENSE_RANK() OVER(ORDER BY current_balance DESC) AS dense_rank FROM accounts;

	
	-- 4. Divide customers into 4 quartiles based on current_balance using NTILE(4).
			SELECT customer_id , current_balance , NTILE(4) OVER(ORDER BY current_balance) AS cumulative_dist FROM accounts;

	
	-- 5. Use CUME_DIST() to calculate cumulative distribution of loan_amount.
			SELECT loan_id , loan_amount,
			CUME_DIST() OVER(ORDER BY loan_amount) AS cumulative_dist
			FROM loans;


-- 2. Lead & Lag Functions
	-- 6. Use LAG() to find the previous transaction amount for each account.
		SELECT account_id , transaction_date , ammount ,
		LAG(ammount) OVER (PARTITION BY account_id ORDER BY transaction_date) AS
		prev_amount
		FROM transactions;
		
	
	-- 7. Use LEAD() to find the next transaction amount for each account.
		SELECT account_id , transaction_date , ammount , 
		LEAD(ammount) OVER (PARTITION BY account_id ORDER BY transaction_date) AS
		next_amount
		FROM transactions;

-- 3. Value-Based Window Functions
		-- 8. Use FIRST_VALUE() to find the first transaction amount for each account.
			SELECT account_id , ammount , transaction_date,
			FIRST_VALUE(ammount) OVER(
				PARTITION BY account_id
				ORDER BY transaction_date
			) AS first_txn_amount
			FROM transactions;

		
		-- 9. Use LAST_VALUE() to find the latest transaction amount for each account (ensure correct window frame).
			SELECT account_id , transaction_date , ammount,
			LAST_VALUE(ammount) OVER(
				PARTITION BY account_id
				ORDER BY transaction_date
				ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
			)AS last_txn_amount
			FROM transactions;


-- 4. Conditional & Null Handling with Window Logic
--  	10. Display account balance category using CASE WHEN:
-- 		    balance < 10,000 → 'LOW'
-- 		    balance between 10,000 and 100,000 → 'MEDIUM'
-- 		    balance > 100,000 → 'HIGH'
			SELECT account_id,current_balance,
			CASE
				WHEN current_balance < 10000 THEN 'LOW'
				WHEN current_balance BETWEEN 10000 AND 100000 THEN 'MEDIUM'
				ELSE 'HIGH'
			END AS balance_category
			FROM accounts;
