# Morgan (HTTP Request Logger Middleware)

## Overview

Morgan is an HTTP request logging middleware for Express. It does not perform authentication or verification — it logs details of every incoming request and its response to the console, primarily for debugging and observability during development.

## Installation

```bash
npm install morgan
```

## Setup

```javascript
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
```

Once attached, every request is logged automatically without additional code.

## Sample Output

```
GET /login 200 15.234 ms - 42
POST /register 201 45.123 ms - 128
GET /profile 401 3.456 ms - 25
```

Each line includes: HTTP method, route, status code, response time, and response size.

## Common Formats

| Format | Description |
|---|---|
| `dev` | Concise, colored output — suited for development |
| `combined` | Detailed, Apache-style output (includes IP, user-agent) — suited for production logs |
| `tiny` | Minimal output |

## What Morgan Does Not Do

- Does not validate credentials
- Does not verify tokens or sessions
- Does not block or allow requests

Morgan only records what happened after the request has already been processed by the application's own route handlers and middleware (e.g., auth checks). Any actual verification logic — password comparison, JWT validation — is implemented separately in the application code; Morgan simply logs the outcome (status code) of that logic.

## Typical Use Case in an Auth System

Logging is useful for tracing issues during development, such as identifying that a login request returned `401` (invalid credentials) or a registration request returned `500` (server error), without needing to add manual `console.log` statements throughout the codebase.
