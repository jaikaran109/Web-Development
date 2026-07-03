What is MongoDB?

MongoDB is a database used to store and manage data for applications.
It is designed to handle large amounts of data, work very fast, and scale easily when users increase.


Unlike traditional databases that store data in tables and rows, MongoDB stores data in a flexible JSON-like format.


This makes it very suitable for modern applications like web apps, mobile apps, and AI systems.



What is a NoSQL Database?

NoSQL stands for “Not Only SQL.”

A NoSQL database does not follow the strict table-row-column structure used in traditional SQL databases.

Key characteristics of NoSQL databases:
1. Schema is flexible (structure can change anytime)

2. Can store structured, semi-structured, and unstructured data

3. Designed for high performance and scalability

4. Best for real-world data that keeps evolving

MongoDB is a NoSQL database because it does not use tables and rows.



What is a Database in MongoDB?
A database in MongoDB is a container that holds collections.
A database is created only when it contains data or collections.


What is a Collection?
A collection is a group of related documents.
It is similar to a table in SQL, but:
1. It does not require a fixed structure
2. Documents inside the same collection can have different fields



What is a Document?
A document is a single record stored in MongoDB.
It is stored in JSON-like format (called BSON internally).
Example - 
{
  "name": "Jai karan",
  "role": "Instructor",
  "experience": 5
}


Some Basic commands - 
1. Show all databases - show dbs
2. Switch to a database (or create if not exist) - use schoolDB
3. Check current database - db
4. Show collections in current database - show collections


<img width="524" height="277" alt="image" src="https://github.com/user-attachments/assets/66de7760-5453-4582-91c8-c62527258e4d" />
