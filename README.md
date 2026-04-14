# Simple-Authentication-API-Node.js-TypeScript-
Overview
This project is a basic authentication API built using Node.js, Express, and TypeScript.
It includes essential authentication features such as:

User registration

User login

Password hashing using bcryptjs

JWT token generation

Protected route (/me)

In‑memory user storage (no database)

This project is ideal for learning backend authentication flow.

Project Structure
API Endpoints
Register User
Method: POST
Endpoint: /api/auth/register
Login User
Method: POST
Endpoint: /api/auth/login
Get Profile (Protected Route)
Method: GET
Endpoint: /api/auth/me
Authentication Flow
User registers and the password is hashed.

User logs in and the password is compared.

A JWT token is generated.

Protected routes verify the token.

If the token is valid, user information is returned.

Technologies Used
Node.js

Express

TypeScript

bcryptjs

jsonwebtoken

ts-node

Nodemon

Purpose of This Project
Understand how authentication works

Learn JWT token flow

Practice Express routing and middleware

Build a clean backend structure

Prepare for full‑stack development
