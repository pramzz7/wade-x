const http = require('http');
const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017');

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.url === '/employees' && req.method === 'GET') {
    try {
      await client.connect();
      const db = client.db('EmployeeReviews');
      const employees = await db.collection('employees').find().toArray();

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(employees));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    }
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(5000, () => {
  console.log('Server running at http://localhost:5000/employees');
});
