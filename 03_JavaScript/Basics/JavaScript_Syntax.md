# JavaScript

## What is JavaScript?

JavaScript is a **high-level, multi-paradigm, object-oriented programming language** used to create dynamic and interactive web pages.

### High-Level Language

JavaScript is a high-level language because developers only need to write code, while memory management and many low-level operations are handled automatically by the JavaScript engine.

### Multi-Paradigm Language

A multi-paradigm language supports more than one programming style.

JavaScript supports:

- Procedural Programming
- Object-Oriented Programming (OOP)
- Functional Programming
- Event-Driven Programming

### Synchronous and Single-Threaded Nature

JavaScript is synchronous and single-threaded by default.

- Synchronous means code executes line by line.
- Single-threaded means only one task is executed at a time.

```js
console.log("A");
console.log("B");
console.log("C");
```

Output:

```js
A
B
C
```

### Language of the Web

JavaScript is known as the Language of the Web because it is used to make websites and web applications work dynamically.

Examples:

- Form Validation
- Interactive Buttons
- Image Sliders
- Dynamic Content Updates
- API Calls

---

# Opportunities After Learning JavaScript

After learning JavaScript, you can become:

1. Frontend Developer
2. Backend Developer
3. Mobile Application Developer (React Native)
4. Full Stack Developer

---

# Introduction to Node.js

Node.js is an open-source, cross-platform JavaScript runtime environment that runs on Google's V8 Engine and executes JavaScript code outside a web browser.

It was designed to build scalable network applications.

### Developed By

Node.js was developed by **Ryan Dahl**.

### Features of Node.js

- Open Source
- Cross Platform
- Uses Chrome's V8 Engine
- Executes JavaScript Outside the Browser
- Supports Backend Development
- Suitable for Network Applications
- Fast and Efficient

### Why Node.js?

Normally JavaScript runs inside a browser.

Node.js allows JavaScript to run directly on the operating system and provides access to powerful libraries for building server-side applications.

---

# Variables

Variables are containers used for storing data.

Their values can be changed during program execution.

Example:

```js
var a = 17;

console.log(a);
```

Output:

```js
17
```

---

# Dynamically Typed vs Statically Typed Languages

## Statically Typed Language (STL)

In a statically typed language, the data type of every variable and expression is known at compile time.

Examples:

- Java
- C++
- C#

```java
int age = 20;
```

The variable can only store integer values.

---

## Dynamically Typed Language (DTL)

In a dynamically typed language, variables can receive different values during runtime and their type is determined at runtime.

Examples:

- JavaScript
- Python

```js
let data = 20;

data = "Jai Karan";
```

Both statements are valid.

---

# Arrays

Arrays are used to store multiple data items in a single variable.

### Features of Arrays

- Store multiple values
- Use 0-based indexing
- Can store different data types
- Dynamic in size

Unlike statically typed languages, JavaScript arrays can store values of different data types.

Example:

```js
var arr = [12, "Ferrari", true, 12.87];

console.log(arr);
```

Output:

```js
[12, "Ferrari", true, 12.87]
```

## Accessing Elements

```js
var a = arr[1];

console.log(a);
```

Output:

```js
Ferrari
```

## Replacing Elements

```js
arr[1] = "OLA";

console.log(arr);
```

## Length of Array

```js
console.log(arr.length);
```

Returns the total number of elements present in the array.

---

# Array Methods

Let:

```js
var arr2 = [12, 19, 56, 57];
```

---

## pop() Method

The `pop()` method removes the last element from an array.

```js
arr2.pop();

console.log(arr2);
```

Output:

```js
[12, 19, 56]
```

---

## push() Method

The `push()` method adds a new element at the end of an array.

```js
arr2.push(100);

console.log(arr2);
```

Output:

```js
[12, 19, 56, 100]
```

---

## shift() Method

The `shift()` method removes the first element of an array and returns the removed element.

