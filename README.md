# Grocery Booking API

## Overview

This repository contains the source code for a Grocery Booking API. The API is designed to facilitate the booking of grocery items through a simple and efficient system. Follow the steps below to set up and run the project.

## Installation

### Step 1: Clone the Project
```bash
git clone https://github.com/your-username/grocery-booking-api.git
cd grocery-booking-api
```

### Step 2: Install Dependencies
```bash
npm i
```
### Step 3: Import Database
- Import the provided qp-assessment.sql file into your local MySQL database.
- Make sure to create a database named qp-assessment before importing the SQL file.

### Step 4: Run the Project
```bash
npm run dev
```

### Default Users
Two default users are created in the database:
1. userName :- anas and password :- 123456 (Admin)
2. userName :- john and password :- 123456

### Postman Collection
A Postman collection is included in the project for testing and exploring the API. You can find the collection file at qp-assessment.postman_collection.json.

Import this collection into Postman and use the available requests to interact with the API. The collection includes examples and covers various API endpoints.
