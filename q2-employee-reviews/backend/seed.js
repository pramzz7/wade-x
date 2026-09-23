const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017');

async function seed() {
  await client.connect();
  const collection = client.db('EmployeeReviews').collection('employees');

  await collection.deleteMany({});
  await collection.insertMany([
    {
      employeeName: "Sophia Martinez",
      employeeId: "EMP-1001",
      department: "Engineering",
      designation: "Senior Engineer",
      rating: 5,
      review: "Excellent technical leadership and problem-solving skills."
    },
    {
      employeeName: "David Reynolds",
      employeeId: "EMP-1002",
      department: "Marketing",
      designation: "Marketing Lead",
      rating: 4,
      review: "Exceeded conversion targets by 25%. Great communicator."
    },
    {
      employeeName: "Amina Al-Mansoor",
      employeeId: "EMP-1003",
      department: "Product",
      designation: "UX Researcher",
      rating: 5,
      review: "Delivers outstanding user insights and design empathy."
    }
  ]);

  console.log("Database seeded successfully with employee reviews!");
  await client.close();
}

seed();
