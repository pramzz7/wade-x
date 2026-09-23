# Q2: Employee Review Management System

A full-stack Employee Review Management System built with **Node.js (`http` module)**, **MongoDB (`EmployeeReviews` database)**, and **React (Vite frontend)**.

---

## Architecture Overview

1. **Database (MongoDB)**:
   - **Database Name**: `EmployeeReviews`
   - **Collection**: `employees`
   - **Fields**:
     - `employeeName` (String): Name of the employee
     - `employeeId` (String): Unique employee ID (e.g. `EMP-1001`)
     - `department` (String): Department name (e.g. `Engineering`, `Marketing`)
     - `designation` (String): Employee role / job title
     - `rating` (Number): Performance rating out of 5
     - `review` (String): Performance evaluation comments

2. **Backend (Node.js)**:
   - Built with the native built-in `http` module (`http.createServer`) without third-party web frameworks.
   - Connects to MongoDB using official driver `mongodb`.
   - Exposes `GET /employees` which queries the `employees` collection and returns all reviews formatted in JSON.
   - Includes CORS headers (`Access-Control-Allow-Origin: *`) to enable seamless React consumption.
   - Includes an auto-seed feature so sample reviews are automatically inserted if the collection is empty.
   - Includes standalone `seed.js` script for manual resets and database initialization.

3. **Frontend (React)**:
   - Built with React (Vite) and clean modular CSS.
   - Automatically fetches employee records on mount from `http://localhost:5000/employees`.
   - Dual structured display:
     - **Cards View**: Modern cards with avatar initials, department tags, ID badges, star ratings, and styled review quotes.
     - **Table View**: Structured tabular format showing all fields.
   - **Error Handling & Presentation**:
     - Displays **"No employee reviews available"** when zero review documents exist.
     - Handles backend offline / network failure states with descriptive alert and **"Retry Connection"** button.
     - Animated loading spinner during fetch.
     - Real-time search by name, ID, department, designation, or review text.
     - Department filter dropdown with automatic option generation.

---

## How to Run

### Step 1: Start MongoDB
Ensure the MongoDB service is active on standard port `27017`:
```bash
# In Windows PowerShell:
Get-Service MongoDB
```

### Step 2: Seed and Start Backend Server
```bash
cd q2-employee-reviews/backend
npm install
node seed.js      # (Optional: seeds initial employee review documents)
node server.js    # Starts HTTP server at http://localhost:5000/
```
Verify the API:
```bash
curl http://localhost:5000/employees
```

### Step 3: Start the React Frontend
```bash
cd ../frontend
npm install
npm run dev       # Starts Vite dev server (e.g. http://localhost:3000 or http://localhost:5173)
```

Open the displayed URL in your browser to view and interact with the Employee Review Management System.
