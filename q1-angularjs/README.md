# Q1: Employee List Viewer (AngularJS)

## Overview
This is an AngularJS single-page application meeting all criteria for **Question 1**:
- Uses `ng-app="employeeApp"` and `ng-controller="EmployeeController"`.
- Data is created directly inside the controller (`$scope.employees`) with 4 employee objects containing `name`, `department`, and `salary`.
- Renders the employees in a responsive table using `ng-repeat`.
- Displays columns for **Name**, **Department**, and **Salary**.
- No external data fetching is used.

## How to Run
Simply open `index.html` in any web browser:
- Double click `index.html`, OR
- Right click -> Open with Chrome / Edge, OR
- Serve with any static web server (e.g. `npx serve .`)