```js
var d = arr2.shift();

console.log(d);
console.log(arr2);
```

Output:

```js
12
[19, 56, 100]
```

---

## unshift() Method

The `unshift()` method adds one or more elements at the beginning of an array.

```js
arr2.unshift(102);

console.log(arr2);
```

Output:

```js
[102, 19, 56, 100]
```

---

# Introduction to JavaScript Objects

In JavaScript, an object is an unordered collection of key-value pairs.

Each key-value pair is known as a **property**.

Example:

```js
let car = {
    modelNo: "S-Class",
    brand: "Mercedes",
    topSpeed: 400,
    color: "Red"
};
```

Here:

| Key | Value |
|------|------|
| modelNo | S-Class |
| brand | Mercedes |
| topSpeed | 400 |
| color | Red |

---

## Important Points About Objects

- The key of a property is usually a string.
- The value of a property can be:
  - String
  - Number
  - Boolean
  - Array
  - Object
  - Function

---

## Creating Objects

JavaScript provides multiple ways to create objects.

The most commonly used method is **Object Literal Notation**.

---

# Object Literal Notation

Every object in JavaScript describes a real-world entity using its properties.

Example:

```js
var person = {
    firstName: "Jai Karan",
    lastName: "Gupta",
    age: 20
};
```

Here:

- firstName, lastName, age → Keys
- "Jai Karan", "Gupta", 20 → Values

```js
console.log(person);
```

Output:

```js
{
    firstName: "Jai Karan",
    lastName: "Gupta",
    age: 20
}
```

---

# Objects Store Data in Key-Value Pairs

```js
var person = {
    firstName: "Jai Karan",
    lastName: "Gupta",
    age: 21,
    isCaptain: false
};
```

---

# Accessing Properties of an Object

Properties can be accessed using their keys.

## Dot Notation

```js
console.log(person.age);
```

Output:

```js
21
```

---

## Bracket Notation

```js
console.log(person["firstName"]);
```

Output:

```js
Jai Karan
```

---

# Arrays Inside Objects

JavaScript allows arrays to be stored inside objects.

---

# Objects Inside Objects

JavaScript also allows nested objects.

Example:

```js
var cap = {
    firstName: "Jai Karan",
    lastName: "Gupta",
    age: 20,

    friends: ["Kakul", "Sam", "Aarn"],

    address: {
        state: "UP",

        city: {
            name: "Gorakhpur",
            pincode: 273001
        }
    }
};
```

---

## Accessing an Array Inside an Object

```js
console.log(cap.friends[1]);
```

Output:

```js
Sam
```

---

## Accessing a Nested Object

```js
console.log(cap.address.city.name);
```

Output:

```js
Gorakhpur
```

---

# Updating an Existing Property

Suppose an object contains:

```js
cap.isAvenger = true;
```

We can update its value:

```js
cap.isAvenger = false;

console.log(cap);
```

Output:

```js
isAvenger: false
```

---

# Adding a New Property

A new property can be added to an object even after the object has been created.

```js
cap.socialMedia = [
    "Instagram",
    "Discord",
    "LinkedIn"
];

console.log(cap);
```

The `socialMedia` property will now become part of the object.

---

# Deleting a Property

The `delete` keyword is used to remove a property from an object.

```js
delete cap.age;

console.log(cap);
```

After execution, the `age` property will no longer exist inside the object.

---

# Quick Summary

## Array Methods

| Method | Work |
|----------|----------|
| push() | Add element at end |
| pop() | Remove element from end |
| shift() | Remove element from beginning |
| unshift() | Add element at beginning |

---

## Object Operations

| Operation | Example |
|------------|------------|
| Create Object | `let obj = {}` |
| Access Property | `obj.name` |
| Access Property | `obj["name"]` |
| Update Property | `obj.age = 21` |
| Add Property | `obj.city = "Lucknow"` |
| Delete Property | `delete obj.age` |
