import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employee reviews from Node.js server
    fetch('http://localhost:5000/employees')
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="container">
      <h2>Employee Review Management</h2>

      {employees.length === 0 ? (
        <p>No employee reviews available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Rating</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp._id || emp.employeeId}>
                <td>{emp.employeeId}</td>
                <td>{emp.employeeName}</td>
                <td>{emp.department}</td>
                <td>{emp.designation}</td>
                <td>{emp.rating} / 5</td>
                <td>{emp.review}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
