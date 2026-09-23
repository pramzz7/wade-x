import { useState, useEffect } from 'react';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/employees')
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="container">
      <style>{`
        .container {
          max-width: 950px;
          margin: 30px auto;
          padding: 25px 30px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: left;
          font-family: Arial, Helvetica, sans-serif;
        }
        h2 {
          text-align: center;
          color: #2c3e50;
          margin-top: 0;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 2px solid #3498db;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 15px;
        }
        th, td {
          padding: 12px 15px;
          text-align: left;
          border: 1px solid #dddddd;
        }
        th {
          background-color: #3498db;
          color: #ffffff;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 13px;
          letter-spacing: 0.5px;
        }
        tr:nth-child(even) {
          background-color: #f9fbfd;
        }
        tr:hover {
          background-color: #f1f7fd;
        }
        .no-data {
          text-align: center;
          color: #7f8c8d;
          font-style: italic;
          padding: 20px;
        }
        .rating-badge {
          display: inline-block;
          padding: 3px 8px;
          background-color: #e8f5e9;
          color: #2e7d32;
          font-weight: bold;
          border-radius: 4px;
        }
      `}</style>

      <h2>Employee Review Management</h2>

      {employees.length === 0 ? (
        <p className="no-data">No employee reviews available</p>
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
                <td>
                  <span className="rating-badge">{emp.rating} / 5</span>
                </td>
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
